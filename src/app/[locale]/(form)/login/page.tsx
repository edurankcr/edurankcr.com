import type { IMeta } from '@types';
import { Login } from '@ui/pages';
import { getMetadata } from '@utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'Login' });
}

export default async function Page() {
  return <Login />;
}
