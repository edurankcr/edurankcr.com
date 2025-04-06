'use client';

import { IconBell, IconHelp, IconLockSquare, IconShield, IconUserCog, IconUserScan } from '@tabler/icons-react';
import type { ComponentProps, FC } from 'react';
import React from 'react';
import { useTranslations } from 'use-intl';

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
  {
    id: 3,
    label: 'privacy',
    icon: <IconLockSquare />,
    href: AppRoutes.Auth.Settings.Privacy,
  },
  {
    id: 4,
    label: 'notifications',
    icon: <IconBell />,
    href: AppRoutes.Auth.Settings.Notifications,
  },
  {
    id: 5,
    label: 'preferences',
    icon: <IconUserCog />,
    href: AppRoutes.Auth.Settings.Preferences,
  },
  {
    id: 6,
    label: 'help',
    icon: <IconHelp />,
    href: AppRoutes.Auth.Settings.Help,
  },
];

type MainHeaderProps = {} & IUser & ITranslations;

export const MainHeader: FC<MainHeaderProps> = ({
  dictionary,
  User,
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
          name: User?.name || '',
          email: User?.email || '',
          b: chunks => <b>{chunks}</b>,
          link: chunks => (
            <Link
              href={AppRoutes.Global.Password.Request}
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
        className="border border-transparent text-text-secondary data-[active=true]:border-border-interactive data-[active=true]:text-text-primary hover:text-text-primary rounded-lg transition-all duration-300 ease-in-out"
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
    <Stack
      gap="none"
      fontSize="sm"
      fontWeight="semibold"
      width="full"
      maxWidth="item"
    >
      {MenuItems.map(item => (
        <MainMenuItem
          label={dictionary(`Helpers.Settings.Menu.${item.label}` as any)}
          icon={item.icon}
          href={item.href}
          isActive={pathname.includes(item.href)}
          key={item.id}
        />
      ))}
    </Stack>
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
      flexGrow
      {...mainProps}
    >
      <Stack
        container
        marginY="section"
        padding="3xl"
        rounded="lg"
        bgBackground="white"
        boxShadow={200}
        gap="4xl"
      >
        <MainHeader dictionary={dictionary} User={user} />
        <Group preventGrowOverflow={false} justifyContent="between" gap="4xl">
          <MainMenu dictionary={dictionary} pathname={pathname} />
          <Stack flexGrow alignItems="start">
            {children}
          </Stack>
        </Group>
      </Stack>
    </Box>
  );
};
