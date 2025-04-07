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
import { putUserProfile } from '@/services';
import { useUserStore } from '@/stores';
import type { ITranslations, IUser } from '@/types';
import { NameValidation } from '@/validations';

type LegalNameFormProps = {} & ITranslations & IUser;

export const NameForm = ({ dictionary, user }: LegalNameFormProps) => {
  const form = useForm<z.infer<typeof NameValidation>>({
    resolver: zodResolver(NameValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Name: user?.name || '',
      LastName: user?.lastName || '',
    },
  });

  async function onSubmit(values: z.infer<typeof NameValidation>) {
    const { Name, LastName } = values;
    const setUser = useUserStore.getState().setUser;

    if (!user) {
      toast.error(dictionary('Errors.Auth.LoginRequired'));
      return;
    }

    try {
      await putUserProfile({ Name, LastName });
      setUser({ ...user, name: Name, lastName: LastName });
      toast.success(dictionary('Paragraph.profile_data_updated'));
    } catch (error: any) {
      console.error('Error updating user data:', error);
      toast.error(dictionary('Errors.General.500'));
    }
  }

  return (
    <Form {...form}>
      <Stack asChild>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Group flexWrap="nowrap" overflow="visible">
            <FormField
              control={form.control}
              name="Name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder={dictionary('Input.Name.placeholder')}
                      autoComplete="name"
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
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder={dictionary('Input.LastName.placeholder')}
                      autoComplete="family-name"
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
