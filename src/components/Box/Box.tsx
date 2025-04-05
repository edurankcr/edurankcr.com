'use client';

import { Slot } from '@radix-ui/react-slot';
import { cx } from 'class-variance-authority';
import { memo } from 'react';

import { getVisibilityClasses } from '@/utils';

import type { BoxProps } from './Box.types';
import { boxVariants } from './Box.variants';

const Box = memo<BoxProps>(({
  className,
  asChild,
  hiddenFrom,
  visibleFrom,
  as: Tag = 'div',
  alignItems,
  animation,
  bgBackground,
  boxShadow,
  container,
  display,
  flexDirection,
  flexGrow,
  flexWrap,
  fontAlign,
  fontColor,
  fontSize,
  fontWeight,
  gap,
  height,
  justifyContent,
  marginX,
  marginY,
  maxWidth,
  minHeight,
  overflow,
  padding,
  paddingX,
  paddingY,
  pointerEvents,
  position,
  rounded,
  transition,
  transitionDuration,
  transitionTimingFunction,
  width,
  zIndex,
  ...props
}) => {
  const Comp = asChild ? Slot : Tag;
  const { hiddenClass, visibleClass } = getVisibilityClasses('flex', hiddenFrom, visibleFrom);

  return (
    <Comp
      className={cx(boxVariants({
        alignItems,
        animation,
        bgBackground,
        boxShadow,
        container,
        display,
        flexDirection,
        flexGrow,
        flexWrap,
        fontAlign,
        fontColor,
        fontSize,
        fontWeight,
        gap,
        height,
        justifyContent,
        marginX,
        marginY,
        maxWidth,
        minHeight,
        overflow,
        padding,
        paddingX,
        paddingY,
        pointerEvents,
        position,
        rounded,
        transition,
        transitionDuration,
        transitionTimingFunction,
        width,
        zIndex,
      }), hiddenClass, visibleClass, className)}
      {...props}
    />
  );
});

Box.displayName = 'Box';

export { Box };
