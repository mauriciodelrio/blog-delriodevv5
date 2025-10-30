import { getDictionary } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);
  
  return {
    title: `${dict.navigation.privacy} | DelRio Dev`,
    description: `${dict.navigation.privacy} - DelRio Dev Blog`,
    robots: 'index, follow',
  };
}

export default function PrivacyPolicyPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{maxWidth: '1440px'}}>
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-2">{dict.legal.privacyPolicy.title}</h1>
        <p className="text-gray-600 mb-8">
          {dict.legal.privacyPolicy.lastUpdated}: {locale === 'es' ? '28 de octubre de 2025' : 'October 28, 2025'}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {dict.legal.privacyPolicy.sections.informationWeCollect.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {dict.legal.privacyPolicy.sections.informationWeCollect.content}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {dict.legal.privacyPolicy.sections.useOfCookies.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {dict.legal.privacyPolicy.sections.useOfCookies.content}{' '}
            <a href={`/${locale}/cookie-policy`} className="text-blue-600 hover:underline">
              {dict.legal.privacyPolicy.sections.useOfCookies.linkText}
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {dict.legal.privacyPolicy.sections.contact.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {dict.legal.privacyPolicy.sections.contact.content}
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">
              <strong>{dict.legal.privacyPolicy.sections.contact.email}:</strong> contacto@delrio.dev<br />
              <strong>{dict.legal.privacyPolicy.sections.contact.website}:</strong> delrio.dev
            </p>
          </div>
        </section>

        <hr className="my-8" />
        
        <section className="text-sm text-gray-600">
          <p>
            {dict.legal.privacyPolicy.sections.updates.content}
          </p>
        </section>
      </div>
    </div>
  );
}