import '@/styles/globals.css';
import { headers } from 'next/headers';

export async function generateMetadata() {
  // Metadata base para cuando no hay locale específico
  return {
    title: 'Mauricio Del Río | Senior Web Developer & Technical Lead',
    description:
      'Senior Web Developer with 9+ years of experience in React, Next.js, Node.js, and modern web technologies. Technical Lead specializing in frontend architecture and team management.',
    keywords: [
      'web development',
      'react developer',
      'next.js expert',
      'javascript specialist',
      'typescript developer',
      'frontend architect',
      'technical lead',
      'node.js',
      'full stack developer',
      'agile methodology',
      'software engineering',
      'ui/ux development',
      'responsive design',
      'web performance',
      'code review',
      'team leadership',
      'remote work',
      'freelance developer',
      'chile developer',
      'latin america tech',
    ],
    authors: [{ name: 'Mauricio Del Río', url: 'https://delrio.dev' }],
    creator: 'Mauricio Del Río',
    publisher: 'Mauricio Del Río',
    category: 'Technology',
    classification: 'Business',
    metadataBase: new URL('https://delrio.dev'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        es: '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: '/',
      title: 'Mauricio Del Río | Senior Web Developer & Technical Lead',
      description:
        'Senior Web Developer with 9+ years of experience in React, Next.js, Node.js, and modern web technologies. Technical Lead specializing in frontend architecture and team management.',
      siteName: 'DelRio Dev',
      images: [
        {
          url: '/api/og?locale=en&type=home',
          width: 1200,
          height: 630,
          alt: 'Mauricio Del Río - Senior Web Developer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mauricio Del Río | Senior Web Developer & Technical Lead',
      description:
        'Senior Web Developer with 9+ years of experience in React, Next.js, Node.js, and modern web technologies.',
      creator: '@mauriciodelrio',
      images: ['/api/og?locale=en&type=home'],
    },
    robots: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,
      noimageindex: false,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // google: 'tu-codigo-si-usas-verificacion-por-etiqueta-html',
      // La verificación actual es por DNS, no requiere código aquí
    },
    other: {
      'theme-color': '#ffffff',
      'color-scheme': 'light',
      'format-detection': 'telephone=no',
    },
  };
}

export default async function RootLayout({ children }) {
  // Extraer el locale del pathname para el atributo lang
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const locale = pathname.split('/')[1] || 'en';

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
