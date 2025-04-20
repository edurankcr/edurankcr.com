import { cva } from 'class-variance-authority';

export const avatarVariants = cva('object-cover', {
  variants: {
    size: {
      sm: 'min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px]',
      md: 'min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px]',
    },
    variant: {
      circle: 'rounded-full',
      square: 'rounded-md',
    },
  },
  defaultVariants: {
    size: 'sm',
    variant: 'circle',
  },
});
