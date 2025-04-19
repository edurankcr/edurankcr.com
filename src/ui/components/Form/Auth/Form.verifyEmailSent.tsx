'use client';

import { useTranslations } from 'next-intl';

import {
  Button,
  Link,
  Stack,
  Text,
} from '@/components';
import { AppRoutes } from '@/constants';

const FormVerifyEmailSent = () => {
  const dictionary = useTranslations('Base');

  return (
    <Stack>
      <Button
        bgColor="interactivePrimary"
        height="lg"
        href={AppRoutes.Global.Home}
      >
        {dictionary('Button.go_to_home')}
      </Button>
      <Text align="center" color="secondary" weight="medium" wrap="balance">
        {dictionary('Form.VerifyEmailSent.already_verified')}
        {' '}
        <Link href={AppRoutes.Guest.Login} text={{ underline: true, color: 'primary' }}>
          {dictionary('Button.log_in')}
        </Link>
      </Text>
    </Stack>
  );
};

export { FormVerifyEmailSent };
