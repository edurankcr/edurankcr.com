// noinspection ES6PreferShortImport

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Stack,
} from '@/components';
import { postAddInstitute } from '@/services';
import { AddInstituteValidation } from '@/validations';

import { FormDisclaimer } from '../../blocks/Form';
import { HeadingForm } from '../../blocks/Heading';

export const AddInstitute = () => {
  const dictionary = useTranslations('UI');

  const form = useForm<z.infer<typeof AddInstituteValidation>>({
    resolver: zodResolver(AddInstituteValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Name: '',
      Url: '',
    },
  });

  async function onSubmit(values: z.infer<typeof AddInstituteValidation>) {
    const { Name, Type, Province, Url } = values;

    try {
      await postAddInstitute(Name, Number(Type), Number(Province), Url);
      toast.success(dictionary('Paragraph.success_add_institute'));
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        default:
          toast.error(dictionary('Errors.General.500'));
      }
    }
  }

  return (
    <>
      <HeadingForm className="md:pt-12">
        {dictionary('Heading.add_institute')}
      </HeadingForm>
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
                    <Input
                      placeholder={dictionary('Input.InstituteName.placeholder')}
                      autoComplete="scholarname"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Type"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={dictionary('Select.Type.placeholder')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">{dictionary('Select.Type.Options.0')}</SelectItem>
                      <SelectItem value="1">{dictionary('Select.Type.Options.1')}</SelectItem>
                      <SelectItem value="2">{dictionary('Select.Type.Options.2')}</SelectItem>
                      <SelectItem value="3">{dictionary('Select.Type.Options.3')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Province"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={dictionary('Select.Province.placeholder')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Array.from({ length: 7 }, (_, i) => i + 1).map(i => (
                        <SelectItem key={i} value={i.toString()}>
                          {dictionary(`Select.Province.Options.${i}` as any)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Url"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={dictionary('Input.Url.placeholder')}
                      autoComplete="scholarurl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormSubmit>
              {dictionary('Button.create')}
            </FormSubmit>
          </form>
        </Stack>
      </Form>
      <FormDisclaimer dictionary={dictionary} />
    </>
  );
};
