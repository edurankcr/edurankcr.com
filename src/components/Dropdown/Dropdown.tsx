'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cx } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, Ref } from 'react';

import { Link as RouterLink } from '../Navigation/Navigation';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

type DropdownMenuContentProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
  ref?: Ref<HTMLDivElement> | null;
};

const DropdownMenuContent = ({
  ref,
  className,
  sideOffset = 12,
  align = 'end',
  ...props
}: DropdownMenuContentProps) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      align={align}
      className={cx(
        'z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md bg-white p-1 text-text-primary shadow-200',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]',
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
);

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  href?: string;
  ref?: Ref<HTMLDivElement> | null;
};

const DropdownMenuItem = ({
  ref,
  className,
  inset,
  href,
  ...props
}: DropdownMenuItemProps) => {
  const Component = (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cx(
        'hover:bg-background-primary-hover relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 cursor-pointer',
        inset && 'pl-8',
        className,
      )}
      {...props}
    />
  );

  if (href) {
    return (
      <RouterLink href={href} className="w-full">
        {Component}
      </RouterLink>
    );
  }

  return Component;
};

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
  ref?: Ref<HTMLDivElement> | null;
};

const DropdownMenuLabel = ({
  ref,
  className,
  inset,
  ...props
}: DropdownMenuLabelProps) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cx(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
);

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & {
  ref?: Ref<HTMLDivElement> | null;
};

const DropdownMenuSeparator = ({
  ref,
  className,
  ...props
}: DropdownMenuSeparatorProps) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cx('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
);

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
};
