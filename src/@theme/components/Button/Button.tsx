import { Link as RouterLink } from '@theme/components/Navigation/Navigation';
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';
import { memo } from 'react';

const buttonVariants = cva('inline-flex justify-center items-center', {
  variants: {
    bgColor: {
      transparent: 'bg-transparent',
      white: 'bg-white',
      interactivePrimary: 'bg-interactive-primary text-white',
    },
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

type CommonProps = {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  className?: string;
  href?: string;
} & VariantProps<typeof buttonVariants>;

type ButtonAsButton = CommonProps & ComponentProps<'button'>;

type ButtonAsLink = CommonProps & ComponentProps<typeof RouterLink>;

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = memo<ButtonProps>(({
  leftSection,
  rightSection,
  className,
  bgColor,
  borderColor,
  borderRadius,
  borderWidth,
  fontWeight,
  height,
  paddingX,
  href,
  ...props
}) => {
  const classes = cx(
    buttonVariants({ bgColor, borderColor, borderRadius, borderWidth, fontWeight, height, paddingX }),
    className,
  );

  const content = (
    <>
      {leftSection && <span className="me-3">{leftSection}</span>}
      {'children' in props && props.children}
      {rightSection && <span className="ms-3">{rightSection}</span>}
    </>
  );

  if (href) {
    return (
      <RouterLink
        className={classes}
        {...(props as ComponentProps<typeof RouterLink>)}
        href={href}
      >
        {content}
      </RouterLink>
    );
  }

  return (
    <button
      type={(props as ComponentProps<'button'>).type || 'button'}
      className={classes}
      {...(props as ComponentProps<'button'>)}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
