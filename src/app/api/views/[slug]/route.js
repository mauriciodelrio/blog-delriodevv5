import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { validateSlug, sanitizeViewsData, verifyFileIntegrity, viewsFileLock } from '@/lib/security';
import { ViewsMonitor } from '@/lib/monitoring';

const VIEWS_FILE = path.join(process.cwd(), 'data', 'views.json');
const RATE_LIMIT_HOURS = 4; // TTL para evitar spam
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB máximo para el archivo JSON

// Cache en memoria como fallback
let memoryCache = null;
let useFileSystem = true;

// Función para verificar si podemos usar el sistema de archivos
function canUseFileSystem() {
  if (!useFileSystem) return false;
  
  try {
    const dataDir = path.dirname(VIEWS_FILE);
    
    // Intentar crear directorio si no existe
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Intentar escribir un archivo de prueba
    const testFile = path.join(dataDir, '.test-write');
    fs.writeFileSync(testFile, 'test');
    fs.unlinkSync(testFile);
    
    return true;
  } catch (error) {
    console.warn('File system not available, switching to memory cache:', error.message);
    useFileSystem = false;
    return false;
  }
}

// Función para generar mapeo dinámico de slugs leyendo frontmatters
async function generateSlugMapping() {
  try {
    const fs = await import('fs');
    const matter = await import('gray-matter');
    const path = await import('path');
    
    const postsDirectory = path.default.join(process.cwd(), 'src', 'posts');
    const slugMapping = {}; // español -> inglés
    
    // Leer archivos en español
    const esDir = path.default.join(postsDirectory, 'es');
    if (fs.default.existsSync(esDir)) {
      const esFiles = fs.default.readdirSync(esDir).filter(file => file.endsWith('.md'));
      
      for (const file of esFiles) {
        try {
          const filePath = path.default.join(esDir, file);
          const fileContents = fs.default.readFileSync(filePath, 'utf8');
          const { data: frontmatter } = matter.default(fileContents);
          
          const esSlug = file.replace(/\.md$/, '');
          const enSlug = frontmatter.englishSlug;
          
          if (enSlug) {
            slugMapping[esSlug] = enSlug;
          }
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
        }
      }
    }
    
    // También leer archivos en inglés para mapeo inverso si es necesario
    const enDir = path.default.join(postsDirectory, 'en');
    if (fs.default.existsSync(enDir)) {
      const enFiles = fs.default.readdirSync(enDir).filter(file => file.endsWith('.md'));
      
      for (const file of enFiles) {
        try {
          const filePath = path.default.join(enDir, file);
          const fileContents = fs.default.readFileSync(filePath, 'utf8');
          const { data: frontmatter } = matter.default(fileContents);
          
          const enSlug = file.replace(/\.md$/, '');
          const esSlug = frontmatter.spanishSlug;
          
          // Si encontramos un slug español, asegurémonos de que el mapeo sea correcto
          if (esSlug && !slugMapping[esSlug]) {
            slugMapping[esSlug] = enSlug;
          }
        } catch (error) {
          console.error(`Error reading ${file}:`, error);
        }
      }
    }
    
    return slugMapping;
  } catch (error) {
    console.error('Error generating slug mapping:', error);
    // Fallback a mapeo estático si hay error
    return {
      'consejos-utiles-para-configurar-tu-visual-studio-code': 'useful-tips-to-configure-your-visual-studio-code',
      'te-cuento-sobre-mi-juego-favorito-no-mans-sky': 'let-me-tell-you-about-my-favorite-game-no-mans-sky',
      'los-roadmaps-estan-mal-aprende-bien-a-programar-parte-1': 'roadmaps-are-wrong-learn-to-code-properly-part-1',
      'los-roadmaps-estan-mal-aprende-bien-a-programar-parte-2': 'roadmaps-are-wrong-learn-to-code-properly-part-2'
    };
  }
}

// Función para obtener slug canónico (unificar tracking entre idiomas)
async function getCanonicalSlug(slug) {
  const slugMapping = await generateSlugMapping();
  
  // Si el slug está en el mapeo (es español), devolver el inglés
  if (slugMapping[slug]) {
    return slugMapping[slug];
  }
  
  // Si no está en el mapeo, probablemente ya es el slug inglés
  return slug;
}

