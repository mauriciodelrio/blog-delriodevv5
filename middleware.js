import { NextResponse } from 'next/server';
import { i18n } from './src/lib/i18n';

function getLocale(request) {
  // Verificar si ya hay un locale en la URL
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Si no hay locale en la URL, redirigir con el locale apropiado
  if (pathnameIsMissingLocale) {
    let detectedLocale = i18n.defaultLocale;

    // 1. Primero verificar cookie de preferencia de locale (solo si hay consentimiento)
    const cookieConsent = request.cookies.get('cookie-consent');
    if (cookieConsent) {
      try {
        const consent = JSON.parse(cookieConsent.value);
        if (consent.preferences) {
          const localePreference = request.cookies.get('locale-preference');
          if (localePreference && i18n.locales.includes(localePreference.value)) {
            detectedLocale = localePreference.value;
            return detectedLocale;
          }
        }
      } catch (e) {
        // Ignorar errores de parsing
      }
    }

    // 2. Si no hay cookie válida, detectar del header Accept-Language
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());
      
      for (const lang of languages) {
        if (i18n.locales.includes(lang)) {
          detectedLocale = lang;
          break;
        }
        // Verificar códigos de idioma de 2 letras
        const shortLang = lang.split('-')[0];
        if (i18n.locales.includes(shortLang)) {
          detectedLocale = shortLang;
          break;
        }
      }
    }

    return detectedLocale;
  }

  return null;
}

export function middleware(request) {
  const locale = getLocale(request);
  
  if (locale) {
    // Redirigir añadiendo el locale al pathname
    return NextResponse.redirect(
      new URL(`/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};