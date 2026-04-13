'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cookieUtils, COOKIE_TYPES, COOKIE_CONFIG } from '@/lib/cookies';
import { getDictionary } from '@/lib/i18n';

export default function CookieBanner({ locale = 'en' }) {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({});

  const dict = getDictionary(locale);

  useEffect(() => {
    // Verificar si ya se ha dado consentimiento
    if (!cookieUtils.hasConsentBeenGiven()) {
      setShowBanner(true);
      // Inicializar preferencias con solo cookies necesarias habilitadas
      const initialPrefs = {};
      Object.keys(COOKIE_TYPES).forEach((type) => {
        initialPrefs[COOKIE_TYPES[type]] = COOKIE_CONFIG[COOKIE_TYPES[type]].required;
      });
      setPreferences(initialPrefs);
    } else {
      setPreferences(cookieUtils.getConsent());
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {};
    Object.keys(COOKIE_TYPES).forEach((type) => {
      allConsent[COOKIE_TYPES[type]] = true;
    });

    cookieUtils.setConsent(allConsent);
    setShowBanner(false);

    // Recargar para aplicar cookies
    window.location.reload();
  };

  const handleRejectAll = () => {
    const necessaryOnly = {};
    Object.keys(COOKIE_TYPES).forEach((type) => {
      necessaryOnly[COOKIE_TYPES[type]] = COOKIE_CONFIG[COOKIE_TYPES[type]].required;
    });

    cookieUtils.setConsent(necessaryOnly);
    cookieUtils.clearNonEssentialCookies();
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    cookieUtils.setConsent(preferences);
    cookieUtils.clearNonEssentialCookies();
    setShowBanner(false);
    setShowSettings(false);

    // Recargar si se habilitaron nuevas cookies
    window.location.reload();
  };

  const handleTogglePreference = (type) => {
    if (COOKIE_CONFIG[type].required) return; // No permitir cambiar cookies necesarias

    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-lg z-50 p-6">
        <div className="max-w-6xl mx-auto">
          {!showSettings ? (
            // Banner principal
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{dict.cookies.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{dict.cookies.description}</p>
                <div className="text-xs text-gray-500">
                  {dict.cookies.disclaimer}{' '}
                  <Link href={`/${locale}/cookie-policy`} className="underline hover:text-gray-700">
                    {locale === 'es' ? 'Política de cookies' : 'Cookie policy'}
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap flex-row gap-3 min-w-fit">
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  {dict.cookies.customize}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  {dict.cookies.necessaryOnly}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  {dict.cookies.acceptAll}
                </button>
              </div>
            </div>
          ) : (
            // Panel de configuración detallada
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{dict.cookies.detailedTitle}</h3>
                <button onClick={() => setShowSettings(false)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {Object.entries(COOKIE_CONFIG).map(([type, config]) => (
                  <div key={type} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium">
                          {dict.cookies.categories[type].name}
                          {config.required && (
                            <span className="text-xs text-gray-500 ml-2">({dict.cookies.required})</span>
                          )}
                        </h4>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={preferences[type] || false}
                            onChange={() => handleTogglePreference(type)}
                            disabled={config.required}
                          />
                          <div
                            className={`w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 ${config.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                          ></div>
                        </label>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{dict.cookies.categories[type].description}</p>
                    <div className="text-xs text-gray-500 mt-2">
                      {dict.cookies.cookiesLabel} {config.cookies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {dict.cookies.cancel}
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {dict.cookies.savePreferences}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
