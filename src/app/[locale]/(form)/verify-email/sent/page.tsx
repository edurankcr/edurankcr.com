import type { IMeta } from '@/types';
import { VerificationEmailSent } from '@/ui';
import { getMetadata } from '@/utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'VerifyEmailSent' });
}

export default async function Page() {
  return <VerificationEmailSent />;
}
