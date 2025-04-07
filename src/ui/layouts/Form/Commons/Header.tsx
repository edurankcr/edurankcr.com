import type { ComponentProps, FC } from 'react';

import type { Box } from '@/components';
import { Group, Logotype, Stack, Text } from '@/components';
import type { IDictionary } from '@/types';
import { UserPreview } from '@/ui';

// noinspection ES6PreferShortImport
import { SearchInput } from '../../../blocks/Search';

type HeaderProps = {
  urlHomepage?: string;
} & IDictionary & ComponentProps<typeof Box>;

export const Header: FC<HeaderProps> = ({
  urlHomepage = '/',
  dictionary,
  ...props
}) => {
  const headerProps = {
    ...props,
  };

  return (
    <Stack
      as="header"
      container
      paddingX="section"
      zIndex={50}
      {...headerProps}
    >
      <Group flexGrow flexWrap="nowrap" justifyContent="between" preventGrowOverflow={false} gap="4xl">
        <Group flexGrow flexWrap="nowrap" preventGrowOverflow={false}>
          <Logotype variant="black" urlHomepage={urlHomepage} responsive />
          <SearchInput placeholder={dictionary('Input.Search.placeholder_sm')} />
        </Group>
        <Group
          flexWrap="nowrap"
          justifyContent="end"
          preventGrowOverflow={false}
          hiddenFrom="xs"
          visibleFrom="md"
          fontColor="primary"
          fontSize="sm"
          fontWeight="semibold"
          gap="4xl"
        >
          <Group flexGrow flexWrap="nowrap" justifyContent="end" preventGrowOverflow={false} gap="2xl">
            <Text>
              {dictionary('Helpers.Navigation.Explore.label_emoji')}
            </Text>
            <Text>
              {dictionary('Helpers.Navigation.Saved.label')}
            </Text>
          </Group>
          <UserPreview border />
        </Group>
      </Group>
    </Stack>
  );
};
