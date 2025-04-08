import type { IMeta } from '@/types';
import { AddInstitute } from '@/ui';
import { getMetadata } from '@/utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'AddInstitute' });
}

export default async function Page() {
  return <AddInstitute />;
}
