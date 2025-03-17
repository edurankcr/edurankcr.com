import type { ILayout } from '@theme/types';
import { DefaultLayout } from '@theme-ui/layouts';

export default async function Layout({ children, params }: ILayout) {
  return (
    <DefaultLayout params={params}>
      {children}
    </DefaultLayout>
  );
}
