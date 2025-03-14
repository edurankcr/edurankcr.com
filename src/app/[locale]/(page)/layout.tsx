import type { ILayout } from '@theme/types';
import { PageLayout } from '@theme-ui/layouts';

export default async function Layout({ children, params }: ILayout) {
  return (
    <PageLayout params={params}>
      {children}
    </PageLayout>
  );
}
