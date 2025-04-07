import type { IMeta } from '@/types';
import { PersonalInformation } from '@/ui';
import { getMetadata } from '@/utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'Settings' });
}

export default async function Page() {
  return <PersonalInformation />;
}
