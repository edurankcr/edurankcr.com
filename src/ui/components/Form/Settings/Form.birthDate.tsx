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

type FormBirthdateProps = IUser & ITranslations;

const FormBirthdate = (params: FormBirthdateProps) => {
  const { user, dictionary } = params;

  const form = useForm<z.infer<typeof BirthDateValidation>>({
    resolver: zodResolver(BirthDateValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      DateOfBirth: new Date(user?.birthDate || Date.now()).toISOString().split('T')[0],
    },
  });

  async function onSubmit(values: z.infer<typeof BirthDateValidation>) {
    const { DateOfBirth } = values;
    const setUser = useUserStore.getState().setUser;

    if (!user) {
      toast.error(dictionary('Errors.login_required'));
      return;
    }

    try {
      await putUserProfile({ BirthDate: new Date(DateOfBirth) });
      setUser({ ...user, birthDate: DateOfBirth });
      toast.success(dictionary('Form.BirthDate.update_success'));
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
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
            name="DateOfBirth"
            render={({ field }) => (
              <FormItem>
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
            {dictionary('Button.update')}
          </FormSubmit>
        </form>
      </Stack>
    </Form>
  );
};

export { FormBirthdate };
