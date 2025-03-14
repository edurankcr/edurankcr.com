import { getMetadata } from '@theme/hooks';
import type { IMeta } from '@theme/types';
import { Home } from '@theme-ui/pages';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, space: 'Home' });
}

export default async function Page() {
  return <Home />;
}
