import { getDictionary } from '@/lib/i18n';
import HomePage from '../../components/HomePage';

export default async function Page({ params }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return <HomePage params={{ locale }} dictionary={dictionary} />;
}
