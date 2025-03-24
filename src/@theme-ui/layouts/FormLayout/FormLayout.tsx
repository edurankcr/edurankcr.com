import { Stack } from '@theme/components';
import type { IPageLayout } from '@theme/types';
import { getTranslations } from 'next-intl/server';

import { Footer } from '../Commons';
import { Header, Main } from './Commons';

const FormLayout = async ({ children, params }: IPageLayout) => {
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

export { FormLayout };
