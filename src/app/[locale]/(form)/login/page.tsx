import { getMetadata } from '@theme/functions';
import type { IMeta } from '@theme/types';
import { Login } from '@theme-ui/pages';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, space: 'Login' });
}

export default async function Page({ params }: IMeta) {
  const { locale } = await params;
  const dictionary = await getTranslations({
    locale,
    namespace: 'UI',
  });
  return <Login dictionary={dictionary} />;
}
