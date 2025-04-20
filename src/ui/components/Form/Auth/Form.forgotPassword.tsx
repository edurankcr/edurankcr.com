'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
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

const FormForgotPassword = () => {
  const dictionary = useTranslations('Base');
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
      const { response } = error;
      switch (response.data.code) {
        case 'User.NotFound':
          form.setError('Identifier', {
            type: 'custom',
            message: dictionary('Errors.user_not_found'),
          });
          break;
        case 'User.NotConfirmed':
          form.setError('Identifier', {
            type: 'custom',
            message: dictionary('Errors.user_not_confirmed'),
          });
          break;
        case 'Token.AlreadyExists':
          form.setError('Identifier', {
            type: 'custom',
            message: dictionary('Errors.token_already_exists'),
          });
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
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormSubmit>
            {dictionary('Button.send_email')}
          </FormSubmit>
          <Text align="center" color="secondary" weight="medium" wrap="balance">
            {dictionary('Form.ForgotPassword.already_know_password')}
            {' '}
            <Link href={AppRoutes.Guest.Login} text={{ underline: true, color: 'primary' }}>
              {dictionary('Button.log_in')}
            </Link>
          </Text>
        </form>
      </Stack>
    </Form>
  );
};

export { FormForgotPassword };
