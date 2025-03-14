import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC, ReactNode } from 'react';

import { Box } from '../Box';

const buttonVariants = cva('transition-colors duration-300 ease-in-out no-select inline-flex items-center group border-transparent', {
  variants: {
    color: {
      'primary': 'bg-primary',
      'white': 'bg-transparent border-white',
      'inverse-muted': 'bg-transparent data-[state=open]:bg-white-6 hover:bg-white-6 [&>span]:text-secondary hover:[&>span]:text-white [&[data-state=open]>span]:text-white',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    radius: {
      none: 'rounded-none',
      default: 'rounded-md',
      full: 'rounded-full',
    },
    size: {
      sm: 'h-[2.25rem] px-4',
      md: '',
      lg: 'h-12 px-4',
      xl: 'h-14 px-4',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      between: 'justify-between',
      end: 'justify-end',
    },
    fontWeight: {
      normal: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    fontColor: {
      white: 'text-white',
      secondary: 'text-secondary hover:text-white',
      muted: 'text-muted hover:text-white',
    },
    fontSize: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    borderWidth: {
      none: 'border-0',
      default: 'border',
      lg: 'border-2',
    },
  },
  defaultVariants: {
    color: 'primary',
    radius: 'full',
    size: 'md',
    justify: 'center',
    fontWeight: 'bold',
    fontColor: 'white',
    fontSize: 'md',
    borderWidth: 'default',
  },
});

type ButtonProps = {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
} & ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

const Button: FC<ButtonProps> = ({
  className,
  color,
  disabled,
  fullWidth,
  radius,
  size,
  justify,
  fontWeight,
  fontColor,
  fontSize,
  borderWidth,
  type = 'button',
  name,
  id,
  children,
  leftSection,
  rightSection,
  ...props
}) => {
  const buttonProps = {
    type,
    name,
    id,
    disabled,
    ...props,
  };
  return (
    <button
      className={cx(buttonVariants({
        className,
        color,
        disabled,
        fontColor,
        fontSize,
        fontWeight,
        fullWidth,
        justify,
        radius,
        size,
        borderWidth,
      }), className)}
      {...buttonProps}
    >
      {leftSection
        && (
          <Box
            as="span"
            className="relative me-3 transition duration-300"
            color="inherit"
          >
            {leftSection}
          </Box>
        )}
      {children}
      {rightSection
        && (
          <Box
            as="span"
            className="relative ms-3 transition duration-300 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          >
            {rightSection}
          </Box>
        )}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
