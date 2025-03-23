import type { ILayout } from '@theme/types';
import { FormLayout } from '@theme-ui/layouts';

export default async function Layout({ children, params }: ILayout) {
  return (
    <FormLayout params={params}>
      {children}
    </FormLayout>
  );
}
