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
import { postRequestEmailVerification } from '@/services';
import { EmailValidation } from '@/validations';

const FormVerifyEmailRequest = () => {
  const dictionary = useTranslations('Base');
  const router = useRouter();

  const form = useForm<z.infer<typeof EmailValidation>>({
    resolver: zodResolver(EmailValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof EmailValidation>) {
    const { Email } = values;

    try {
      await postRequestEmailVerification(Email);
      form.reset();
      router.push(AppRoutes.Guest.Email.Sent);
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        case 'Token.AlreadyExists':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.token_already_exists'),
          });
          break;
        case 'User.NotFound':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.user_not_found'),
          });
          break;
        case 'User.AlreadyConfirmed':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.user_email_already_confirmed'),
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
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={dictionary('Input.Email.placeholder')}
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
            {dictionary('Form.VerifyEmailRequest.already_verified')}
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

export { FormVerifyEmailRequest };
