import type { IMeta } from '@/types';
import { getMetadata } from '@/utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'Settings' });
}

export default async function Page() {
  return <div>Settings</div>;
}
