'use client';

import { IconMailOpened } from '@tabler/icons-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useTranslations } from 'use-intl';

import {
  Button,
  Link,
  Progress,
  Stack,
  Text,
} from '@/components';
import { AppRoutes } from '@/constants';
import { getVerifyEmail, getVerifyEmailChange } from '@/services';
import { useUserStore } from '@/stores';
import { GuidValidation } from '@/validations';

// noinspection ES6PreferShortImport
import { HeadingForm } from '../../blocks/Heading';

type VerifyEmailProps = {
  mode?: 'confirmation' | 'verification';
};

type HeadingKey =
  | 'Heading.form_wait_for_verification_email'
  | 'Heading.form_key_not_found'
  | 'Heading.form_key_invalid'
  | 'Heading.form_key_expired'
  | 'Heading.form_key_already_used'
  | 'Heading.form_key_verified';

type ParagraphKey =
  | 'Paragraph.wait_for_verification_email'
  | 'Paragraph.key_not_found'
  | 'Paragraph.key_invalid'
  | 'Paragraph.key_expired'
  | 'Paragraph.key_already_used'
  | 'Paragraph.key_verified'
  | 'Paragraph.change_verified';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const VerifyEmail = ({ mode = 'confirmation' }: VerifyEmailProps) => {
  const [barProgress, setBarProgress] = useState(0);
  const [heading, setHeading] = useState<HeadingKey>('Heading.form_wait_for_verification_email');
  const [paragraph, setParagraph] = useState<ParagraphKey>('Paragraph.wait_for_verification_email');

  const searchParams = useSearchParams();
  const dictionary = useTranslations('UI');

  const handleTokenError = (code: string) => {
    const messages: Record<string, [HeadingKey, ParagraphKey]> = {
      'Token.NotFound': ['Heading.form_key_not_found', 'Paragraph.key_not_found'],
      'Token.AlreadyExpired': ['Heading.form_key_expired', 'Paragraph.key_expired'],
      'Token.AlreadyUsed': ['Heading.form_key_already_used', 'Paragraph.key_already_used'],
    };

    const fallback: [HeadingKey, ParagraphKey] = ['Heading.form_key_invalid', 'Paragraph.key_invalid'];
    const [head, para] = messages[code] ?? fallback;

    setHeading(head);
    setParagraph(para);
    setBarProgress(-1);
  };

  useEffect(() => {
    const verifyToken = async () => {
      const token = searchParams?.get('token');
      if (!token) {
        return handleTokenError('Token.NotFound');
      }

      setBarProgress(25);
      await delay(500);

      const isValid = GuidValidation.safeParse(token);
      if (!isValid.success) {
        return handleTokenError('invalid');
      }

      setBarProgress(50);
      await delay(500);

      try {
        mode === 'confirmation' ? await getVerifyEmail(token) : await getVerifyEmailChange(token);

        setBarProgress(75);
        await delay(400);
        setBarProgress(100);
        setHeading('Heading.form_key_verified');
        setParagraph(mode === 'confirmation' ? 'Paragraph.key_verified' : 'Paragraph.change_verified');

        if (mode === 'verification') {
          const { user, setUser } = useUserStore.getState();
          if (user) {
            setUser({ ...user, newEmail: null });
          }
        }
      } catch (error: any) {
        handleTokenError(error.response?.data?.code || '');
        toast.error(dictionary('Errors.General.500'));
      }
    };

    verifyToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <>
      <Stack alignItems="center">
        <IconMailOpened size={64} />
      </Stack>
      <Stack alignItems="center" gap="sm">
        <HeadingForm>{dictionary(heading)}</HeadingForm>
        <Text align="center" color="secondary" wrap="balance" size="md-res">
          {dictionary(paragraph)}
        </Text>
        {barProgress >= 0 && barProgress < 100 && <Progress value={barProgress} />}
      </Stack>
      {mode === 'confirmation' && barProgress === 100 && (
        <Button bgColor="interactivePrimary" height="lg" href={AppRoutes.Guest.Login}>
          {dictionary('Button.log_in')}
        </Button>
      )}
      {mode === 'confirmation' && (
        <Stack>
          <Text align="center" color="secondary" weight="medium" wrap="balance">
            {dictionary('Paragraph.new_verification_email')}
            {' '}
            <Link
              href={AppRoutes.Guest.Email.Request}
              text={{ underline: true, color: 'primary' }}
            >
              {dictionary('Button.request_another')}
            </Link>
          </Text>
        </Stack>
      )}
    </>
  );
};
