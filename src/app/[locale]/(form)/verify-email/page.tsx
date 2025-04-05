import type { IMeta } from '@/types';
import { VerifyEmail } from '@/ui';
import { getMetadata } from '@/utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'VerifyEmail' });
}

export default async function Page() {
  return <VerifyEmail />;
}
