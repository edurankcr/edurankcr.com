'use client';

import { Text } from '@components';
import { Link as RouterLink } from '@components/Navigation/Navigation';
import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

import { linkVariants } from './Link.variants';

type LinkProps = {
  text?: ComponentProps<typeof Text>;
} & ComponentProps<typeof RouterLink> & VariantProps<typeof linkVariants>;

const Link: FC<LinkProps> = memo(({
  className,
  userCursor,
  userSelect,
  href,
  target,
  rel,
  title,
  id,
  text,
  ...props
}) => {
  const computedRel = target === '_blank' ? 'noopener noreferrer' : rel;

  return (
    <Text
      {...text}
      asChild
    >
      <RouterLink
        className={cx(linkVariants({
          userCursor,
          userSelect,
        }), className)}
        href={href}
        target={target}
        rel={computedRel}
        title={title}
        id={id}
        {...props}
      >
        {props.children}
      </RouterLink>
    </Text>
  );
});

Link.displayName = 'Link';

export { Link };
