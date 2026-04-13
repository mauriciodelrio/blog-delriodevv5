import { ViewsMonitor } from '@/lib/monitoring';

export async function POST(request) {
  try {
    // Verificar token de autorización (opcional pero recomendado)
    const authHeader = request.headers.get('authorization');
    const expectedToken = process.env.MAINTENANCE_TOKEN;

    if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    ViewsMonitor.info('Maintenance job started via API');

    // Ejecutar tareas de mantenimiento
    const results = {
      backupCleanup: await ViewsMonitor.cleanupOldBackups(),
      healthCheck: await ViewsMonitor.checkHealth(),
    };

    ViewsMonitor.info('Maintenance job completed', results);

    return new Response(
      JSON.stringify({
        success: true,
        timestamp: new Date().toISOString(),
        results,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    ViewsMonitor.error('Maintenance job failed', {
      error: error.message,
      stack: error.stack,
    });

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
