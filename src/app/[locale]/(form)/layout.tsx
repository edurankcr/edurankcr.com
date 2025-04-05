import type { ILayout } from '@/types';
import { FormLayout } from '@/ui';

export default async function Layout({ children, params }: ILayout) {
  return (
    <FormLayout params={params}>
      {children}
    </FormLayout>
  );
}
