import { ViewsMonitor } from '@/lib/monitoring';

export async function GET() {
  try {
    const health = await ViewsMonitor.checkHealth();

    const statusCode = health.status === 'healthy' ? 200 : health.status === 'warning' ? 200 : 500;

    return new Response(JSON.stringify(health), {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
