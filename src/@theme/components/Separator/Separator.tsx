'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';
import * as React from 'react';

type SeparatorProps = ComponentProps<typeof SeparatorPrimitive.Root>;

const Separator: FC<SeparatorProps> = memo(({
  ref,
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cx(
      'shrink-0 bg-white',
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
      className,
    )}
    {...props}
  />
));

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
