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
  Logotype,
  ModernInput,
  Stack,
  Text,
  useRouter,
} from '@theme/components';
import { postRegister, postRequestEmailVerification } from '@theme/services';
import { RegisterValidation } from '@theme/validations';
import { FormDisclaimer, HeadingForm } from '@theme-ui/components';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useTranslations } from 'use-intl';
import type { z } from 'zod';

import { Routes } from '@/routes';

export const Register = () => {
  const dictionary = useTranslations('UI');
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
        router.push(Routes.Guest.Email.Request);
        toast.error(dictionary('Errors.Email.ServerError'));
      }
      router.push(Routes.Guest.Email.Sent);
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        case 'User.EmailTaken':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.User.EmailTaken'),
          });
          break;
        case 'User.UsernameTaken':
          form.setError('UserName', {
            type: 'manual',
            message: dictionary('Errors.User.UserNameTaken'),
          });
          break;
        default:
          toast.error(dictionary('Errors.General.500'));
      }
    }
  }

  return (
    <>
      <Stack alignItems="center">
        <Logotype variant="black" type="icon" className="h-[48px] hidden md:block" />
        <HeadingForm>
          {dictionary('Heading.form_register')}
        </HeadingForm>
      </Stack>
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
                    <ModernInput
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
                    <ModernInput
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
                    <ModernInput
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
                    <ModernInput
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
                    <ModernInput
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
                <FormItem className="w-full">
                  <FormControl>
                    <ModernInput
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
              {dictionary('Paragraph.already_have_an_account')}
              {' '}
              <Link href={Routes.Guest.Login} text={{ underline: true, color: 'primary' }}>
                {dictionary('Button.log_in')}
              </Link>
            </Text>
          </form>
        </Stack>
      </Form>
      <FormDisclaimer dictionary={dictionary} />
    </>
  );
};
