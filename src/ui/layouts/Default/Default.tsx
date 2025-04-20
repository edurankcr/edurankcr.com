import { getTranslations } from 'next-intl/server';

import { Stack } from '@/components';
import type { IPageLayout } from '@/types';
import { getRandomNumber } from '@/utils';

import { ClientWrapper, Footer } from './Commons';

export const DefaultLayout = async ({ children, params }: IPageLayout) => {
  const { locale } = await params;
  const dictionary = await getTranslations({
    locale,
    namespace: 'Base',
  });
  const indexImage = getRandomNumber(1, 2);
  return (
    <Stack height="auto" minHeight="dvh" gap="none">
      <ClientWrapper value={indexImage}>{children}</ClientWrapper>
      <Footer dictionary={dictionary} />
    </Stack>
  );
};
