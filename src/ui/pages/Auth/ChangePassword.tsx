'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useTranslations } from 'use-intl';
import type { z } from 'zod';

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormSubmit,
  Input,
  Link,
  Stack,
  Text,
  useRouter,
} from '@/components';
import { AppRoutes } from '@/constants';
import { postResetPassword } from '@/services';
import { ChangePasswordValidation, GuidValidation } from '@/validations';

// noinspection ES6PreferShortImport
import { HeadingForm } from '../../blocks/Heading';

type AlertProps = {
  type: 'success' | 'error';
  message: string;
};

export const ChangePassword = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [alert, setAlert] = useState<AlertProps | null>(null);
  const router = useRouter();

  const dictionary = useTranslations('UI');
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof ChangePasswordValidation>>({
    resolver: zodResolver(ChangePasswordValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      TokenId: '',
      ConfirmPassword: '',
      NewPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ChangePasswordValidation>) {
    const { TokenId, NewPassword } = values;

    try {
      await postResetPassword(TokenId, NewPassword);
      form.reset();
      router.push(AppRoutes.Guest.Login);
      toast.success(dictionary('Paragraph.password_change_success'));
    } catch (error: any) {
      const { response } = error;
      setButtonDisabled(true);
      switch (response.data.code) {
        case 'Token.AlreadyExpired':
          setAlert({
            type: 'error',
            message: dictionary.rich('Errors.Token.Expired', {
              link: chunks => (
                <Link
                  href={AppRoutes.Global.Password.Request}
                  text={{ underline: true, weight: 'semibold' }}
                >
                  {chunks}
                </Link>
              ),
            }),
          } as any);
          break;
        case 'Token.AlreadyUsed':
          setAlert({
            type: 'error',
            message: dictionary.rich('Errors.Token.AlreadyUsed', {
              link: chunks => (
                <Link
                  href={AppRoutes.Global.Password.Request}
                  text={{ underline: true, weight: 'semibold' }}
                >
                  {chunks}
                </Link>
              ),
            }),
          } as any);
          break;
        default:
          toast.error(dictionary('Errors.General.500'));
      }
    }
  }

  useEffect(() => {
    const showAlert = (message: string) => {
      setAlert({
        type: 'error',
        message,
      });
    };

    const setFalseDisabled = () => setButtonDisabled(false);

    const handleTokenValidation = () => {
      const token = searchParams.get('token');

      if (!token) {
        showAlert(dictionary('Paragraph.key_not_found'));
        return;
      }

      const isValidToken = GuidValidation.safeParse(token);
      if (!isValidToken.success) {
        showAlert(dictionary('Paragraph.key_invalid'));
        return;
      }

      form.setValue('TokenId', token);
      setFalseDisabled();
    };

    handleTokenValidation();
  }, [searchParams, dictionary, form]);

  return (
    <>
      <Stack alignItems="center" gap="sm">
        <HeadingForm>
          {dictionary('Heading.form_request_password')}
        </HeadingForm>
        <Text align="center" color="secondary" wrap="balance" size="md-res">
          {dictionary('Paragraph.request_password')}
        </Text>
      </Stack>
      <Form {...form}>
        <Stack asChild>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {alert && (
              <Alert variant="error">
                <AlertTitle>{dictionary('Heading.alert_error')}</AlertTitle>
                <AlertDescription>
                  {alert.message}
                </AlertDescription>
              </Alert>
            )}
            <FormField
              control={form.control}
              name="NewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={dictionary('Input.NewPassword.placeholder')}
                      disabled={buttonDisabled}
                      type="password"
                      autoComplete="new-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ConfirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={dictionary('Input.ConfirmPassword.placeholder')}
                      disabled={buttonDisabled}
                      type="password"
                      autoComplete="new-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormSubmit disabled={buttonDisabled}>
              {dictionary('Button.change_password')}
            </FormSubmit>
          </form>
        </Stack>
      </Form>
    </>
  );
};
