import { cva } from 'class-variance-authority';

export const separatorVariants = cva('shrink-0', {
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
