'use client';

import { toast } from 'sonner';

import {
  Avatar,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Group,
  Icons,
  Stack,
  Text,
  useRouter,
} from '@/components';
import { AppRoutes } from '@/constants';
import { deleteTokenCookie } from '@/services';
import { useUserStore } from '@/stores';
import type { ITranslations, IUserComponent } from '@/types';
import { getFullName } from '@/utils';

type UserDropdownContentProps = IUserComponent & ITranslations;

const UserDropdownContent = (params: UserDropdownContentProps) => {
  const { user, dictionary } = params;

  const router = useRouter();

  const handleLogout = async () => {
    await deleteTokenCookie();
    useUserStore.getState().clearUser();
    router.push(AppRoutes.Global.Home);
    toast.success(dictionary('Navbar.Account.logout_success'));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger hasIcon={false}>
        <Group
          flexWrap="nowrap"
          fontColor="black"
          bgBackground="white"
          rounded="full"
          justifyContent="between"
          gap="md"
          height="md"
          className="ps-4 pe-2 cursor-pointer border border-border-interactive"
        >
          <Icons iconName="menu" size={18} />
          <Avatar
            user={user}
          />
        </Group>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[220px] w-[220px] max-w-[220px]">
        <DropdownMenuItem href={AppRoutes.Global.Users.Profile(user.userName)}>
          <Group width="full" preventGrowOverflow={false} flexWrap="nowrap" justifyContent="between">
            <Group
              preventGrowOverflow={false}
              flexWrap="nowrap"
              gap="md"
              overflow="hidden"
            >
              <Avatar
                user={user}
                size="sm"
              />
              <Stack gap="none" overflow="hidden">
                <Text weight="medium" truncate>
                  {getFullName(user.name, user.lastName)}
                </Text>
                <Text color="secondary">
                  {dictionary('Navbar.Account.see_my_profile')}
                </Text>
              </Stack>
            </Group>
            <Icons iconName="chevronRight" />
          </Group>
        </DropdownMenuItem>
        <DropdownMenuItem href={AppRoutes.Auth.Settings.Main}>
          {dictionary('Navbar.Account.settings')}
        </DropdownMenuItem>
        <DropdownMenuItem>
          {dictionary('Navbar.Account.help_center')}
        </DropdownMenuItem>
        <DropdownMenuItem className="text-text-error font-medium" onClick={handleLogout}>
          {dictionary('Navbar.Account.logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { UserDropdownContent };
