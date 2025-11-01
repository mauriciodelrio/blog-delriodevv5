import { generateOGImageUrl } from '@/lib/ogImageUtils';
import { notFound } from 'next/navigation';

export default function OGPreviewPage() {
  // Solo permitir acceso en desarrollo
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  const images = [
    {
      title: 'Homepage - English',
      url: generateOGImageUrl({ locale: 'en', type: 'home' }),
    },
    {
      title: 'Homepage - Spanish',
      url: generateOGImageUrl({ locale: 'es', type: 'home' }),
    },
    {
      title: 'Blog Post - English',
      url: generateOGImageUrl({ 
        locale: 'en', 
        type: 'post', 
        title: 'How to Build Modern Web Applications',
        date: '2025-11-01'
      }),
    },
    {
      title: 'Blog Post - Spanish',
      url: generateOGImageUrl({ 
        locale: 'es', 
        type: 'post', 
        title: 'Los roadmaps están mal: aprende bien a programar',
        date: '2025-11-01'
      }),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">OpenGraph Images Preview</h1>
      
      <div className="grid gap-8">
        {images.map((image, index) => (
          <div key={index} className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{image.title}</h2>
            <div className="mb-4">
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full max-w-2xl border rounded-lg shadow-lg"
                style={{ aspectRatio: '1200/630' }}
              />
            </div>
            <div className="text-sm text-gray-600 break-all">
              <strong>URL:</strong> {image.url}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">📸 Para añadir tu foto:</h3>
        <div className="space-y-2 text-sm">
          <p><strong>1. Dimensiones recomendadas:</strong> 400x400px (cuadrada)</p>
          <p><strong>2. Formato:</strong> JPG o PNG</p>
          <p><strong>3. Ubicación:</strong> <code>/public/profile-photo.jpg</code></p>
          <p><strong>4. Características:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Fondo neutro o transparente</li>
            <li>Buena iluminación</li>
            <li>Expresión profesional y amigable</li>
            <li>Encuadre de hombros hacia arriba</li>
            <li>Alta resolución para que se vea nítida al redimensionar</li>
          </ul>
          <p className="mt-4"><strong>5. Después de subir la foto:</strong> Edita el generador para usar tu imagen real en lugar del emoji</p>
        </div>
      </div>
    </div>
  );
}