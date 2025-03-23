import type { ILayout } from '@theme/types';
import { GuestLayout } from '@theme-ui/layouts';

export default async function Layout({ children, params }: ILayout) {
  return (
    <GuestLayout params={params}>
      {children}
    </GuestLayout>
  );
}
