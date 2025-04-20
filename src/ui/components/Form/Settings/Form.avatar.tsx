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
import { deleteUserAvatar, putUserAvatar } from '@/services';
import { useUserStore } from '@/stores';
import type { ITranslations, IUser } from '@/types';
import { AvatarValidation } from '@/validations';

type FormAvatarProps = IUser & ITranslations;

const FormAvatar = (params: FormAvatarProps) => {
  const { user, dictionary } = params;

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

  function handleCancel() {
    setPreviewUrl(null);
    form.clearErrors('Avatar');
    form.reset();
  }

  async function handleRemove() {
    const setUser = useUserStore.getState().setUser;

    if (!user) {
      toast.error(dictionary('Errors.login_required'));
      return;
    }

    try {
      await deleteUserAvatar();
      setUser({ ...user, avatarUrl: null });
      toast.success(dictionary('Form.Avatar.remove_success'));
      setPreviewUrl(null);
    } catch (error: any) {
      const { response } = error;
      switch (response.data.code) {
        default:
          toast.error(dictionary('Errors.fetch_server'));
      }
    }
  }

  async function onSubmit(values: z.infer<typeof AvatarValidation>) {
    const { Avatar } = values;
    const setUser = useUserStore.getState().setUser;

    if (!user) {
      toast.error(dictionary('Errors.login_required'));
      return;
    }

    try {
      const response = await putUserAvatar(Avatar);
      setUser({ ...user, avatarUrl: response.data.avatarUrl });
      toast.success(dictionary('Form.Avatar.update_success'));
      setPreviewUrl(null);
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
      <Stack alignItems="end" asChild>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box flexGrow width="full" gap="section" className="flex-col md:flex-row flex">
            <Stack justifyContent="start" alignItems="center">
              <Avatar
                user={{
                  userName: user?.userName ?? '',
                  avatarUrl: previewUrl ?? user?.avatarUrl ?? null,
                }}
                width={128}
                height={128}
                className="rounded-full min-w-[128px] min-h-[128px] max-w-[128px] max-h-[128px]"
              />
              {user && user.avatarUrl && (
                <Text color="danger" weight="semibold" size="sm" className="cursor-pointer hover:underline" onClick={handleRemove}>
                  {dictionary('Button.remove')}
                </Text>
              )}
            </Stack>
            <Box flexGrow>
              <FormField
                name="Avatar"
                render={({ field: { onBlur, name } }) => (
                  <FormItem>
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
              onClick={() => handleCancel()}
              disabled={previewUrl === null}
              type="button"
            >
              {dictionary('Button.cancel')}
            </Button>
            <FormSubmit
              disabled={previewUrl === null}
              height="md"
              className="md:w-fit"
            >
              {dictionary('Button.update')}
            </FormSubmit>
          </Group>
        </form>
      </Stack>
    </Form>
  );
};

export { FormAvatar };
