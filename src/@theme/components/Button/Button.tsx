import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';
import { memo } from 'react';

const buttonVariants = cva('', {
  variants: {
    borderColor: {
      transparent: 'border-transparent',
      white: 'border-white',
      black: 'border-black',
      interactive: 'border-border-interactive',
    },
    borderWidth: {
      0: 'border-0',
      1: 'border',
      2: 'border-2',
    },
    borderRadius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    height: {
      sm: 'h-9',
      md: 'h-10',
      lg: 'h-12',
    },
    paddingX: {
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
    },
  },
  defaultVariants: {
    borderColor: 'transparent',
    borderWidth: 1,
    fontWeight: 'bold',
    height: 'md',
    paddingX: 'md',
    borderRadius: 'full',
  },
});

type ButtonProps = {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
} & ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

const Button = memo<ButtonProps>(({
  className,
  leftSection,
  rightSection,
  type = 'button',
  borderColor,
  borderRadius,
  borderWidth,
  fontWeight,
  height,
  paddingX,
  ...props
}) => {
  return (
    <button
      type={type}
      className={cx(buttonVariants({
        borderColor,
        borderRadius,
        borderWidth,
        fontWeight,
        height,
        paddingX,
      }), className)}
      {...props}
    >
      {leftSection && <span className="me-3">{leftSection}</span>}
      {props.children}
      {rightSection && <span className="ms-3">{rightSection}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
