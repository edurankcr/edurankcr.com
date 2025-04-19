import { getTranslations } from 'next-intl/server';

import type { IMeta } from '@/types';
import { PageResetPassword } from '@/ui';
import { getMetadata } from '@/utils';

export const generateMetadata = async ({ params }: IMeta) => {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'ResetPassword' });
};

const Page = async ({ params }: IMeta) => {
  const { locale } = await params;
  const dictionary = await getTranslations({
    locale,
    namespace: 'Base',
  });
  return <PageResetPassword dictionary={dictionary} />;
};

export default Page;
