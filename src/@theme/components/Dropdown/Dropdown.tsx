'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cx } from 'class-variance-authority';
import * as React from 'react';

import { Box } from '../Box';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuContent = ({
  ref,
  className,
  sideOffset = 6,
  align = 'end',
  ...props
}: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      align={align}
      className={cx(
        'z-50 min-w-[320px] overflow-hidden rounded-md border bg-menu-background border-menu-border p-3 text-menu-color shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuAlt = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Box> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <Box
    ref={ref}
    className={cx(
      '-m-3 mt-4 bg-menu-background-alt p-3 text-menu-color',
      className,
    )}
    {...props}
  />
);

const DropdownMenuItem = ({ ref, className, inset, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
} & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cx(
      'relative flex cursor-default select-none items-center gap-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuLabel = ({ ref, className, readonly, inset, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
  readonly?: boolean;
} & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cx(
      'text-sm font-semibold',
      readonly && 'sr-only',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cx('-mx-4 my-4 h-px bg-menu-border', className)}
    {...props}
  />
);

export {
  DropdownMenu,
  DropdownMenuAlt,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
};
