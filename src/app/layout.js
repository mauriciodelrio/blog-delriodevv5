import "@/styles/globals.css";

export async function generateMetadata() {
  // Metadata base para cuando no hay locale específico
  return {
    title: 'Mauricio Del Río | Web Developer',
    description: 'Personal blog about web development, programming, React, Next.js, and technology.',
    keywords: 'web development, programming, React, Next.js, JavaScript, TypeScript, blog',
    authors: [{ name: 'Mauricio Del Río' }],
    creator: 'Mauricio Del Río',
    metadataBase: new URL('https://delrio.dev'), // Cambia por tu dominio
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'es': '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: '/',
      title: 'Mauricio Del Río | Web Developer',
      description: 'Personal blog about web development, programming, React, Next.js, and technology.',
      siteName: 'DelRio Dev Blog',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mauricio Del Río | Web Developer',
      description: 'Personal blog about web development, programming, React, Next.js, and technology.',
      creator: '@mauriciodelrio', // Cambia por tu handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function RootLayout({ children }) {
  // Solo renderizar children, el HTML se maneja en [locale]/layout.js
  return children;
}
