'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cookieUtils, COOKIE_NAMES } from '@/lib/cookies';
import { buildTranslatedUrl } from '@/utils/translationUtils';

export function useLocaleManager(currentLocale) {
  const router = useRouter();

  // Función para cambiar locale
  const changeLocale = async (newLocale, currentPath = '/') => {
    // Solo guardar en cookie si hay consentimiento para preferencias
    if (cookieUtils.hasConsent('preferences')) {
      cookieUtils.set(COOKIE_NAMES.LOCALE, newLocale, 365); // 1 año
    }

    try {
      // Construir nueva URL con traducciones de slug si es necesario
      const newPath = await buildTranslatedUrl(currentPath, newLocale);

      // Navegar a la nueva ruta
      router.push(newPath);
    } catch (error) {
      console.error('Error building translated URL:', error);

      // Fallback: construir URL básica sin traducción de slug
      const segments = currentPath.split('/').filter(Boolean);

      // Remover el locale actual del path si existe
      if (segments.length > 0 && ['en', 'es'].includes(segments[0])) {
        segments.shift();
      }

      // Construir nueva ruta
      const fallbackPath = `/${newLocale}/${segments.join('/')}`;
      router.push(fallbackPath);
    }
  };

  // Verificar y aplicar locale guardado al cargar la página
  useEffect(() => {
    // Solo aplicar si hay consentimiento y no estamos en el locale correcto
    if (cookieUtils.hasConsent('preferences')) {
      const savedLocale = cookieUtils.get(COOKIE_NAMES.LOCALE);

      if (savedLocale && savedLocale !== currentLocale && ['en', 'es'].includes(savedLocale)) {
        // Cambiar al locale guardado
        changeLocale(savedLocale, window.location.pathname);
      }
    }
  }, [currentLocale]);

  return {
    changeLocale,
    currentLocale,
    hasLocaleConsent: () => cookieUtils.hasConsent('preferences'),
  };
}
