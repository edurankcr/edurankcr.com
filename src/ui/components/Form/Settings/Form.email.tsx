'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
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
  Stack,
} from '@/components';
import { deleteRequestEmailChange, putRequestEmailChange } from '@/services';
import { useUserStore } from '@/stores';
import type { ITranslations, IUser } from '@/types';
import { EmailValidation } from '@/validations';

type FormEmailProps = IUser & ITranslations;

const FormEmail = (params: FormEmailProps) => {
  const { user, dictionary } = params;

  const [disabled, setDisabled] = useState(user!.newEmail !== null);

  const form = useForm<z.infer<typeof EmailValidation>>({
    resolver: zodResolver(EmailValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Email: user?.newEmail || '',
    },
  });

  async function onSubmit(values: z.infer<typeof EmailValidation>) {
    const { Email } = values;
    const setUser = useUserStore.getState().setUser;

    if (!user) {
      toast.error(dictionary('Errors.Auth.LoginRequired'));
      return;
    }

    if (user.email === Email) {
      form.setError('Email', {
        type: 'manual',
        message: dictionary('Errors.user_email_current_in_use'),
      });
      return;
    }

    if (disabled) {
      try {
        await deleteRequestEmailChange();
        setUser({ ...user, newEmail: null });
        form.reset({ Email: '' });
        setDisabled(false);
        toast.success(dictionary('Form.Email.email_change_cancelled'));
      } catch (error: any) {
        const { response } = error;
        switch (response.data.code) {
          default:
            toast.error(dictionary('Errors.fetch_server'));
        }
      }
      return;
    }

    try {
      await putRequestEmailChange(Email);
      setDisabled(true);
      setUser({ ...user, newEmail: Email });
      toast.success(dictionary('Form.Email.update_success'));
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        case 'User.NotFound':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.user_not_found'),
          });
          break;
        case 'User.SameEmail':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.user_email_current_in_use'),
          });
          break;
        case 'User.DuplicateEmail':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.user_email_duplicate'),
          });
          break;
        case 'Token.AlreadyExists':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.user_email_verification_already_sent'),
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
              <FormItem className="w-full relative">
                <FormControl>
                  <Input
                    placeholder={dictionary('Input.NewEmail.placeholder')}
                    autoComplete="new-email"
                    type="email"
                    disabled={disabled}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormSubmit height="md" className="md:w-fit">
            {disabled ? dictionary('Button.cancel_verification') : dictionary('Button.update')}
          </FormSubmit>
        </form>
      </Stack>
    </Form>
  );
};

export { FormEmail };
