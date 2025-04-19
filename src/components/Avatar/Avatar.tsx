'use client';

import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

import type { User } from '@/types';
import { getAvatarSize, getAvatarUrl } from '@/utils';

import { Image } from '../Image';
// noinspection ES6PreferShortImport
import { avatarVariants } from './Avatar.variants';

type AvatarProps = {
  user: Pick<User, 'avatarUrl' | 'userName'>;
} & ComponentProps<typeof Image> & VariantProps<typeof avatarVariants>;

const Avatar: FC<AvatarProps> = memo(({
  className,
  user,
  size = 'sm',
  variant,
  ...props
}) => {
  return (
    <Image
      className={cx(avatarVariants({
        size,
        variant,
      }), className)}
      src={getAvatarUrl(user.avatarUrl, user.userName)}
      alt={user.userName}
      {...getAvatarSize(size)}
      {...props}
    />
  );
});

Avatar.displayName = 'Avatar';

export { Avatar };
