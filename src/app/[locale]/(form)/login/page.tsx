import type { IMeta } from '@/types';
import { Login } from '@/ui';
import { getMetadata } from '@/utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'Login' });
}

export default async function Page() {
  return <Login />;
}
