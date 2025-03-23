import type { ILayout } from '@theme/types';
import { BaseLayout } from '@theme-ui/layouts';

export default async function Layout({ children, params }: ILayout) {
  return (
    <BaseLayout params={params}>
      {children}
    </BaseLayout>
  );
}
