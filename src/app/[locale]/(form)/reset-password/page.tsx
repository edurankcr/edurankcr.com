import type { IMeta } from '@/types';
import { ChangePassword } from '@/ui';
import { getMetadata } from '@/utils';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, namespace: 'RequestPasswordChange' });
}

export default async function Page() {
  return <ChangePassword />;
}
