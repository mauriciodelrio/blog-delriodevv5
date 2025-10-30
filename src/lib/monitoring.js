// Sistema de monitoreo para las APIs de views
import fs from 'fs';
import path from 'path';

const VIEWS_FILE = path.join(process.cwd(), 'data', 'views.json');
const LOG_FILE = path.join(process.cwd(), 'data', 'views.log');

export class ViewsMonitor {
  static log(level, message, data = {}) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data,
      pid: process.pid,
      environment: process.env.NODE_ENV || 'development'
    };
    
    // En Vercel, siempre log a consola (aparece en función logs)
    console.log(`[${level}] ${timestamp} - ${message}`, data);
    
    // Log a archivo solo si no estamos en serverless
    if (!process.env.VERCEL && !process.env.AWS_LAMBDA_FUNCTION_NAME) {
      try {
        const logLine = JSON.stringify(logEntry) + '\n';
        fs.appendFileSync(LOG_FILE, logLine);
      } catch (error) {
        console.error('Failed to write to log file:', error);
      }
    }
  }
  
  static info(message, data) {
    this.log('INFO', message, data);
  }
  
  static warn(message, data) {
    this.log('WARN', message, data);
  }
  
  static error(message, data) {
    this.log('ERROR', message, data);
  }
  
  static async checkHealth() {
    const health = {
      timestamp: new Date().toISOString(),
      status: 'healthy',
      issues: [],
      environment: process.env.VERCEL ? 'serverless' : 'traditional'
    };
    
    try {
      // Verificar que el archivo existe y es legible
      if (!fs.existsSync(VIEWS_FILE)) {
        health.issues.push('Views file does not exist');
        health.status = 'warning';
      } else {
        const stats = fs.statSync(VIEWS_FILE);
        
        // Verificar tamaño
        if (stats.size > 20 * 1024 * 1024) { // 20MB
          health.issues.push('Views file is very large');
          health.status = 'warning';
        }
        
        // Verificar que es JSON válido
        try {
          const data = fs.readFileSync(VIEWS_FILE, 'utf8');
          const parsed = JSON.parse(data);
          
          if (!parsed.posts || !parsed.metadata) {
            health.issues.push('Invalid JSON structure');
            health.status = 'error';
          } else {
            health.postsCount = Object.keys(parsed.posts).length;
            health.totalViews = parsed.metadata.totalViews || 0;
          }
        } catch (jsonError) {
          health.issues.push('Invalid JSON format');
          health.status = 'error';
        }
      }
      
      // Verificar permisos de escritura - ajustado para Vercel
      if (!process.env.VERCEL) {
        try {
          const testFile = path.join(path.dirname(VIEWS_FILE), '.write-test');
          fs.writeFileSync(testFile, 'test');
          fs.unlinkSync(testFile);
        } catch (writeError) {
          health.issues.push('No write permissions');
          health.status = 'error';
        }
      } else {
        // En Vercel, verificamos que podemos leer el archivo principal
        try {
          const data = fs.readFileSync(VIEWS_FILE, 'utf8');
          JSON.parse(data); // Verificar que es JSON válido
          health.vercelStatus = 'file accessible';
        } catch (error) {
          health.issues.push('Cannot access views file in Vercel');
          health.status = 'error';
        }
      }
      
    } catch (error) {
      health.issues.push(`Health check failed: ${error.message}`);
      health.status = 'error';
    }
    
    return health;
  }
  
  static async cleanupOldBackups() {
    try {
      // En Vercel, el sistema de archivos es de solo lectura
      // excepto para /tmp, así que esta función principalmente 
      // sirve para entornos tradicionales
      if (process.env.VERCEL) {
        this.info('Cleanup skipped in serverless environment');
        return { skipped: true, reason: 'serverless environment' };
      }
      
      const dataDir = path.dirname(VIEWS_FILE);
      const files = fs.readdirSync(dataDir);
      const backupFiles = files.filter(file => file.endsWith('.backup'));
      
      const retentionDays = parseInt(process.env.VIEWS_BACKUP_RETENTION_DAYS) || 7;
      const cutoffTime = Date.now() - (retentionDays * 24 * 60 * 60 * 1000);
      
      let cleaned = 0;
      for (const file of backupFiles) {
        const filePath = path.join(dataDir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.mtime.getTime() < cutoffTime) {
          fs.unlinkSync(filePath);
          this.info('Cleaned up old backup', { file });
          cleaned++;
        }
      }
      
      this.info('Cleanup completed', { filesRemoved: cleaned });
      return { success: true, filesRemoved: cleaned };
      
    } catch (error) {
      this.error('Failed to cleanup old backups', { error: error.message });
      return { success: false, error: error.message };
    }
  }
}