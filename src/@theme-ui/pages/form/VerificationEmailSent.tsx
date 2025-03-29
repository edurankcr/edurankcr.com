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

export const VerificationEmailSent = () => {
  const dictionary = useTranslations('UI');

  return (
    <>
      <Stack alignItems="center">
        <IconMailUp size={64} />
      </Stack>
      <Stack alignItems="center" gap="sm">
        <HeadingForm>
          {dictionary('Heading.form_request_verification_email_sent')}
        </HeadingForm>
        <Text align="center" color="secondary" wrap="balance" size="md-res">
          {dictionary('Paragraph.request_verification_email_sent')}
        </Text>
      </Stack>
      <Stack>
        <Button
          bgColor="interactivePrimary"
          height="lg"
          href={Routes.Guest.Email.Request}
        >
          {dictionary('Button.new_verification_email')}
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
