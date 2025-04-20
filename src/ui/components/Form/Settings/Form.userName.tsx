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

type FormUserNameProps = IUser & ITranslations;

const FormUserName = (params: FormUserNameProps) => {
  const { user, dictionary } = params;

  const form = useForm<z.infer<typeof UsernameValidation>>({
    resolver: zodResolver(UsernameValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      UserName: user!.userName,
    },
  });

  async function onSubmit(values: z.infer<typeof UsernameValidation>) {
    const { UserName } = values;
    const setUser = useUserStore.getState().setUser;

    if (!user) {
      toast.error(dictionary('Errors.login_required'));
      return;
    }

    if (user.userName === UserName) {
      form.setError('UserName', {
        type: 'manual',
        message: dictionary('Errors.user_same_username'),
      });
      return;
    }

    try {
      await putUserProfile({ UserName });
      setUser({ ...user, userName: UserName });
      toast.success(dictionary('Form.UserName.update_success'));
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        case 'User.SameUserName':
          form.setError('UserName', {
            type: 'manual',
            message: dictionary('Errors.user_same_username'),
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
          <FormSubmit height="md" className="md:w-fit">
            {dictionary('Button.update')}
          </FormSubmit>
        </form>
      </Stack>
    </Form>
  );
};

export { FormUserName };
