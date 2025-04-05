'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';
import * as React from 'react';

// noinspection ES6PreferShortImport
import { separatorVariants } from './Separator.variants';

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
