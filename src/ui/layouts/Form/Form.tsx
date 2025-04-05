import { getTranslations } from 'next-intl/server';

import { Stack } from '@/components';
import type { IPageLayout } from '@/types';

import { Footer } from '../Footer';
import { Header, Main } from './Commons';

export const Form = async ({ children, params }: IPageLayout) => {
  const { locale } = await params;
  const dictionary = await getTranslations({
    locale,
    namespace: 'UI',
  });
  return (
    <Stack height="auto" minHeight="dvh" gap="none">
      <Header dictionary={dictionary} />
      <Main>
        {children}
      </Main>
      <Footer dictionary={dictionary} />
    </Stack>
  );
};
