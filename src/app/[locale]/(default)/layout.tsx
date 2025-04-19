import type { ILayout } from '@/types';
import { DefaultLayout } from '@/ui';

const Layout = async ({ children, params }: ILayout) => {
  return <DefaultLayout params={params} children={children} />;
};

export default Layout;
