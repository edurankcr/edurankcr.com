'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormSubmit,
  Link,
  ModernInput,
  Stack,
  Text,
  useRouter,
} from '@theme/components';
import { postForgotPassword } from '@theme/services';
import { PasswordRequestValidation } from '@theme/validations';
import { FormCheckSpam, HeadingForm } from '@theme-ui/components';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'use-intl';
import type { z } from 'zod';

import { Routes } from '@/routes';

export const RequestPassword = () => {
  const dictionary = useTranslations('UI');
  const router = useRouter();

  const form = useForm<z.infer<typeof PasswordRequestValidation>>({
    resolver: zodResolver(PasswordRequestValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Identifier: '',
    },
  });

  async function onSubmit(values: z.infer<typeof PasswordRequestValidation>) {
    const { Identifier } = values;

    try {
      await postForgotPassword(Identifier);
      form.reset();
      router.push(Routes.Global.Password.Sent);
    } catch (error: any) {
      console.error('Error on postForgotPassword', error);
      // const { response } = error;
      // switch (response.status) {
      //   case 404:
      //     form.setError('Email', {
      //       type: 'manual',
      //       message: dictionary('Errors.User.404'),
      //     });
      //     break;
      //   case 409:
      //     switch (response.data.code) {
      //       case 'User.EmailAlreadyConfirmed':
      //         form.setError('Email', {
      //           type: 'manual',
      //           message: dictionary('Errors.User.EmailAlreadyConfirmed'),
      //         });
      //         break;
      //       case 'Token.AlreadyExists':
      //         form.setError('Email', {
      //           type: 'manual',
      //           message: dictionary('Errors.Token.AlreadyExists'),
      //         });
      //         break;
      //       default:
      //         toast.error(dictionary('Errors.General.500'));
      //     }
      //     break;
      //   default:
      //     toast.error(dictionary('Errors.General.500'));
      // }
    }
  }

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
            <FormField
              control={form.control}
              name="Identifier"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <ModernInput
                      placeholder={dictionary('Input.Identifier.placeholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormSubmit>
              {dictionary('Button.send_password_reset')}
            </FormSubmit>
            <Text align="center" color="secondary" weight="medium" wrap="balance">
              {dictionary('Paragraph.already_know_password')}
              {' '}
              <Link href={Routes.Guest.Login} text={{ underline: true, color: 'primary' }}>
                {dictionary('Button.log_in')}
              </Link>
            </Text>
          </form>
        </Stack>
      </Form>
      <FormCheckSpam dictionary={dictionary} />
    </>
  );
};
