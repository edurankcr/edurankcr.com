import { getMetadata } from '@theme/functions';
import type { IMeta } from '@theme/types';
import { RequestPasswordSent } from '@theme-ui/pages';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, space: 'RequestPasswordSent' });
}

export default async function Page() {
  return <RequestPasswordSent />;
}
