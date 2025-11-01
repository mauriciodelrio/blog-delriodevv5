import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en';
    const type = searchParams.get('type') || 'home';
    const title = searchParams.get('title') || '';

    // Títulos simples sin dependencias externas
    const displayTitle = type === 'home' 
      ? (locale === 'es' ? 'Mauricio Del Río' : 'Mauricio Del Río')
      : title || 'Blog Post';
    
    const displaySubtitle = type === 'home'
      ? (locale === 'es' ? 'Desarrollador Senior Full Stack' : 'Senior Full Stack Developer')
      : '';

    const displayExperience = locale === 'es' ? '9+ Años de Experiencia' : '9+ Years Experience';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#667eea',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: 'system-ui, sans-serif',
            padding: '80px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: '65%' }}>
            <div style={{ fontSize: '56px', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
              {displayTitle}
            </div>
            <div style={{ fontSize: '24px', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '30px' }}>
              {displaySubtitle}
            </div>
            {type === 'home' && (
              <div style={{ fontSize: '22px', color: '#fbbf24', fontWeight: '600', marginBottom: '20px', display: 'flex' }}>
                🚀 {displayExperience}
              </div>
            )}
            <div style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.8)' }}>
              delrio.dev
            </div>
          </div>
          {type === 'home' && (
            <div style={{ display: 'flex', width: '30%', justifyContent: 'center' }}>
              <img
                src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://delrio.dev'}/profile-photo.jpg`}
                width="200"
                height="200"
                style={{
                  borderRadius: '50%',
                  border: '4px solid rgba(255, 255, 255, 0.3)',
                  objectFit: 'cover',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
                alt="Mauricio Del Río"
              />
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error('OG Error:', error);
    
    // Fallback ultra simple
    return new Response('Error generating image', { 
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}