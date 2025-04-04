import type { ILayout } from '@types';
import { BaseLayout } from '@ui/layouts';

export default async function Layout({ children, params }: ILayout) {
  return (
    <BaseLayout params={params}>
      {children}
    </BaseLayout>
  );
}
