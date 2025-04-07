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

type EmailFormProps = {} & ITranslations & IUser;

export const EmailForm = ({ dictionary, User }: EmailFormProps) => {
  const [disabled, setDisabled] = useState(User?.newEmail !== null);

  const form = useForm<z.infer<typeof EmailValidation>>({
    resolver: zodResolver(EmailValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Email: User?.newEmail || '',
    },
  });

  async function onSubmit(values: z.infer<typeof EmailValidation>) {
    const { Email } = values;
    const setUser = useUserStore.getState().setUser;

    if (!User) {
      toast.error(dictionary('Errors.Auth.LoginRequired'));
      return;
    }

    if (disabled) {
      try {
        await deleteRequestEmailChange();
        setUser({ ...User, newEmail: null });
        form.reset({ Email: '' });
        setDisabled(false);
        toast.success(dictionary('Paragraph.email_change_cancelled'));
      } catch (error: any) {
        const { response } = error;
        switch (response.data.code) {
          default:
            toast.error(dictionary('Errors.General.500'));
        }
      }
      return;
    }

    try {
      await putRequestEmailChange(Email);
      setDisabled(true);
      setUser({ ...User, newEmail: Email });
      toast.success(dictionary('Paragraph.check_email_to_confirm'));
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        case 'User.EmailTaken':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.User.EmailTaken'),
          });
          break;
        case 'User.EmailCurrentInUse':
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.User.EmailCurrentInUse'),
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
            {disabled ? dictionary('Button.cancel') : dictionary('Button.save')}
          </FormSubmit>
        </form>
      </Stack>
    </Form>
  );
};
