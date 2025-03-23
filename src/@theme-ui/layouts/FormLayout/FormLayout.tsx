import { Box, Stack } from '@theme/components';
import type { IPageLayout } from '@theme/types';
import { Footer } from '@theme-ui/layouts/Commons/Footer';
import { getTranslations } from 'next-intl/server';

import { Header } from './Commons';

const FormLayout = async ({ children, params }: IPageLayout) => {
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

export { FormLayout };
