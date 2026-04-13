import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';

// Not Found Page - 404 errors
export default function NotFound({ params }) {
  // Intentar obtener el locale de los params, fallback a 'en'
  const locale = params?.locale || 'en';
  const dict = getDictionary(locale);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{dict.errors.notFound}</h2>
        <p className="text-gray-600 mb-8">{dict.errors.notFoundDescription}</p>

        <div className="space-y-4">
          <Link
            href={`/${locale}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            {dict.errors.goHome}
          </Link>

          <div className="mt-4">
            <Link href={`/${locale}/posts`} className="text-blue-600 hover:text-blue-800 underline">
              {dict.navigation.posts}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Metadata para la página 404
export function generateMetadata({ params }) {
  const locale = params?.locale || 'en';
  const dict = getDictionary(locale);

  return {
    title: `${dict.errors.notFound} | DelRio Dev`,
    description: dict.errors.notFoundDescription,
    robots: 'noindex, nofollow',
  };
}
