import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { FC } from 'react';
import * as React from 'react';
import { memo } from 'react';

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        error: 'bg-background-error-weak border-border-error text-text-error [&>svg]:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type AlertProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

const Alert: FC<AlertProps> = memo(({
  ref,
  className,
  variant,
  ...props
}: AlertProps & {
  ref?: React.RefObject<HTMLDivElement | null>;
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

type AlertTitleProps = React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof alertVariants>;

const AlertTitle: FC<AlertTitleProps> = memo(({
  ref,
  className,
  ...props
}: AlertTitleProps & {
  ref?: React.RefObject<HTMLHeadingElement | null>;
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

type AlertDescriptionProps = React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof alertVariants>;

const AlertDescription: FC<AlertDescriptionProps> = memo(({
  ref,
  className,
  ...props
}: AlertDescriptionProps & {
  ref?: React.RefObject<HTMLParagraphElement | null>;
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
