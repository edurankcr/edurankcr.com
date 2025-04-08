import { cva } from 'class-variance-authority';

export const separatorVariants = cva('', {
  variants: {
    bgColor: {
      white: 'bg-white',
      interactive: 'bg-border-interactive',
    },
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
    shrink: {
      true: 'shrink-0',
      false: '',
    },
  },
  defaultVariants: {
    bgColor: 'white',
    orientation: 'horizontal',
    shrink: true,
  },
});
