// noinspection ES6PreferShortImport

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'use-intl';
import type { z } from 'zod';

import {
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
import { postForgotPassword } from '@/services';
import { PasswordRequestValidation } from '@/validations';

import { FormCheckSpam } from '../../blocks/Form';
import { HeadingForm } from '../../blocks/Heading';

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
      router.push(AppRoutes.Global.Password.Sent);
    } catch (error: any) {
      console.error('Error on postForgotPassword', error);
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
                    <Input
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
              <Link href={AppRoutes.Guest.Login} text={{ underline: true, color: 'primary' }}>
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
