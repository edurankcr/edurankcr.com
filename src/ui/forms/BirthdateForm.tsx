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
import { BirthDateValidation } from '@/validations';

type BirthdateFormProps = {} & ITranslations & IUser;

export const BirthdateForm = ({ dictionary, User }: BirthdateFormProps) => {
  const form = useForm<z.infer<typeof BirthDateValidation>>({
    resolver: zodResolver(BirthDateValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      BirthDate: new Date(User?.birthDate || Date.now()).toISOString().split('T')[0],
    },
  });

  async function onSubmit(values: z.infer<typeof BirthDateValidation>) {
    const { BirthDate } = values;
    const setUser = useUserStore.getState().setUser;

    if (!User) {
      toast.error(dictionary('Errors.Auth.LoginRequired'));
      return;
    }

    try {
      await putUserProfile({ BirthDate: new Date(BirthDate) });
      setUser({ ...User, birthDate: BirthDate });
      toast.success(dictionary('Paragraph.profile_data_updated'));
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
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
            name="BirthDate"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder={dictionary('Input.BirthDate.placeholder')}
                    autoComplete="off"
                    type="date"
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
