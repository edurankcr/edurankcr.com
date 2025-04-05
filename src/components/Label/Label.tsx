'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { ComponentPropsWithoutRef } from 'react';

// noinspection ES6PreferShortImport
import { labelVariants } from './Label.variants';

const Label = ({ ref, className, ...props }: ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants> & { ref?: any }) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cx(labelVariants(), className)}
    {...props}
  />
);

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
