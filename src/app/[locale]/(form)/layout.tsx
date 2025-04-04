import type { ILayout } from '@types';
import { FormLayout } from '@ui/layouts';

export default async function Layout({ children, params }: ILayout) {
  return (
    <FormLayout params={params}>
      {children}
    </FormLayout>
  );
}
