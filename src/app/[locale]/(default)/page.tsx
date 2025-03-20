import { getMetadata } from '@theme/functions';
import type { IMeta } from '@theme/types';
import { Home } from '@theme-ui/pages';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, space: 'Home' });
}

export default async function Page({ params }: IMeta) {
  const { locale } = await params;
  const dictionary = await getTranslations({
    locale,
    namespace: 'UI',
  });
  return <Home dictionary={dictionary} />;
}
