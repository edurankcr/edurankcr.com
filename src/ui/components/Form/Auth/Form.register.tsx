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
import { postRegister, postRequestEmailVerification } from '@/services';
import { RegisterValidation } from '@/validations';

const FormRegister = () => {
  const dictionary = useTranslations('Base');
  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterValidation>>({
    resolver: zodResolver(RegisterValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Name: '',
      LastName: '',
      UserName: '',
      Email: '',
      BirthDate: '',
      Password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterValidation>) {
    const { Name, LastName, UserName, Email, Password, BirthDate } = values;

    try {
      await postRegister(Name, LastName, UserName, Email, Password, new Date(BirthDate));
      try {
        await postRequestEmailVerification(Email);
      } catch {
        router.push(AppRoutes.Guest.Email.Request);
        toast.error(dictionary('Errors.send_email'));
      }
      router.push(AppRoutes.Guest.Email.Sent);
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        case 'User.DuplicateEmail':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.user_email_taken'),
          });
          break;
        case 'User.DuplicateUserName':
          form.setError('UserName', {
            type: 'manual',
            message: dictionary('Errors.user_username_taken'),
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
            name="Name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={dictionary('Input.Name.placeholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="LastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={dictionary('Input.LastName.placeholder')}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="UserName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={dictionary('Input.UserName.placeholder')}
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
          <FormField
            control={form.control}
            name="BirthDate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={dictionary('Input.BirthDate.placeholder')}
                    type="date"
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
          <Text align="center" color="secondary" weight="medium" wrap="balance">
            {dictionary('Form.Register.already_have_an_account')}
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

export { FormRegister };
