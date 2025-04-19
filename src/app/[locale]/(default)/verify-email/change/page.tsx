import { getTranslations } from 'next-intl/server';

import type { IMeta } from '@/types';
import { PageVerifyEmailChange } from '@/ui';
import { getMetadata } from '@/utils';

export const generateMetadata = async ({ params }: IMeta) => {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'VerifyEmailChange' });
};

const Page = async ({ params }: IMeta) => {
  const { locale } = await params;
  const dictionary = await getTranslations({
    locale,
    namespace: 'Base',
  });
  return <PageVerifyEmailChange dictionary={dictionary} />;
};

export default Page;
