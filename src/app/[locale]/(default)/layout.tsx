import type { ILayout } from '@/types';
import { DefaultLayout } from '@/ui';

export default async function Layout({ children, params }: ILayout) {
  return (
    <DefaultLayout params={params}>
      {children}
    </DefaultLayout>
  );
}
