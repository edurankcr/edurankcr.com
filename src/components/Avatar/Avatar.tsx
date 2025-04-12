'use client';

import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

import { Image } from '../Image';
// noinspection ES6PreferShortImport
import { avatarVariants } from './Avatar.variants';

type AvatarProps = {
  user: {
    userName: string;
    avatarUrl?: string | null;
  };
} & ComponentProps<typeof Image> & VariantProps<typeof avatarVariants>;

const Avatar: FC<AvatarProps> = memo(({
  className,
  user,
  ...props
}) => {
  const getAvatarUrl = () => {
    if (user.avatarUrl) {
      return user.avatarUrl;
    }
    return `https://api.dicebear.com/9.x/thumbs/svg?seed=${user.userName}&radius=50&backgroundColor=abdae3`;
  };

  return (
    <Image
      className={cx(avatarVariants(), className)}
      src={getAvatarUrl()}
      alt={user.userName}
      width={48}
      height={48}
      {...props}
    />
  );
});

Avatar.displayName = 'Avatar';

export { Avatar };
