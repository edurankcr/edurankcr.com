'use client';

import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

import { textVariants } from './Text.variants';

type TextProps = {
  asChild?: boolean;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & ComponentProps<'p'> & VariantProps<typeof textVariants>;

const Text: FC<TextProps> = memo(({
  asChild,
  as: Tag = 'p',
  className,
  children,
  align,
  color,
  size,
  truncate,
  underline,
  weight,
  wrap,
  ...props
}) => {
  const Comp = asChild ? Slot : Tag;

  return (
    <Comp
      className={cx(textVariants({
        align,
        color,
        size,
        truncate,
        underline,
        weight,
        wrap,
      }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
});

Text.displayName = 'Text';

export { Text };
