import type { IMeta } from '@/types';
import { PageSettings } from '@/ui';
import { getMetadata } from '@/utils';

export const generateMetadata = async ({ params }: IMeta) => {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'Settings' });
};

const Page = async () => {
  return <PageSettings />;
};

export default Page;
