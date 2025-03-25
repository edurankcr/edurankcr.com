'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
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
} from '@theme/components';
import { postAuthentication } from '@theme/services';
import { LoginValidation } from '@theme/validations';
import { HeadingForm } from '@theme-ui/components';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'use-intl';
import type { z } from 'zod';

import { Routes } from '@/routes';

export const Login = () => {
  const dictionary = useTranslations('UI');

  const form = useForm<z.infer<typeof LoginValidation>>({
    resolver: zodResolver(LoginValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Identifier: '',
      Password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof LoginValidation>) {
    const { Identifier, Password } = values;
    await postAuthentication(Identifier, Password);
  }

  return (
    <>
      <HeadingForm>
        {dictionary('Heading.form_login')}
        <br />
        {dictionary('Heading.form_login_two')}
      </HeadingForm>
      <Form {...form}>
        <Stack asChild>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="Identifier"
              render={({ field }) => (
                <FormItem className="w-full">
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
            <FormField
              control={form.control}
              name="Password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <ModernInput
                      placeholder={dictionary('Input.Password.placeholder')}
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormSubmit>
              {dictionary('Button.log_in')}
            </FormSubmit>
            <Button href={Routes.Global.ForgotPassword} bgColor="ghostInteractiveSecondary" height="lg">
              {dictionary('Button.forgot_password')}
            </Button>
            <Text align="center" color="secondary" weight="medium" wrap="balance">
              {dictionary('Paragraph.dont_have_account')}
              {' '}
              <Link href={Routes.Guest.Register} text={{ underline: true, color: 'primary' }}>
                {dictionary('Button.sign_up_free')}
              </Link>
            </Text>
          </form>
        </Stack>
      </Form>
      <Text size="sm" align="center" color="secondary" wrap="balance-res">
        {dictionary('Helpers.Form.by_continuing')}
        {' '}
        <Link
          href={Routes.Global.Legal.Terms}
          text={{ underline: true, color: 'primary', weight: 'medium' }}
        >
          {dictionary('Helpers.Form.terms_of_service')}
        </Link>
        {' '}
        {dictionary('Helpers.Form.and')}
        {' '}
        <Link
          href={Routes.Global.Legal.Privacy}
          text={{ underline: true, color: 'primary', weight: 'medium' }}
        >
          {dictionary('Helpers.Form.privacy_policy')}
        </Link>
        .
      </Text>
    </>
  );
};
