import { getTranslations } from 'next-intl/server';

import type { IMeta } from '@/types';
import { Home } from '@/ui';
import { getMetadata } from '@/utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'Home' });
}

export default async function Page({ params }: IMeta) {
  const { locale } = await params;
  const dictionary = await getTranslations({
    locale,
    namespace: 'UI',
  });
  return <Home dictionary={dictionary} />;
}
