'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cx } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { memo } from 'react';
import * as React from 'react';

type ProgressProps = ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;

const Progress: FC<ProgressProps> = memo(({ className, value, ...props }) => (
  <ProgressPrimitive.Root
    className={cx(
      'relative h-3 w-full overflow-hidden rounded-full bg-background-secondary',
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-interactive-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
