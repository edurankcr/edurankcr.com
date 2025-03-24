import { getMetadata } from '@theme/functions';
import type { IMeta } from '@theme/types';
import { Login } from '@theme-ui/pages';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, space: 'Login' });
}

export default async function Page() {
  return <Login />;
}
