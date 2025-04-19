'use client';

import { useTranslations } from 'next-intl';

import { Group, Logotype, Stack } from '@/components';
import { useUserStore } from '@/stores';
import type { IPathname } from '@/types';
import { NavbarHeader, UserDropdown } from '@/ui';

type HeaderProps = IPathname;

const Header = (params: HeaderProps) => {
  const { pathname } = params;

  const dictionary = useTranslations('Base');
  const { hasHydrated, user } = useUserStore();

  const getSettings = (): any => {
    switch (pathname) {
      case '/':
        return {
          boxSettings: {
            fontColor: 'white',
            position: 'absolute',
            className: 'inset-0',
          },
          logoSettings: {
            variant: 'white',
          },
        };
      default:
        return {
          boxSettings: {
            fontColor: 'primary',
            className: 'inset-x-0 top-0',
          },
          logoSettings: {
            variant: 'black',
          },
        };
    }
  };

  const { boxSettings, logoSettings } = getSettings();

  return (
    <Stack
      as="header"
      paddingX="section"
      zIndex={50}
      container
      {...boxSettings}
    >
      <Group flexGrow flexWrap="nowrap" justifyContent="between" preventGrowOverflow={false}>
        <Logotype {...logoSettings} />
        <Group
          flexGrow
          flexWrap="nowrap"
          justifyContent="end"
          preventGrowOverflow={false}
          hiddenFrom="xs"
          visibleFrom="md"
          fontSize="sm"
          fontWeight="semibold"
          gap="2xl"
        >
          <Group flexGrow justifyContent="end" preventGrowOverflow={false} gap="2xl">
            <NavbarHeader dictionary={dictionary} />
          </Group>
          <UserDropdown isLoading={!hasHydrated} user={user} dictionary={dictionary} />
        </Group>
      </Group>
    </Stack>
  );
};

export { Header };
