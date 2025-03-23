import type { IDictionary } from '@theme/types';
import { useFormatter } from 'next-intl';

type PageProps = {} & IDictionary;

export const Login = ({ dictionary }: PageProps) => {
  const formater = useFormatter();
  return (
    <>
      Hello World!
    </>
  );
};
