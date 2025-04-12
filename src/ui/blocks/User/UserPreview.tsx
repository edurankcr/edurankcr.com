'use client';

import { IconChevronRight, IconMenu } from '@tabler/icons-react';
import { cx } from 'class-variance-authority';
import { toast } from 'sonner';
import { useTranslations } from 'use-intl';

import {
  Avatar,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Group,
  Stack,
  Text,
  useRouter,
} from '@/components';
import { AppRoutes } from '@/constants';
import { deleteTokenCookie } from '@/services';
import { useUserStore } from '@/stores';
import type { User } from '@/types';

// noinspection ES6PreferShortImport
import { UserPreviewSkeleton } from '../Skeleton';

type UserProps = {
  border?: boolean;
} & User;

const UserQuickView = ({ border = false, userName, avatarUrl, name, lastName }: UserProps) => {
  const dictionary = useTranslations('UI');
  const router = useRouter();

  const handleLogout = async () => {
    await deleteTokenCookie();
    useUserStore.getState().clearUser();
    router.push(AppRoutes.Global.Home);
    toast.success(dictionary('Paragraph.success_logout'));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Group
          flexWrap="nowrap"
          fontColor="black"
          bgBackground="white"
          rounded="full"
          justifyContent="between"
          gap="md"
          className={cx(
            'ps-4 pe-2 min-h-[42px] max-h-[42px] cursor-pointer',
            border && 'border border-border-interactive',
          )}
        >
          <IconMenu size={18} />
          <Avatar
            user={{
              avatarUrl,
              userName,
            }}
            width={32}
            height={32}
            className="rounded-full min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px]"
          />
        </Group>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[220px] w-[220px] max-w-[220px]">
        <DropdownMenuItem>
          <Group width="full" preventGrowOverflow={false} flexWrap="nowrap" justifyContent="between">
            <Group
              preventGrowOverflow={false}
              flexWrap="nowrap"
              gap="md"
              overflow="hidden"
            >
              <Avatar
                user={{
                  avatarUrl,
                  userName,
                }}
                width={32}
                height={32}
                className="rounded-full min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px]"
              />
              <Stack gap="none" overflow="hidden">
                <Text weight="medium" truncate>
                  {name}
                  {' '}
                  {lastName}
                </Text>
                <Text color="secondary">
                  {dictionary('Button.show_profile')}
                </Text>
              </Stack>
            </Group>
            <IconChevronRight />
          </Group>
        </DropdownMenuItem>
        <DropdownMenuItem href={AppRoutes.Auth.Settings.Main}>
          {dictionary('Button.settings')}
        </DropdownMenuItem>
        <DropdownMenuItem>
          {dictionary('Button.help_center')}
        </DropdownMenuItem>
        <DropdownMenuItem className="text-text-error" onClick={handleLogout}>
          {dictionary('Button.logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type UserPreviewProps = {
  border?: boolean;
};

export const UserPreview = ({ border = false }: UserPreviewProps) => {
  const dictionary = useTranslations('UI');
  const user = useUserStore(state => state.user);
  const isLoading = useUserStore(state => state.hasHydrated);

  if (!isLoading) {
    return <UserPreviewSkeleton />;
  }

  if (user) {
    return <UserQuickView border={border} {...user} />;
  }

  return (
    <Button height="sm" paddingX="sm" borderColor="interactive" borderWidth={2} href={AppRoutes.Guest.Login}>
      {dictionary('Button.log_in')}
    </Button>
  );
};
