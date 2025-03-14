import { Box, Header, Stack } from '@theme/components';
import type { IPageLayout } from '@theme/types';
import { getTranslations } from 'next-intl/server';

const PageLayout = async ({ children, params }: IPageLayout) => {
  const { locale } = await params;
  const dictionary = await getTranslations({
    locale,
    namespace: 'UI',
  });
  return (
    <Stack height="screen" gap="none">
      <Header dictionary={dictionary} />
      <Stack as="main" justify="start" align="start" gap="none">
        {children}
      </Stack>
      <Box as="footer" container>
        This is the footer
      </Box>
    </Stack>
  );
};

export { PageLayout };
