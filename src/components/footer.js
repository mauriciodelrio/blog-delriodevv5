import React from 'react';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';

export default function Footer({ locale = 'en' }) {
  const date = new Date();
  const dict = getDictionary(locale);

  return (
    <>
      <footer className="w-full border-t bg-gray-50 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" style={{ maxWidth: '1440px' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-600">©{date.getFullYear()} - Mauricio Del Río</p>
              <p className="text-sm text-gray-500">DelRio Dev Blog</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href={`/${locale}/cookie-policy`} className="text-gray-600 hover:text-gray-900 transition-colors">
                {dict.navigation.cookies}
              </Link>
              <Link href={`/${locale}/privacy-policy`} className="text-gray-600 hover:text-gray-900 transition-colors">
                {dict.navigation.privacy}
              </Link>
              <a href="mailto:contacto@delrio.dev" className="text-gray-600 hover:text-gray-900 transition-colors">
                {locale === 'es' ? 'Contacto' : 'Contact'}
              </a>
            </div>
          </div>

          {/* GDPR Notice */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              {locale === 'es'
                ? 'Este sitio utiliza cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.'
                : 'This site uses cookies to enhance your experience. By continuing to browse, you accept our use of cookies.'}{' '}
              <Link href={`/${locale}/cookie-policy`} className="underline hover:text-gray-700">
                {locale === 'es' ? 'Más información' : 'Learn more'}
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
