'use client';

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
} from '@components';
import { AppRoutes } from '@constants';
import { deleteTokenCookie } from '@services';
import { useUserStore } from '@stores';
import { IconChevronRight, IconMenu } from '@tabler/icons-react';
import type { User } from '@types';
import { UserPreviewSkeleton } from '@ui/blocks';
import { toast } from 'sonner';
import { useTranslations } from 'use-intl';

type UserProps = {} & User;

const UserQuickView = ({ userName, avatarUrl, name, lastName }: UserProps) => {
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
          boxShadow="card"
          className="ps-4 pe-2 min-h-[42px] max-h-[42px] cursor-pointer"
        >
          <IconMenu size={18} />
          <Avatar
            User={{
              AvatarUrl: avatarUrl,
              UserName: userName,
            }}
            width={32}
            height={32}
            className="rounded-full"
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
                User={{
                  AvatarUrl: avatarUrl,
                  UserName: userName,
                }}
                width={32}
                height={32}
                className="rounded-full"
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
        <DropdownMenuItem>
          {dictionary('Button.favorites')}
        </DropdownMenuItem>
        <DropdownMenuItem>
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

export const UserPreview = () => {
  const dictionary = useTranslations('UI');
  const user = useUserStore(state => state.user);
  const isLoading = useUserStore(state => state.hasHydrated);

  if (!isLoading) {
    return <UserPreviewSkeleton />;
  }

  if (user) {
    return <UserQuickView {...user} />;
  }

  return (
    <Button height="sm" paddingX="sm" borderColor="interactive" borderWidth={2} href={AppRoutes.Guest.Login}>
      {dictionary('Button.log_in')}
    </Button>
  );
};
