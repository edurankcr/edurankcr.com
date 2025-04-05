'use client';

import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { FC, HTMLAttributes, RefObject } from 'react';
import { memo } from 'react';

// noinspection ES6PreferShortImport
import { alertVariants } from './Alert.variants';

type AlertProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

const Alert: FC<AlertProps> = memo(({
  ref,
  className,
  variant,
  ...props
}: AlertProps & {
  ref?: RefObject<HTMLDivElement | null>;
}) => {
  return (

    <div
      ref={ref}
      role="alert"
      className={cx(alertVariants({ variant }), className)}
      {...props}
    />
  );
});

Alert.displayName = 'Alert';

type AlertTitleProps = HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof alertVariants>;

const AlertTitle: FC<AlertTitleProps> = memo(({
  ref,
  className,
  ...props
}: AlertTitleProps & {
  ref?: RefObject<HTMLHeadingElement | null>;
}) => {
  return (
    <h5
      ref={ref}
      className={cx('font-semibold font-300', className)}
      {...props}
    />
  );
});

AlertTitle.displayName = 'AlertTitle';

type AlertDescriptionProps = HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof alertVariants>;

const AlertDescription: FC<AlertDescriptionProps> = memo(({
  ref,
  className,
  ...props
}: AlertDescriptionProps & {
  ref?: RefObject<HTMLParagraphElement | null>;
}) => {
  return (
    <p
      ref={ref}
      className={cx('text-sm text-pretty', className)}
      {...props}
    />
  );
});

AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
