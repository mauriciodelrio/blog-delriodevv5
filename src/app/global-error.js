'use client'; // Error components must be Client Components

import { useEffect } from 'react';

// Global Error Page - Critical errors that crash the entire app
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gray-50">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">💥</div>
            <h1 className="text-2xl font-bold mb-4 text-red-600">Critical Error</h1>
            <p className="text-gray-600 mb-8">A critical error occurred. Please refresh the page or try again later.</p>

            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mr-4"
              >
                Try Again
              </button>

              <button
                onClick={() => (window.location.href = '/')}
                className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Go Home
              </button>
            </div>

            {/* Development error details */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left bg-white p-4 rounded-lg border">
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
      </body>
    </html>
  );
}
