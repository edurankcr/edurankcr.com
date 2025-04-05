import type { ILayout } from '@/types';
import { SettingLayout } from '@/ui';

export default async function Layout({ children, params }: ILayout) {
  return (
    <SettingLayout params={params}>
      {children}
    </SettingLayout>
  );
}
