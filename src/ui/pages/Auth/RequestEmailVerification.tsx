// noinspection ES6PreferShortImport

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useTranslations } from 'use-intl';
import type { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormSubmit,
  Input,
  Link,
  Stack,
  Text,
  useRouter,
} from '@/components';
import { AppRoutes } from '@/constants';
import { postRequestEmailVerification } from '@/services';
import { EmailValidation } from '@/validations';

import { FormCheckSpam } from '../../blocks/Form';
import { HeadingForm } from '../../blocks/Heading';

export const RequestEmailVerification = () => {
  const dictionary = useTranslations('UI');
  const router = useRouter();

  const form = useForm<z.infer<typeof EmailValidation>>({
    resolver: zodResolver(EmailValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof EmailValidation>) {
    const { Email } = values;

    try {
      await postRequestEmailVerification(Email);
      form.reset();
      router.push(AppRoutes.Guest.Email.Sent);
    } catch (error: any) {
      const { response } = error;
      switch (response.status) {
        case 404:
          form.setError('Email', {
            type: 'manual',
            message: dictionary('Errors.User.404'),
          });
          break;
        case 409:
          switch (response.data.code) {
            case 'user.EmailAlreadyConfirmed':
              form.setError('Email', {
                type: 'manual',
                message: dictionary('Errors.User.EmailAlreadyConfirmed'),
              });
              break;
            case 'Token.AlreadyExists':
              form.setError('Email', {
                type: 'manual',
                message: dictionary('Errors.Token.AlreadyExists'),
              });
              break;
            default:
              toast.error(dictionary('Errors.General.500'));
          }
          break;
        default:
          toast.error(dictionary('Errors.General.500'));
      }
    }
  }

  return (
    <>
      <Stack alignItems="center" gap="sm">
        <HeadingForm>
          {dictionary('Heading.form_request_verification_email')}
        </HeadingForm>
        <Text align="center" color="secondary" wrap="balance" size="md-res">
          {dictionary('Paragraph.request_verification_email')}
        </Text>
      </Stack>
      <Form {...form}>
        <Stack asChild>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="Email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={dictionary('Input.Email.placeholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormSubmit>
              {dictionary('Button.resend_verification_email')}
            </FormSubmit>
            <Text align="center" color="secondary" weight="medium" wrap="balance">
              {dictionary('Paragraph.already_verified')}
              {' '}
              <Link href={AppRoutes.Guest.Login} text={{ underline: true, color: 'primary' }}>
                {dictionary('Button.log_in')}
              </Link>
            </Text>
          </form>
        </Stack>
      </Form>
      <FormCheckSpam dictionary={dictionary} />
    </>
  );
};
