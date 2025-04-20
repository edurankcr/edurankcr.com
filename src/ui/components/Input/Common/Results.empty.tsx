import React from 'react';

import { Icons, Stack, Text } from '@/components';
import type { ITranslations } from '@/types';

import { GlobalSearchInputResultsContainer } from './Results.container';

type GlobalSearchInputResultsEmptyProps = ITranslations;

const GlobalSearchInputResultsEmpty = (params: GlobalSearchInputResultsEmptyProps) => {
  const { dictionary } = params;
  return (
    <GlobalSearchInputResultsContainer>
      <Stack justifyContent="center" alignItems="center" gap="md" paddingY="xl">
        <Icons iconName="search" size={24} />
        <Stack justifyContent="center" alignItems="center" gap="none">
          <Text size="lg" weight="medium">
            {dictionary('Input.Search.Results.empty_title')}
          </Text>
          <Text align="center" wrap="balance">
            {dictionary('Input.Search.Results.empty_desc')}
          </Text>
        </Stack>
      </Stack>
    </GlobalSearchInputResultsContainer>
  );
};

export { GlobalSearchInputResultsEmpty };
