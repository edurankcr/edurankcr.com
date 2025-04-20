import type { IMeta } from '@/types';
import { PageSettingsSecurity } from '@/ui';
import { getMetadata } from '@/utils';

export const generateMetadata = async ({ params }: IMeta) => {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'SettingsSecurity' });
};

const Page = async () => {
  return <PageSettingsSecurity />;
};

export default Page;
