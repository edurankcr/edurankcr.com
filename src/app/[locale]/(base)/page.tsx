import { getTranslations } from 'next-intl/server';

import { ViewHome } from '@/elements';
import type { IMeta } from '@/types';
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
  return <ViewHome dictionary={dictionary} />;
}
