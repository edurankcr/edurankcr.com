import { Box, Stack } from '@components';
import type { IPageLayout } from '@types';
import { getTranslations } from 'next-intl/server';

import { Footer } from '../Footer';
import { Header } from './Commons';

export const Base = async ({ children, params }: IPageLayout) => {
  const { locale } = await params;
  const dictionary = await getTranslations({
    locale,
    namespace: 'UI',
  });
  return (
    <Stack height="auto" minHeight="dvh" gap="none">
      <Header dictionary={dictionary} />
      <Box
        as="main"
        height="full"
        flexGrow
      >
        {children}
      </Box>
      <Footer dictionary={dictionary} />
    </Stack>
  );
};
