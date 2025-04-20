import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center rounded-lg border font-medium transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default: '',
        secondary: 'border-border-separator text-text-secondary',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-0.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);