// Función para leer el archivo de vistas con validación
function readViewsData() {
  const defaultData = {
    posts: {},
    metadata: {
      lastUpdated: new Date().toISOString(),
      totalViews: 0,
      version: "1.0.0"
    }
  };
  
  // Si no podemos usar el sistema de archivos, usar cache en memoria
  if (!canUseFileSystem()) {
    if (!memoryCache) {
      memoryCache = { ...defaultData };
    }
    return { ...memoryCache };
  }
  
  try {
    // Verificar que el directorio 'data' existe
    const dataDir = path.dirname(VIEWS_FILE);
    if (!fs.existsSync(dataDir)) {
      try {
        fs.mkdirSync(dataDir, { recursive: true });
      } catch (mkdirError) {
        console.error('Could not create data directory:', mkdirError.message);
        // Fallback to memory cache
        useFileSystem = false;
        memoryCache = { ...defaultData };
        return { ...memoryCache };
      }
    }
    
    if (!fs.existsSync(VIEWS_FILE)) {
      // Crear archivo inicial si no existe
      const sanitized = sanitizeViewsData(defaultData);
      try {
        fs.writeFileSync(VIEWS_FILE, JSON.stringify(sanitized, null, 2));
      } catch (writeError) {
        console.error('Could not create initial views file:', writeError.message);
        // Fallback to memory cache
        useFileSystem = false;
        memoryCache = { ...defaultData };
        return { ...memoryCache };
      }
      return sanitized;
    }
    
    // Verificar tamaño del archivo
    const stats = fs.statSync(VIEWS_FILE);
    if (stats.size > MAX_FILE_SIZE) {
      console.error('Views file too large:', stats.size);
      throw new Error('Views file exceeds maximum size');
    }
    
    const data = fs.readFileSync(VIEWS_FILE, 'utf8');
    const parsed = JSON.parse(data);
    
    // Verificar integridad
    const integrity = verifyFileIntegrity(parsed);
    if (!integrity.valid) {
      console.error('File integrity check failed:', integrity.error);
      // En lugar de fallar, sanitizar y continuar
      return sanitizeViewsData(parsed);
    }
    
    return sanitizeViewsData(parsed);
  } catch (error) {
    console.error('Error reading views data:', error.message);
    
    // Fallback to memory cache
    useFileSystem = false;
    if (!memoryCache) {
      memoryCache = { ...defaultData };
    }
    return { ...memoryCache };
  }
}

// Función para escribir el archivo de vistas con lock y validación
async function writeViewsData(data) {
  // Si no podemos usar el sistema de archivos, guardar en memoria
  if (!canUseFileSystem()) {
    memoryCache = { ...sanitizeViewsData(data) };
    return true; // Siempre exitoso en memoria
  }
  
  await viewsFileLock.acquire();
  
  try {
    // Sanitizar datos antes de escribir
    const sanitized = sanitizeViewsData(data);
    
    // Verificar integridad
    const integrity = verifyFileIntegrity(sanitized);
    if (!integrity.valid) {
      console.error('Cannot write invalid data:', integrity.error);
      return false;
    }
    
    // Verificar que el directorio 'data' existe
    const dataDir = path.dirname(VIEWS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Crear backup del archivo actual si existe
    if (fs.existsSync(VIEWS_FILE)) {
      try {
        const backupFile = VIEWS_FILE + '.backup';
        fs.copyFileSync(VIEWS_FILE, backupFile);
      } catch (backupError) {
        console.warn('Could not create backup:', backupError.message);
        // Continuar sin backup en caso de error
      }
    }
    
    // Escribir archivo temporal primero
    const tempFile = VIEWS_FILE + '.tmp';
    try {
      fs.writeFileSync(tempFile, JSON.stringify(sanitized, null, 2));
    } catch (writeError) {
      console.error('Error writing temp file:', writeError.message);
      
      // Fallback to memory cache
      useFileSystem = false;
      memoryCache = { ...sanitized };
      return true;
    }
    
    // Renombrar archivo temporal al definitivo (operación atómica)
    try {
      fs.renameSync(tempFile, VIEWS_FILE);
    } catch (renameError) {
      console.error('Error renaming temp file:', renameError.message);
      // Limpiar archivo temporal si falla el rename
      if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
      }
      
      // Fallback to memory cache
      useFileSystem = false;
      memoryCache = { ...sanitized };
      return true;
    }
    
    return true;
  } catch (error) {
    console.error('Error writing views data:', error.message);
    
    // Fallback to memory cache
    useFileSystem = false;
    const sanitized = sanitizeViewsData(data);
    memoryCache = { ...sanitized };
    return true;
  } finally {
    viewsFileLock.release();
  }
}

// Función para verificar rate limiting
function shouldRateLimit(postData, clientIP) {
  if (!postData.lastViewed) return false;
  
  const lastViewed = new Date(postData.lastViewed);
  const now = new Date();
  const hoursSinceLastView = (now - lastViewed) / (1000 * 60 * 60);
  
  return hoursSinceLastView < RATE_LIMIT_HOURS;
}

// Función para obtener IP del cliente
function getClientIP(request) {
  return request.headers.get('x-forwarded-for') || 
         request.headers.get('x-real-ip') || 
         request.ip || 
         'unknown';
}

// Función para agregar vista diaria y semanal
function addTimeBasedViews(postData, date) {
  const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD
  const weekStr = getWeekString(date);
  
  // Vistas diarias
  if (!postData.dailyViews) postData.dailyViews = {};
  postData.dailyViews[dateStr] = (postData.dailyViews[dateStr] || 0) + 1;
  
  // Vistas semanales
  if (!postData.weeklyViews) postData.weeklyViews = {};
  postData.weeklyViews[weekStr] = (postData.weeklyViews[weekStr] || 0) + 1;
}

