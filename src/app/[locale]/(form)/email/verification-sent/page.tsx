import { getMetadata } from '@theme/functions';
import type { IMeta } from '@theme/types';
import { VerificationEmailSent } from '@theme-ui/pages';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, space: 'VerifyEmailSent' });
}

export default async function Page() {
  return <VerificationEmailSent />;
}
