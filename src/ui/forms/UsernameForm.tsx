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
  Input,
  Stack,
} from '@/components';
import { putUserProfile } from '@/services';
import { useUserStore } from '@/stores';
import type { ITranslations, IUser } from '@/types';
import { UsernameValidation } from '@/validations';

type UsernameFormProps = {} & ITranslations & IUser;

export const UsernameForm = ({ dictionary, User }: UsernameFormProps) => {
  const form = useForm<z.infer<typeof UsernameValidation>>({
    resolver: zodResolver(UsernameValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      UserName: User?.userName || '',
    },
  });

  async function onSubmit(values: z.infer<typeof UsernameValidation>) {
    const { UserName } = values;
    const setUser = useUserStore.getState().setUser;

    if (!User) {
      toast.error(dictionary('Errors.Auth.LoginRequired'));
      return;
    }

    try {
      await putUserProfile({ UserName });
      setUser({ ...User, userName: UserName });
      toast.success(dictionary('Paragraph.profile_data_updated'));
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
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
    <Form {...form}>
      <Stack asChild>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="UserName"
            render={({ field }) => (
              <FormItem className="w-full">
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
          <FormSubmit height="md" className="md:w-fit">
            {dictionary('Button.save')}
          </FormSubmit>
        </form>
      </Stack>
    </Form>
  );
};
