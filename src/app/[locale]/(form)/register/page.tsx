import type { IMeta } from '@/types';
import { Register } from '@/ui';
import { getMetadata } from '@/utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'Register' });
}

export default async function Page() {
  return <Register />;
}
