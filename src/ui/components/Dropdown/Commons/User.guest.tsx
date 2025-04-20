import { Button } from '@/components';
import { AppRoutes } from '@/constants';
import type { ITranslations } from '@/types';

type UserDropdownContentGuestProps = ITranslations;

const UserDropdownContentGuest = (params: UserDropdownContentGuestProps) => {
  const { dictionary } = params;
  return (
    <Button height="md" borderColor="interactive" borderWidth={2} href={AppRoutes.Guest.Login} className="w-[88px] max-w-[88px]">
      {dictionary('Button.log_in')}
    </Button>
  );
};

export { UserDropdownContentGuest };
