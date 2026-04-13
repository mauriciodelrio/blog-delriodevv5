import { getDictionary } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: `${dict.legal.cookiePolicy.title} | DelRio Dev`,
    description: `${dict.legal.cookiePolicy.title} - DelRio Dev Blog`,
    robots: 'index, follow',
  };
}

export default async function CookiePolicyPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const policy = dict.legal.cookiePolicy;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ maxWidth: '1440px' }}>
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-2">{policy.title}</h1>
        <p className="text-gray-600 mb-8">
          {policy.lastUpdated}: {locale === 'es' ? '28 de octubre de 2025' : 'October 28, 2025'}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{policy.sections.whatAreCookies.title}</h2>
          <p className="text-gray-700 leading-relaxed">{policy.sections.whatAreCookies.content}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{policy.sections.howWeUseCookies.title}</h2>
          <p className="text-gray-700 leading-relaxed">{policy.sections.howWeUseCookies.content}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{policy.sections.typesOfCookies.title}</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-medium mb-2">{policy.sections.typesOfCookies.cookieTypes.necessary}</h3>
              <p className="text-gray-700">{policy.sections.typesOfCookies.necessary}</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium mb-2">{policy.sections.typesOfCookies.cookieTypes.preferences}</h3>
              <p className="text-gray-700">{policy.sections.typesOfCookies.preferences}</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="text-xl font-medium mb-2">{policy.sections.typesOfCookies.cookieTypes.analytics}</h3>
              <p className="text-gray-700">{policy.sections.typesOfCookies.analytics}</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-medium mb-2">{policy.sections.typesOfCookies.cookieTypes.marketing}</h3>
              <p className="text-gray-700">{policy.sections.typesOfCookies.marketing}</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{policy.sections.manageCookies.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{policy.sections.manageCookies.content}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              <strong>{policy.sections.manageCookies.note}</strong> {policy.sections.manageCookies.noteContent}
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{policy.sections.contact.title}</h2>
          <p className="text-gray-700 leading-relaxed">{policy.sections.contact.content}</p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">
              <strong>Email:</strong> contacto@delrio.dev
              <br />
              <strong>{policy.sections.finalNote.website}:</strong> delrio.dev
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="text-sm text-gray-600">
          <p>{policy.sections.finalNote.content}</p>
        </section>
      </div>
    </div>
  );
}
