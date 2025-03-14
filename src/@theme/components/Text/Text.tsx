import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC, ReactNode } from 'react';

import {Slot} from "@radix-ui/react-slot";

const textVariants = cva('', {
  variants: {
    color: {
      'inherit': 'text-inherit',
      'primary': 'text-primary',
      'white': 'text-white',
      'black': 'text-black',
      'foreground': 'text-foreground',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    color: 'inherit',
    size: 'md',
  },
});

type TextProps = {
  asChild?: boolean;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & ComponentProps<'p'> & VariantProps<typeof textVariants>;

const Text: FC<TextProps> = ({
  asChild,
  as: Tag = 'p',
  className,
  color,
  size,
  id,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : Tag;
  const buttonProps = {
    id,
    ...props,
  };
  return (
    <Comp className={cx(textVariants({
      className,
      color,
      size,
    }), className)} {...buttonProps}>
      {children}
    </Comp>
  );
};

Text.displayName = 'Text';

export { Text };
