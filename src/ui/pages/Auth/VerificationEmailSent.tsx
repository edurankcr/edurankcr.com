'use client';

import { IconMailUp } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import {
  Button,
  Link,
  Stack,
  Text,
} from '@/components';
import { AppRoutes } from '@/constants';

// noinspection ES6PreferShortImport
import { HeadingForm } from '../../blocks/Heading';

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
          href={AppRoutes.Guest.Email.Request}
        >
          {dictionary('Button.new_verification_email')}
        </Button>
        <Text align="center" color="secondary" weight="medium" wrap="balance">
          {dictionary('Paragraph.already_verified')}
          {' '}
          <Link href={AppRoutes.Guest.Login} text={{ underline: true, color: 'primary' }}>
            {dictionary('Button.log_in')}
          </Link>
        </Text>
      </Stack>
    </>
  );
};
