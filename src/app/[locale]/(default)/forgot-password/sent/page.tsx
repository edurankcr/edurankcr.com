import { getTranslations } from 'next-intl/server';

import type { IMeta } from '@/types';
import { PageForgotPasswordSent } from '@/ui';
import { getMetadata } from '@/utils';

export const generateMetadata = async ({ params }: IMeta) => {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'ForgotPasswordSent' });
};

const Page = async ({ params }: IMeta) => {
  const { locale } = await params;
  const dictionary = await getTranslations({
    locale,
    namespace: 'Base',
  });
  return <PageForgotPasswordSent dictionary={dictionary} />;
};

export default Page;
