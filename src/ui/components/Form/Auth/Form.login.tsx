'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

import {
  Button,
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
import { postAuthentication, saveTokenCookie } from '@/services';
import { useUserStore } from '@/stores';
import { LoginValidation } from '@/validations';

const FormLogin = () => {
  const router = useRouter();
  const dictionary = useTranslations('Base');

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
    const setUser = useUserStore.getState().setUser;

    try {
      const response = await postAuthentication(Identifier, Password);
      const { data } = response;
      const { token, ...userWithoutToken } = data;
      setUser(userWithoutToken);
      await saveTokenCookie(token);
      router.push(AppRoutes.Global.Home);
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        case 'User.NotFound':
          form.setError('Identifier', {
            type: 'manual',
            message: dictionary('Errors.user_not_found'),
          });
          break;
        case 'Auth.InvalidCredentials':
          form.setError('Identifier', {
            type: 'manual',
            message: dictionary('Errors.user_invalid_credentials'),
          });
          break;
        case 'User.NotConfirmed':
          form.setError('Identifier', {
            type: 'manual',
            message: dictionary.rich('Errors.user_email_not_confirmed', {
              link: (chunks: any) => (
                <Link
                  href={AppRoutes.Guest.Email.Request}
                  text={{ underline: true, color: 'neon' }}
                >
                  {chunks}
                </Link>
              ),
            }),
          } as any);
          break;
        default:
          toast.error(dictionary('Errors.fetch_server'));
      }
    }
  }

  return (
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
                    autoComplete="username"
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
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={dictionary('Input.Password.placeholder')}
                    type="password"
                    autoComplete="current-password"
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
          <Button href={AppRoutes.Global.Password.Request} bgColor="ghostInteractiveSecondary" height="lg">
            {dictionary('Form.Login.forgot_password')}
          </Button>
          <Text align="center" color="secondary" weight="medium" wrap="balance">
            {dictionary('Form.Login.dont_have_account')}
            {' '}
            <Link href={AppRoutes.Guest.Register} text={{ underline: true, color: 'primary' }}>
              {dictionary('Form.Login.sign_up')}
            </Link>
          </Text>
        </form>
      </Stack>
    </Form>
  );
};

export { FormLogin };
