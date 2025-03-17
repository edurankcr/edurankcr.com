import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

const textVariants = cva('', {
  variants: {
    color: {
      black: 'text-black',
      foreground: 'text-foreground',
      inherit: 'text-inherit',
      primary: 'text-primary',
      white: 'text-white',
    },
    size: {
      inherit: '',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
    },
  },
  defaultVariants: {
    color: 'inherit',
    size: 'inherit',
  },
});

type TextProps = {
  asChild?: boolean;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & ComponentProps<'p'> & VariantProps<typeof textVariants>;

const Text: FC<TextProps> = memo(({
  asChild,
  as: Tag = 'p',
  className,
  color,
  size,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : Tag;

  return (
    <Comp className={cx(textVariants({ color, size }), className)} {...props}>
      {children}
    </Comp>
  );
});

Text.displayName = 'Text';

export { Text };
