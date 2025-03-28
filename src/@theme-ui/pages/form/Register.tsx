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
} from '@theme/components';
import { postRegister } from '@theme/services';
import { RegisterValidation } from '@theme/validations';
import { FormDisclaimers, HeadingForm } from '@theme-ui/components';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useTranslations } from 'use-intl';
import type { z } from 'zod';

import { Routes } from '@/routes';

export const Register = () => {
  const dictionary = useTranslations('UI');

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
    } catch (error: any) {
      const { response } = error;
      switch (response.status) {
        case 409:
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
          break;
        default:
          toast.error(dictionary('Errors.General.500'));
      }
    }
  }

  return (
    <>
      <Stack alignItems="center">
        <Logotype variant="black" type="icon" className="h-[48px]" />
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
      <FormDisclaimers dictionary={dictionary} />
    </>
  );
};
