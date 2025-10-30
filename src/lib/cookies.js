// Tipos de cookies
export const COOKIE_TYPES = {
  NECESSARY: 'necessary',
  PREFERENCES: 'preferences',
  ANALYTICS: 'analytics',
  MARKETING: 'marketing'
};

// Configuración de cookies
export const COOKIE_CONFIG = {
  [COOKIE_TYPES.NECESSARY]: {
    required: true,
    cookies: ['locale-preference', 'cookie-consent']
  },
  [COOKIE_TYPES.PREFERENCES]: {
    required: false,
    cookies: ['theme-preference', 'language-preference']
  },
  [COOKIE_TYPES.ANALYTICS]: {
    required: false,
    cookies: ['ga', 'gtag']
  },
  [COOKIE_TYPES.MARKETING]: {
    required: false,
    cookies: ['fb', 'twitter']
  }
};

// Nombres de cookies específicas
export const COOKIE_NAMES = {
  CONSENT: 'cookie-consent',
  LOCALE: 'locale-preference',
  CONSENT_DATE: 'consent-date'
};

// Funciones de utilidad para cookies
export const cookieUtils = {
  // Establecer cookie con configuración segura
  set: (name, value, days = 365) => {
    if (typeof document === 'undefined') return;
    
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    
    const cookieString = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax; Secure=${window.location.protocol === 'https:'}`;
    document.cookie = cookieString;
  },

  // Obtener valor de cookie
  get: (name) => {
    if (typeof document === 'undefined') return null;
    
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  },

  // Eliminar cookie
  remove: (name) => {
    if (typeof document === 'undefined') return;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  },

  // Verificar si hay consentimiento para un tipo de cookie
  hasConsent: (type) => {
    const consent = cookieUtils.getConsent();
    return consent[type] === true;
  },

  // Obtener consentimiento actual
  getConsent: () => {
    const consentStr = cookieUtils.get(COOKIE_NAMES.CONSENT);
    if (!consentStr) return {};
    
    try {
      return JSON.parse(consentStr);
    } catch {
      return {};
    }
  },

  // Guardar consentimiento
  setConsent: (consent) => {
    cookieUtils.set(COOKIE_NAMES.CONSENT, JSON.stringify(consent));
    cookieUtils.set(COOKIE_NAMES.CONSENT_DATE, new Date().toISOString());
  },

  // Verificar si se ha dado consentimiento
  hasConsentBeenGiven: () => {
    return cookieUtils.get(COOKIE_NAMES.CONSENT) !== null;
  },

  // Limpiar todas las cookies no necesarias
  clearNonEssentialCookies: () => {
    const consent = cookieUtils.getConsent();
    
    Object.entries(COOKIE_CONFIG).forEach(([type, config]) => {
      if (!config.required && !consent[type]) {
        config.cookies.forEach(cookieName => {
          cookieUtils.remove(cookieName);
        });
      }
    });
  }
};