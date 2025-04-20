import type { ITranslations, IUserAbstractComponent } from '@/types';

import { UserDropdownContent, UserDropdownContentGuest, UserDropdownSkeleton } from './Commons';

type UserDropdownProps = IUserAbstractComponent & ITranslations;

const UserDropdown = (params: UserDropdownProps) => {
  const { isLoading, user, dictionary } = params;

  if (isLoading) {
    return <UserDropdownSkeleton />;
  }

  if (!isLoading && user) {
    return <UserDropdownContent user={user} dictionary={dictionary} />;
  }

  return <UserDropdownContentGuest dictionary={dictionary} />;
};

export { UserDropdown };
