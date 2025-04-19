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
  Stack,
  Textarea,
} from '@/components';
import { putUserProfile } from '@/services';
import { useUserStore } from '@/stores';
import type { ITranslations, IUser } from '@/types';
import { BiographyValidation } from '@/validations';

type FormBiographyProps = IUser & ITranslations;

const FormBiography = (params: FormBiographyProps) => {
  const { user, dictionary } = params;

  const form = useForm<z.infer<typeof BiographyValidation>>({
    resolver: zodResolver(BiographyValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Biography: user!.biography ?? '',
    },
  });

  async function onSubmit(values: z.infer<typeof BiographyValidation>) {
    const { Biography } = values;
    const setUser = useUserStore.getState().setUser;

    if (!user) {
      toast.error(dictionary('Errors.login_required'));
      return;
    }

    try {
      await putUserProfile({ Biography });
      setUser({ ...user, biography: Biography });
      toast.success(dictionary('Form.Biography.update_success'));
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
            name="Biography"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder={dictionary('Input.Biography.placeholder')}
                    autoComplete="biography"
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

export { FormBiography };
