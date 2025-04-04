import type { IMeta } from '@types';
import { RequestPasswordSent } from '@ui/pages';
import { getMetadata } from '@utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'RequestPasswordSent' });
}

export default async function Page() {
  return <RequestPasswordSent />;
}
