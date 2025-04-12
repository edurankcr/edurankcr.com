import { cva } from 'class-variance-authority';

export const textVariants = cva('', {
  variants: {
    align: {
      start: 'text-start',
      center: 'text-center',
    },
    color: {
      inherit: 'text-inherit',
      black: 'text-black',
      white: 'text-white',
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
      neon: 'text-brand-neon',
      danger: 'text-text-error',
    },
    size: {
      'inherit': '',
      'lg': 'text-lg',
      'md': 'text-base',
      'sm': 'text-sm',
      'xs': 'text-xs',
      'md-res': 'text-sm md:text-base',
      '300': 'text-300',
      '300-res': 'text-200 md:text-300',
      '400': 'text-400',
      '400-res': 'text-400 md:text-400-responsive',
      '500': 'text-500',
      '500-res': 'text-400 md:text-500-responsive',
      '600': 'text-600',
      '600-res': 'text-400 md:text-600-responsive',
      '700-res': 'text-600 md:text-700-responsive',
    },
    truncate: {
      true: 'truncate',
    },
    underline: {
      true: 'underline',
    },
    wrap: {
      'base': 'text-wrap',
      'nowrap': 'text-nowrap',
      'balance': 'text-balance',
      'pretty': 'text-pretty',
      'balance-res': 'text-pretty md:text-balance',
    },
    weight: {
      inherit: '',
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
  },
  defaultVariants: {
    color: 'inherit',
    size: 'inherit',
  },
});
