import { redirect } from 'next/navigation';
import { i18n } from '@/lib/i18n';

export default function RootPage() {
  // Esta página no debería renderizarse nunca en producción
  // debido al middleware, pero la creamos como fallback
  redirect(`/${i18n.defaultLocale}`);
}

// Metadatos para esta página (fallback)
export const metadata = {
  title: 'Redirecting...',
  robots: {
    index: false,
    follow: false,
  },
};
