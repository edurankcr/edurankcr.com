import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';

const boxVariants = cva('', {
  variants: {
    align: {
      start: 'items-start',
      center: 'items-center',
      stretch: 'items-stretch',
      end: 'items-end',
    },
    display: {
      flex: 'flex',
    },
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
  },
});

type BoxProps = {} & ComponentProps<'div'> & VariantProps<typeof boxVariants>;

const Box: FC<BoxProps> = ({ className, align, display, direction, gap, justify, ...props }) => {
  return <div className={cx(boxVariants({ align, display, direction, gap, justify }), className)} {...props} />;
};

Box.displayName = 'Box';

export { Box };
