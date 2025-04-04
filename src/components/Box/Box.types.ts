import type { Breakpoint } from '@utils/domHelpers';
import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

import type { boxVariants } from './Box.variants';

export type BoxProps = {
  as?: 'div' | 'section' | 'header' | 'footer' | 'main';
  asChild?: boolean;
  hiddenFrom?: Breakpoint;
  visibleFrom?: Breakpoint;
} & HTMLAttributes<HTMLElement> & VariantProps<typeof boxVariants>;
