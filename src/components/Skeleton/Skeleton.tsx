'use client';

import { cx } from 'class-variance-authority';
import type { FC, HTMLAttributes } from 'react';
import { memo } from 'react';

type SkeletonProps = {} & HTMLAttributes<HTMLDivElement>;

const Skeleton: FC<SkeletonProps> = memo(({
  className,
  ...props
}) => (
  <div
    className={cx(
      'animate-pulse bg-background-secondary',
      className,
    )}
    {...props}
  />
));

Skeleton.displayName = 'Skeleton';

export { Skeleton };
