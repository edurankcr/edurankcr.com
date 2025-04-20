import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { FC } from 'react';
import * as React from 'react';
import { memo } from 'react';

// noinspection ES6PreferShortImport
import { badgeVariants } from './Badge.variants';

export type BadgeProps = {} & React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;

const Badge: FC<BadgeProps> = memo(({
  className,
  variant,
  ...props
}) => (
  <div className={cx(badgeVariants({ variant }), className)} {...props} />
));

Badge.displayName = 'Badge';

export { Badge };
