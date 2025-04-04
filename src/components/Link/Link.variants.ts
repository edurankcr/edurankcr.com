import { cva } from 'class-variance-authority';

export const linkVariants = cva('w-fit', {
  variants: {
    userCursor: { pointer: 'cursor-pointer' },
    userSelect: { none: 'select-none' },
  },
  defaultVariants: { userCursor: 'pointer' },
});
