import { getDictionary } from '@/lib/i18n';
import ProjectsPage from '../../../components/ProjectsPage';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const title = dict.projects.title;

  return {
    title: `${title} | Mauricio Del Río`,
    description: dict.projects.subtitle,
    openGraph: {
      title: `${title} | Mauricio Del Río`,
      description: dict.projects.subtitle,
      url: `/${locale}/projects`,
    },
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        en: '/en/projects',
        es: '/es/projects',
      },
    },
  };
}

export default async function Page({ params }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);

  return <ProjectsPage dictionary={dictionary} />;
}
