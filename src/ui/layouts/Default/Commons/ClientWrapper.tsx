'use client';

import { usePathname } from '@/components';
import type { IChildren } from '@/types';

import { Header } from './Header';
import { Main } from './Main';

type ClientWrapperProps = {
  value?: number;
} & IChildren;

const ClientWrapper = (props: ClientWrapperProps) => {
  const { children, value } = props;
  const pathname = usePathname();
  return (
    <>
      <Header pathname={pathname} />
      <Main pathname={pathname} children={children} value={value} />
    </>
  );
};

export { ClientWrapper };
