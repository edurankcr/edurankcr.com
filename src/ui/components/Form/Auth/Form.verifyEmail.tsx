'use client';

import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Link,
  Progress,
  Stack,
  Text,
  useRouter,
} from '@/components';
import { AppRoutes } from '@/constants';
import { getVerifyEmail, getVerifyEmailChange } from '@/services';
import { useUserStore } from '@/stores';
import { getDelay } from '@/utils';
import { GuidValidation } from '@/validations';

type FormVerifyEmailProps = {
  type?: 'default' | 'change';
};

const FormVerifyEmail = (params: FormVerifyEmailProps) => {
  const { type = 'default' } = params;

  const dictionary = useTranslations('Base');
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useUserStore.getState();

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [barProgress, setBarProgress] = useState(0);

  useEffect(() => {
    const setUser = useUserStore.getState().setUser;

    const setMessageAlert = (message: string) => {
      setAlertMessage(message);
    };

    const verifyToken = async () => {
      const token = searchParams?.get('token');
      if (!token) {
        return setMessageAlert(dictionary('Errors.token_not_found'));
      }

      setBarProgress(25);
      await getDelay(1000);

      const isValid = GuidValidation.safeParse(token);
      if (!isValid.success) {
        return setMessageAlert(dictionary('Errors.token_invalid'));
      }

      setBarProgress(50);
      await getDelay(1000);

      try {
        setBarProgress(75);
        type === 'default' ? await getVerifyEmail(token) : await getVerifyEmailChange(token);

        setBarProgress(100);
        await getDelay(1500);

        if (type === 'change' && user) {
          setUser({ ...user, email: user.newEmail!, newEmail: null });
          router.push(AppRoutes.Auth.Settings.Main);
          toast.success(dictionary('Form.VerifyEmail.email_change_success'));
          return;
        }

        router.push(AppRoutes.Guest.Login);
        toast.success(dictionary('Form.VerifyEmail.email_verified_success'));
      } catch (error: any) {
        const { response } = error;
        switch (response.data.code) {
          case 'Token.NotFound':
            setMessageAlert(dictionary('Errors.token_not_found'));
            break;
          default:
            toast.error(dictionary('Errors.fetch_server'));
        }
      }
    };

    verifyToken();
  }, [dictionary, router, searchParams, type, user]);

  return (
    <Stack>
      {!alertMessage && (
        <Progress value={barProgress} />
      )}
      {alertMessage && (
        <Alert variant="error">
          <AlertTitle>{dictionary('Form.ResetPassword.alert_error')}</AlertTitle>
          <AlertDescription>
            {alertMessage}
          </AlertDescription>
        </Alert>
      )}
      <Text align="center" color="secondary" weight="medium" wrap="balance">
        {dictionary('Form.VerifyEmail.need_new_verification_email')}
        {' '}
        <Link href={AppRoutes.Guest.Email.Request} text={{ underline: true, color: 'primary' }}>
          {dictionary('Button.send_email')}
        </Link>
      </Text>
    </Stack>
  );
};

export { FormVerifyEmail };
