'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/lib/i18n';

// Client Error Page - JavaScript errors, component errors, etc.
export default function Error({ error, reset }) {
  const params = useParams();
  const locale = params?.locale || 'en';
  const dict = getDictionary(locale);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Client Error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold mb-4 text-red-600">{dict.errors.clientError}</h1>
        <p className="text-gray-600 mb-8">{dict.errors.clientErrorDescription}</p>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mr-4"
          >
            {dict.errors.tryAgain}
          </button>

          <Link
            href={`/${locale}`}
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            {dict.errors.goHome}
          </Link>
        </div>

        {/* Development error details */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left bg-gray-100 p-4 rounded-lg">
            <summary className="cursor-pointer font-semibold text-gray-800 mb-2">
              Error Details (Development Only)
            </summary>
            <pre className="text-sm text-red-600 whitespace-pre-wrap overflow-auto">
              {error.message}
              {error.stack && (
                <>
                  {'\n\nStack Trace:\n'}
                  {error.stack}
                </>
              )}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
