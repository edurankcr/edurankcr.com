'use client';

import { IconLoader2 } from '@tabler/icons-react';
import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';
import { memo } from 'react';

import { Link as RouterLink } from '../Navigation/Navigation';
// noinspection ES6PreferShortImport
import { buttonVariants } from './Button.variants';

type CommonProps = {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
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
  isLoading,
  bgColor,
  borderColor,
  borderRadius,
  borderWidth,
  fontWeight,
  height,
  width,
  paddingX,
  href,
  ...props
}) => {
  const classes = cx(
    buttonVariants({ isLoading, bgColor, borderColor, borderRadius, borderWidth, fontWeight, height, width, paddingX }),
    className,
  );

  const contentLoading = (
    <>
      <IconLoader2 className="spinner animate-spin" />
    </>
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
      {isLoading ? contentLoading : content}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
