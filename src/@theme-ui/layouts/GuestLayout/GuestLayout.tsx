import { Box, Stack } from '@theme/components';
import type { IPageLayout } from '@theme/types';
import { getTranslations } from 'next-intl/server';

import { Footer } from '../commons/Footer';
import { Header } from './Commons';

const GuestLayout = async ({ children, params }: IPageLayout) => {
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

export { GuestLayout };
