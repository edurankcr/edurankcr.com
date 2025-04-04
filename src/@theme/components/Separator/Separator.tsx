'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';
import * as React from 'react';

const separatorVariants = cva('shrink-0', {
  variants: {
    bgColor: {
      white: 'bg-white',
      interactive: 'bg-border-interactive',
    },
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
  },
  defaultVariants: {
    bgColor: 'white',
    orientation: 'horizontal',
  },
});

type SeparatorProps = ComponentProps<typeof SeparatorPrimitive.Root> & VariantProps<typeof separatorVariants>;

const Separator: FC<SeparatorProps> = memo(({
  ref,
  className,
  bgColor,
  orientation = 'horizontal',
  decorative = true,
  ...props
}) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cx(
      separatorVariants({ bgColor, orientation }),
      className,
    )}
    {...props}
  />
));

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
