'use client';

import { IconMailUp } from '@tabler/icons-react';
import {
  Button,
  Link,
  Stack,
  Text,
} from '@theme/components';
import { HeadingForm } from '@theme-ui/components';
import { useTranslations } from 'use-intl';

import { Routes } from '@/routes';

export const RequestPasswordSent = () => {
  const dictionary = useTranslations('UI');

  return (
    <>
      <Stack alignItems="center">
        <IconMailUp size={64} />
      </Stack>
      <Stack alignItems="center" gap="sm">
        <HeadingForm>
          {dictionary('Heading.form_request_password_sent')}
        </HeadingForm>
        <Text align="center" color="secondary" wrap="balance" size="md-res">
          {dictionary('Paragraph.request_password_sent')}
        </Text>
      </Stack>
      <Stack>
        <Button
          bgColor="interactivePrimary"
          height="lg"
          href={Routes.Global.Home}
        >
          {dictionary('Button.go_to_home')}
        </Button>
        <Text align="center" color="secondary" weight="medium" wrap="balance">
          {dictionary('Paragraph.already_verified')}
          {' '}
          <Link href={Routes.Guest.Login} text={{ underline: true, color: 'primary' }}>
            {dictionary('Button.log_in')}
          </Link>
        </Text>
      </Stack>
    </>
  );
};
