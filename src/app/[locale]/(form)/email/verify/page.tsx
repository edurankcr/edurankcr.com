import { getMetadata } from '@theme/functions';
import type { IMeta } from '@theme/types';
import { VerifyEmail } from '@theme-ui/pages';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, space: 'VerifyEmail' });
}

export default async function Page() {
  return <VerifyEmail />;
}
