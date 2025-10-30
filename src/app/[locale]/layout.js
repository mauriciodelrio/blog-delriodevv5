import { notFound } from 'next/navigation';
import { getDictionary, i18n } from '@/lib/i18n';
import Layout from '@/components/layout';
import CookieBanner from '@/components/CookieBanner';

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
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      locale: locale === 'en' ? 'en_US' : 'es_ES',
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'es': '/es',
      },
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
    <html lang={locale}>
      <body>
        <Layout locale={locale}>
          {children}
        </Layout>
        <CookieBanner locale={locale} />
      </body>
    </html>
  );
}