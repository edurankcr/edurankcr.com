import React from 'react';

import { Group, Icons, Link, Stack, Text } from '@/components';
import { AppRoutes } from '@/constants';
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
        <Group preventGrowOverflow={false} gap="sm" fontColor="secondary" fontSize="sm">
          {dictionary.rich('Input.Search.Results.link', {
            linkTeacher: (chunks: any) => (
              <Link
                href={AppRoutes.Auth.Add.Institute}
                text={{ weight: 'medium', color: 'neon' }}
              >
                {chunks}
              </Link>
            ),
            linkInstitute: (chunks: any) => (
              <Link
                href={AppRoutes.Auth.Add.Institute}
                text={{ weight: 'medium', color: 'neon' }}
              >
                {chunks}
              </Link>
            ),
          })}
        </Group>
      </Stack>
    </GlobalSearchInputResultsContainer>
  );
};

export { GlobalSearchInputResultsEmpty };
