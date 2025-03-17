import { Box, Section, Stack, Text } from '@theme/components';
import type { IPageLayout } from '@theme/types';
import { getTranslations } from 'next-intl/server';

import { Header } from './Commons';

const DefaultLayout = async ({ children, params }: IPageLayout) => {
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
      <Box as="footer" container>
        <Section>
          <Text>
            © 2025 - All rights reserved.
          </Text>
        </Section>
      </Box>
    </Stack>
  );
};

export { DefaultLayout };
