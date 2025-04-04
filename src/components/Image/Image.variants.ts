import { cva } from 'class-variance-authority';

export const imageVariants = cva('', {
  variants: {
    select: { none: 'select-none' },
    pointer: { none: 'pointer-events-none' },
  },
  defaultVariants: {
    select: 'none',
    pointer: 'none',
  },
});
