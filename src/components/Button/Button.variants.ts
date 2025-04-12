import { cva } from 'class-variance-authority';

export const buttonVariants = cva('inline-flex justify-center items-center btn disabled:bg-background-secondary disabled:text-black/25 disabled:cursor-not-allowed', {
  variants: {
    bgColor: {
      transparent: 'bg-transparent',
      white: 'bg-white',
      interactivePrimary: 'bg-interactive-primary text-white',
      interactiveSecondary: 'bg-background-secondary text-text-primary',
      ghostInteractiveSecondary: 'text-text-primary hover:bg-background-secondary',
    },
    borderColor: {
      transparent: 'border-transparent',
      white: 'border-white',
      black: 'border-black',
      primary: 'border-interactive-primary',
      interactive: 'border-border-interactive',
    },
    borderWidth: {
      0: 'border-0',
      1: 'border',
      2: 'border-2',
    },
    borderRadius: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
    },
    height: {
      sm: 'h-9',
      md: 'h-10',
      lg: 'h-12',
    },
    width: {
      sm: 'w-9',
      md: 'w-10',
      lg: 'w-12',
    },
    paddingX: {
      none: 'px-0',
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
    },
    isLoading: {
      true: 'opacity-85 pointer-events-none cursor-progress',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    borderColor: 'transparent',
    borderWidth: 1,
    fontWeight: 'bold',
    height: 'md',
    paddingX: 'md',
    borderRadius: 'full',
    isLoading: false,
  },
});