// Función para obtener string de semana (formato YYYY-WW)
function getWeekString(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);
  return `${date.getFullYear()}-W${weekNumber.toString().padStart(2, '0')}`;
}

export async function POST(request, { params }) {
  try {
    const { slug } = params;
    const clientIP = getClientIP(request);
    
    // Validar slug
    const slugValidation = validateSlug(slug);
    if (!slugValidation.valid) {
      ViewsMonitor.warn('Invalid slug attempted', { 
        slug, 
        error: slugValidation.error,
        ip: clientIP
      });
      return NextResponse.json({ error: slugValidation.error }, { status: 400 });
    }
    
    // Convertir a slug canónico para unificar tracking
    const canonicalSlug = await getCanonicalSlug(slug);
    
    // Validar slug canónico también
    const canonicalValidation = validateSlug(canonicalSlug);
    if (!canonicalValidation.valid) {
      ViewsMonitor.warn('Invalid canonical slug', { 
        originalSlug: slug,
        canonicalSlug,
        error: canonicalValidation.error,
        ip: clientIP
      });
      return NextResponse.json({ error: 'Invalid canonical slug' }, { status: 400 });
    }
    
    // Leer datos actuales
    const viewsData = readViewsData();
    
    // Inicializar post si no existe (usando slug canónico)
    if (!viewsData.posts[canonicalSlug]) {
      viewsData.posts[canonicalSlug] = {
        views: 0,
        lastViewed: null,
        dailyViews: {},
        weeklyViews: {},
        createdAt: new Date().toISOString()
      };
    }
    
    const postData = viewsData.posts[canonicalSlug];
    
    // Verificar rate limiting
    if (shouldRateLimit(postData, clientIP)) {
      // Rate limiting es comportamiento normal, no necesita logging frecuente
      return NextResponse.json({ 
        success: true, 
        rateLimited: true,
        views: postData.views,
        originalSlug: slug,
        canonicalSlug: canonicalSlug,
        message: 'View already counted recently',
        storageType: useFileSystem ? 'filesystem' : 'memory'
      });
    }
    
    // Incrementar contadores
    const now = new Date();
    postData.views += 1;
    postData.lastViewed = now.toISOString();
    
    // Agregar vistas por tiempo
    addTimeBasedViews(postData, now);
    
    // Actualizar metadata global
    viewsData.metadata.lastUpdated = now.toISOString();
    viewsData.metadata.totalViews = Object.values(viewsData.posts)
      .reduce((total, post) => total + post.views, 0);
    
    // Guardar datos con validación y lock
    const saved = await writeViewsData(viewsData);
    
    if (!saved) {
      ViewsMonitor.error('Failed to save view data to any storage', {
        slug: canonicalSlug,
        originalSlug: slug,
        ip: clientIP,
        views: postData.views,
        usingFileSystem: useFileSystem
      });
      return NextResponse.json({ error: 'Failed to save view data to any storage' }, { status: 500 });
    }
    
    return NextResponse.json({
      success: true,
      views: postData.views,
      totalViews: viewsData.metadata.totalViews,
      originalSlug: slug,
      canonicalSlug: canonicalSlug,
      rateLimited: false,
      storageType: useFileSystem ? 'filesystem' : 'memory'
    });
    
  } catch (error) {
    ViewsMonitor.error('Error in POST /api/views/[slug]', {
      slug: params.slug,
      error: error.message,
      stack: error.stack
    });
    console.error('Error in POST /api/views/[slug]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    // Validar slug
    const slugValidation = validateSlug(slug);
    if (!slugValidation.valid) {
      ViewsMonitor.warn('Invalid slug in GET request', { 
        slug,
        error: slugValidation.error 
      });
      return NextResponse.json({ error: slugValidation.error }, { status: 400 });
    }
    
    // Convertir a slug canónico para obtener datos unificados
    const canonicalSlug = await getCanonicalSlug(slug);
    
    const viewsData = readViewsData();
    const postData = viewsData.posts[canonicalSlug];
    
    if (!postData) {
      return NextResponse.json({
        views: 0,
        dailyViews: {},
        weeklyViews: {},
        lastViewed: null,
        originalSlug: slug,
        canonicalSlug: canonicalSlug,
        storageType: useFileSystem ? 'filesystem' : 'memory'
      });
    }
    
    return NextResponse.json({
      views: postData.views,
      dailyViews: postData.dailyViews || {},
      weeklyViews: postData.weeklyViews || {},
      lastViewed: postData.lastViewed,
      originalSlug: slug,
      canonicalSlug: canonicalSlug,
      storageType: useFileSystem ? 'filesystem' : 'memory'
    });
    
  } catch (error) {
    ViewsMonitor.error('Error in GET /api/views/[slug]', {
      slug: params.slug,
      error: error.message
    });
    console.error('Error in GET /api/views/[slug]:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}