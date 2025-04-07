'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

import {
  Avatar,
  Box,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormSubmit,
  Group,
  InputUploadArea,
  Stack,
  Text,
} from '@/components';
import { putUserAvatar } from '@/services';
import { useUserStore } from '@/stores';
import type { ITranslations, IUser } from '@/types';
import { AvatarValidation } from '@/validations';

type AvatarFormProps = {} & ITranslations & IUser;

export const AvatarForm = ({ dictionary, User }: AvatarFormProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const form = useForm<z.infer<typeof AvatarValidation>>({
    resolver: zodResolver(AvatarValidation),
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    defaultValues: {
      Avatar: undefined,
    },
  });

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    const result = AvatarValidation.safeParse({ Avatar: file });

    if (!result.success) {
      const errorMessage = result.error.formErrors.fieldErrors.Avatar?.[0] ?? 'Invalid file.';
      form.setError('Avatar', {
        type: 'manual',
        message: errorMessage,
      });
      setPreviewUrl(null);
      return;
    }

    if (!file) {
      return;
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    form.clearErrors('Avatar');
    form.setValue('Avatar', file);
  }

  async function onSubmit(values: z.infer<typeof AvatarValidation>) {
    const { Avatar } = values;
    const setUser = useUserStore.getState().setUser;

    if (!User) {
      toast.error(dictionary('Errors.Auth.LoginRequired'));
      return;
    }

    try {
      const response = await putUserAvatar(Avatar);
      setUser({ ...User, avatarUrl: response.data.avatarUrl });
      toast.success(dictionary('Paragraph.profile_data_updated'));
      setPreviewUrl(null);
    } catch (error: any) {
      console.error('Error updating user data:', error);
      toast.error(dictionary('Errors.General.500'));
    }
  }

  return (
    <Form {...form}>
      <Stack alignItems="end" asChild>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box flexGrow width="full" gap="section" className="flex-col md:flex-row flex">
            <Stack justifyContent="start" alignItems="center">
              <Avatar
                User={{
                  UserName: User?.userName ?? '',
                  AvatarUrl: previewUrl ?? User?.avatarUrl ?? null,
                }}
                width={128}
                height={128}
                className="rounded-full min-w-[128px] min-h-[128px] max-w-[128px] max-h-[128px]"
              />
              <Text color="danger" weight="semibold" size="sm" className="cursor-pointer hover:underline">
                {dictionary('Button.delete')}
              </Text>
            </Stack>
            <Box flexGrow>
              <FormField
                name="Avatar"
                render={({ field: { onBlur, name } }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <InputUploadArea
                        id="avatar"
                        name={name}
                        onBlur={onBlur}
                        onChange={e => handleChange(e)}
                        labelBoldText={dictionary('Input.Avatar.placeholder_bold')}
                        labelText={dictionary('Input.Avatar.placeholder')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Box>
          </Box>
          <Group preventGrowOverflow={false} justifyContent="end" alignItems="center" gap="sm">
            <Button
              bgColor="ghostInteractiveSecondary"
              className="cursor-pointer"
              onClick={() => setPreviewUrl(null)}
              type="button"
            >
              {dictionary('Button.reset')}
            </Button>
            <FormSubmit
              disabled={previewUrl === null}
              height="md"
              className="md:w-fit"
            >
              {dictionary('Button.save')}
            </FormSubmit>
          </Group>
        </form>
      </Stack>
    </Form>
  );
};
