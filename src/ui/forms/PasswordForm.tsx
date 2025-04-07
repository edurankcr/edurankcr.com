'use client';

import { zodResolver } from '@hookform/resolvers/zod';
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
  Group,
  Input,
  Stack,
} from '@/components';
import { postChangePassword } from '@/services';
import type { ITranslations, IUser } from '@/types';
import { PasswordValidation } from '@/validations';

type PasswordFormProps = {} & ITranslations & IUser;

export const PasswordForm = ({ dictionary, user }: PasswordFormProps) => {
  const form = useForm<z.infer<typeof PasswordValidation>>({
    resolver: zodResolver(PasswordValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      CurrentPassword: '',
      NewPassword: '',
      ConfirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof PasswordValidation>) {
    const { CurrentPassword, NewPassword } = values;

    if (!user) {
      toast.error(dictionary('Errors.Auth.LoginRequired'));
      return;
    }

    try {
      await postChangePassword(CurrentPassword, NewPassword);
      toast.success(dictionary('Paragraph.profile_data_updated'));
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        case 'Auth.InvalidCred':
          form.setError('CurrentPassword', {
            type: 'manual',
            message: dictionary('Errors.Auth.InvalidCred'),
          });
          break;
        default:
          toast.error(dictionary('Errors.General.500'));
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
            name="CurrentPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder={dictionary('Input.CurrentPassword.placeholder')}
                    autoComplete="new-password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Group flexWrap="nowrap" overflow="visible" alignItems="start">
            <FormField
              control={form.control}
              name="NewPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder={dictionary('Input.NewPassword.placeholder')}
                      autoComplete="new-password"
                      type="password"
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
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder={dictionary('Input.ConfirmPassword.placeholder')}
                      autoComplete="new-password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Group>
          <FormSubmit height="md" className="md:w-fit">
            {dictionary('Button.save')}
          </FormSubmit>
        </form>
      </Stack>
    </Form>
  );
};
