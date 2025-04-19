'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
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
  Stack,
  useRouter,
} from '@/components';
import { AppRoutes } from '@/constants';
import { postResetPassword } from '@/services';
import { ChangePasswordValidation, GuidValidation } from '@/validations';

const FormResetPassword = () => {
  const dictionary = useTranslations('Base');
  const router = useRouter();
  const searchParams = useSearchParams();

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

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
    const { TokenId, ConfirmPassword } = values;

    try {
      await postResetPassword(TokenId, ConfirmPassword);
      form.reset();
      router.push(AppRoutes.Guest.Login);
      toast.success(dictionary('Form.ResetPassword.password_change_success'));
    } catch (error: any) {
      const { response } = error;
      setButtonDisabled(true);
      switch (response.data.code) {
        case 'Token.NotFound':
          setAlertMessage(dictionary('Errors.token_not_found'));
          break;
        case 'User.NotFound':
          setAlertMessage(dictionary('Errors.user_not_found'));
          break;
        default:
          toast.error(dictionary('Errors.fetch_server'));
      }
    }
  }

  useEffect(() => {
    const setMessageAlert = (message: string) => {
      setAlertMessage(message);
    };

    const setFalseDisabled = () => setButtonDisabled(false);

    const handleTokenValidation = () => {
      const token = searchParams.get('token');

      if (!token) {
        setMessageAlert(dictionary('Errors.token_not_found'));
        return;
      }

      const isValidToken = GuidValidation.safeParse(token);
      if (!isValidToken.success) {
        setMessageAlert(dictionary('Errors.token_invalid'));
        return;
      }

      form.setValue('TokenId', token);
      setFalseDisabled();
    };

    handleTokenValidation();
  }, [dictionary, form, searchParams]);

  return (
    <Form {...form}>
      <Stack asChild>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {alertMessage && (
            <Alert variant="error">
              <AlertTitle>{dictionary('Form.ResetPassword.alert_error')}</AlertTitle>
              <AlertDescription>
                {alertMessage}
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
  );
};

export { FormResetPassword };
