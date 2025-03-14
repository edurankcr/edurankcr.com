import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';

import type { Breakpoint } from './visibilityUtils';
import { getVisibilityClasses } from './visibilityUtils';

const boxVariants = cva('', {
  variants: {
    color: {
      white: 'text-white',
      inherit: 'text-inherit',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      stretch: 'items-stretch',
      end: 'items-end',
    },
    display: {
      hidden: 'hidden',
      flex: 'flex',
    },
    grow: {
      true: 'grow',
      false: '',
    },
    preventGrowOverflow: {
      true: 'overflow-hidden',
      false: '',
    },
    wrap: {
      wrap: 'flex-wrap',
      nowrap: 'flex-nowrap',
    },
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    gap: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      between: 'justify-between',
      end: 'justify-end',
    },
    overflow: {
      text: 'overflow-ellipsis overflow-hidden whitespace-nowrap',
      auto: 'overflow-auto',
    },
    container: {
      true: 'container mx-auto',
      false: '',
    },
    height: {
      auto: 'h-auto',
      full: 'h-full',
      screen: 'h-dvh min-h-dvh',
    },
    zIndex: {
      5: 'z-5',
      10: 'z-10',
      20: 'z-20',
      30: 'z-30',
      40: 'z-40',
      50: 'z-50',
    },
    fontWeight: {
      normal: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    section: {
      true: 'section py-16',
      false: '',
    },
  },
});

type BoxProps = {
  as?: 'div' | 'header' | 'span' | 'footer' | 'section' | 'article' | 'nav' | 'main';
  asChild?: boolean;
  hiddenFrom?: Breakpoint;
  visibleFrom?: Breakpoint;
} & ComponentProps<'div'> & VariantProps<typeof boxVariants>;

const Box: FC<BoxProps> = ({
  className,
  asChild,
  hiddenFrom,
  visibleFrom,
  as: Tag = 'div',
  color,
  align,
  display,
  grow,
  preventGrowOverflow,
  wrap,
  direction,
  gap,
  justify,
  overflow,
  container,
  height,
  zIndex,
  fontWeight,
  section,
  ...props
}) => {
  const Comp = asChild ? Slot : Tag;
  const { hiddenClass, visibleClass } = getVisibilityClasses('flex', hiddenFrom, visibleFrom);
  return (
    <Comp
      className={cx(boxVariants({
        color,
        align,
        display,
        grow,
        preventGrowOverflow,
        wrap,
        direction,
        gap,
        justify,
        overflow,
        container,
        height,
        zIndex,
        fontWeight,
        section,
      }), hiddenClass, visibleClass, className)}
      {...props}
    />
  );
};

Box.displayName = 'Box';

export { Box };
