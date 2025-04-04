import type { IMeta } from '@types';
import { RequestPassword } from '@ui/pages';
import { getMetadata } from '@utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'RequestPassword' });
}

export default async function Page() {
  return <RequestPassword />;
}
