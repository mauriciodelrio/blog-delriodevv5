import { getDictionary } from '@/lib/i18n';
import HomePage from '../../components/HomePage';

export default async function Page({ params }) {
  const dictionary = await getDictionary(params.locale);

  return <HomePage params={params} dictionary={dictionary} />;
}

