'use client';

import { IconMailOpened } from '@tabler/icons-react';
import {
  Button,
  Link,
  Progress,
  Stack,
  Text,
} from '@theme/components';
import { getVerifyEmail } from '@theme/services';
import { GuidValidation } from '@theme/validations';
import { HeadingForm } from '@theme-ui/components';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useTranslations } from 'use-intl';

import { Routes } from '@/routes';

export const VerifyEmail = () => {
  const [barProgress, setBarProgress] = useState(0);
  const [heading, setHeading] = useState<'Heading.form_wait_for_verification_email' | string>(
    'Heading.form_wait_for_verification_email',
  );
  const [paragraph, setParagraph] = useState<'Paragraph.wait_for_verification_email' | string>(
    'Paragraph.wait_for_verification_email',
  );

  const searchParams = useSearchParams();
  const dictionary = useTranslations('UI');
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    const verifyToken = async () => {
      if (!searchParams) {
        setBarProgress(-1);
        return;
      }

      const token = searchParams.get('token');

      if (!token) {
        setBarProgress(-1);
        setHeading('Heading.form_key_not_found');
        setParagraph('Paragraph.key_not_found');
        return;
      }

      setBarProgress(25);
      await delay(500);

      const isValidToken = GuidValidation.safeParse(token);
      if (!isValidToken.success) {
        setBarProgress(-1);
        setHeading('Heading.form_key_invalid');
        setParagraph('Paragraph.key_invalid');
        return;
      }

      setBarProgress(50);
      await delay(500);

      try {
        await getVerifyEmail(token);

        setBarProgress(75);
        await delay(400);

        setBarProgress(100);
        setHeading('Heading.form_key_verified');
        setParagraph('Paragraph.key_verified');
      } catch (error: any) {
        setBarProgress(-1);
        const { response } = error;

        switch (response.data?.code) {
          case 'Token.NotFound':
            setHeading('Heading.form_key_not_found');
            setParagraph('Paragraph.key_not_found');
            break;
          case 'Token.AlreadyExpired':
            setHeading('Heading.form_key_expired');
            setParagraph('Paragraph.key_expired');
            break;
          case 'Token.AlreadyUsed':
            setHeading('Heading.form_key_already_used');
            setParagraph('Paragraph.key_already_used');
            break;
          default:
            toast.error(dictionary('Errors.General.500'));
        }
      }
    };

    verifyToken();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [searchParams]);

  return (
    <>
      <Stack alignItems="center">
        <IconMailOpened size={64} />
      </Stack>
      <Stack alignItems="center" gap="sm">
        <HeadingForm>
          {dictionary(heading as any)}
        </HeadingForm>
        <Text align="center" color="secondary" wrap="balance" size="md-res">
          {dictionary(paragraph as any)}
        </Text>
        {barProgress >= 0 && barProgress < 100 && (
          <Progress value={barProgress} />
        )}
      </Stack>
      {barProgress === 100 && (
        <Button
          bgColor="interactivePrimary"
          height="lg"
          href={Routes.Guest.Login}
        >
          {dictionary('Button.log_in')}
        </Button>
      )}
      <Stack>
        <Text align="center" color="secondary" weight="medium" wrap="balance">
          {dictionary('Paragraph.new_verification_email')}
          {' '}
          <Link
            href={Routes.Guest.Email.Request}
            text={{ underline: true, color: 'primary' }}
          >
            {dictionary('Button.request_another')}
          </Link>
        </Text>
      </Stack>
    </>
  );
};
