'use client';

import { IconShield, IconUserScan } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import type { ComponentProps, FC } from 'react';
import React from 'react';

import { Box, Group, Link, Stack, Text, usePathname } from '@/components';
import { Link as RouterLink } from '@/components/Navigation/Navigation';
import { AppRoutes } from '@/constants';
import { useUserStore } from '@/stores';
import type { IPathName, ITranslations, IUser } from '@/types';

// noinspection ES6PreferShortImport
import { Heading } from '../../../blocks/Heading';

const MenuItems = [
  {
    id: 1,
    label: 'personal_info',
    icon: <IconUserScan />,
    href: AppRoutes.Auth.Settings.Main,
  },
  {
    id: 2,
    label: 'security',
    icon: <IconShield />,
    href: AppRoutes.Auth.Settings.Security,
  },
];

type MainHeaderProps = {} & IUser & ITranslations;

export const MainHeader: FC<MainHeaderProps> = ({
  dictionary,
  user,
}) => {
  return (
    <Stack
      alignItems="start"
      gap="sm"
    >
      <Heading>
        {dictionary('Helpers.Settings.About.title')}
      </Heading>
      <Text>
        {dictionary.rich('Helpers.Settings.About.description', {
          greeting: 'Hello',
          name: user?.name || '',
          email: user?.email || '',
          b: (chunks: any) => <b>{chunks}</b>,
          link: (chunks: any) => (
            <Link
              href={AppRoutes.Global.Profile(user?.userName || '')}
              text={{ underline: true, weight: 'semibold', color: 'neon' }}
            >
              {chunks}
            </Link>
          ),
        })}
      </Text>
    </Stack>
  );
};

type MainMenuItemProps = {
  label: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
};

const MainMenuItem: FC<MainMenuItemProps> = ({
  label,
  icon,
  href,
  isActive = false,
}) => {
  return (
    <RouterLink href={href}>
      <Group
        flexGrow
        flexWrap="nowrap"
        justifyContent="start"
        padding="md"
        overflow="hidden"
        preventGrowOverflow={false}
        data-active={isActive}
        className="text-nowrap border border-transparent text-text-secondary data-[active=true]:border-border-interactive data-[active=true]:text-text-primary hover:text-text-primary rounded-lg transition-all duration-300 ease-in-out"
      >
        {icon}
        {label}
      </Group>
    </RouterLink>
  );
};

type MainMenuProps = {} & ITranslations & IPathName;

export const MainMenu: FC<MainMenuProps> = ({
  dictionary,
  pathname,
}) => {
  return (
    <Box
      gap="none"
      fontSize="sm"
      fontWeight="semibold"
      width="full"
      flexWrap="nowrap"
      className="flex flex-row md:flex-col overflow-x-scroll md:overflow-x-hidden md:max-w-1/4"
    >
      {MenuItems.map(item => (
        <MainMenuItem
          label={dictionary(`Helpers.Settings.Menu.${item.label}` as any)}
          icon={item.icon}
          href={item.href}
          isActive={pathname === item.href}
          key={item.id}
        />
      ))}
    </Box>
  );
};

type MainProps = {} & ComponentProps<typeof Box>;

export const Main: FC<MainProps> = ({
  children,
  ...props
}) => {
  const dictionary = useTranslations('UI');
  const pathname = usePathname();
  const { user } = useUserStore();
  const mainProps = {
    ...props,
  };
  return (
    <Box
      as="main"
      height="full"
      position="relative"
      bgBackground="secondary"
      padding="section"
      flexGrow
      {...mainProps}
    >
      <Stack
        container
        padding="section"
        rounded="lg"
        bgBackground="white"
        boxShadow={200}
        gap="section"
      >
        <MainHeader dictionary={dictionary} user={user} />
        <Group preventGrowOverflow={false} justifyContent="between" alignItems="start" gap="section">
          <MainMenu dictionary={dictionary} pathname={pathname} />
          <Stack flexGrow height="full">
            {children}
          </Stack>
        </Group>
      </Stack>
    </Box>
  );
};
