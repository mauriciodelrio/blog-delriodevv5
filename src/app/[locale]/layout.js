import { notFound } from 'next/navigation';
import { getDictionary, i18n } from '@/lib/i18n';
import Layout from '@/components/layout';
import CookieBanner from '@/components/CookieBanner';
import StructuredData from '@/components/StructuredData';

// Generar metadata dinámica basada en el locale
export async function generateMetadata({ params }) {
  const { locale } = params;
  
  if (!i18n.locales.includes(locale)) {
    return {};
  }
  
  const dict = getDictionary(locale);
  
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
    authors: [{ name: 'Mauricio Del Río', url: 'https://delrio.dev' }],
    creator: 'Mauricio Del Río',
    publisher: 'Mauricio Del Río',
    category: 'Technology',
    openGraph: {
      type: 'website',
      title: dict.metadata.title,
      description: dict.metadata.description,
      locale: locale === 'en' ? 'en_US' : 'es_ES',
      url: `/${locale}`,
      siteName: 'DelRio Dev',
      images: [
        {
          url: `/api/og?locale=${locale}&type=home`,
          width: 1200,
          height: 630,
          alt: dict.metadata.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
      creator: '@mauriciodelrio',
      images: [`/api/og?locale=${locale}&type=home`],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'es': '/es',
      },
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
    other: {
      'theme-color': '#ffffff',
      'color-scheme': 'light',
      'format-detection': 'telephone=no',
    },
  };
}

// Generar rutas estáticas para todos los locales
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  
  // Verificar que el locale sea válido
  if (!i18n.locales.includes(locale)) {
    notFound();
  }
  
  // Renderizar con Layout que incluye Header y Footer
  return (
    <>
      <StructuredData type="website" />
      <StructuredData type="person" />
      <Layout locale={locale}>
        {children}
      </Layout>
      <CookieBanner locale={locale} />
    </>
  );
}