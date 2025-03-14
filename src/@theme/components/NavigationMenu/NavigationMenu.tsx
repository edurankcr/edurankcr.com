import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { IconChevronDown } from '@tabler/icons-react';
import { Stack } from '@theme/components';
import { cx } from 'class-variance-authority';
import * as React from 'react';

import { Button } from '../Button';

const NavigationMenuViewport = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <div className={cx('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cx(
        'origin-top-center relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-menu-border bg-menu-background text-menu-color shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
);
NavigationMenuViewport.displayName
  = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenu = ({ ref, className, children, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cx(
      'flex-1 flex min-h-[56px] h-[56px] items-center justify-start rounded-md bg-white-6 max-h-[56px] relative navigation-menu',
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List> & { ref?: React.RefObject<HTMLUListElement | null> }) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cx(
      'group flex flex-1 list-none items-center justify-center h-full',
      className,
    )}
    {...props}
  />
);
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item> & { ref?: React.RefObject<HTMLLIElement | null> }) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cx('relative', className)}
    {...props}
  />
);

const NavigationMenuTrigger = ({ ref, className, children, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> & { ref?: React.RefObject<HTMLButtonElement | null> }) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cx('group inline-flex h-full px-4 items-center justify-center bg-transparent text-sm font-bold transition-colors text-white-72 focus:outline-none disabled:pointer-events-none min-h-[56px] relative data-[state=open]:bg-white-6', className)}
    {...props}
  >
    {children}
    <IconChevronDown
      size={18}
      className="relative ms-1 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content> & { ref?: React.RefObject<HTMLDivElement | null> }) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cx(
      'absolute left-1/2 top-full transform -translate-x-1/2 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:w-auto',
      className,
    )}
    {...props}
  />
);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuContentItem = ({
  ref,
  className,
  icon,
  heading,
  description,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button> & {
  icon?: React.ReactNode;
  heading?: string;
  description?: string;
} & { ref?: React.RefObject<HTMLButtonElement | null> }) => (

  <Button ref={ref} className={cx('', className)} leftSection={icon} color="inverse-muted" fontSize="sm" fontWeight="bold" fontColor="muted" size="xl" justify="start" fullWidth {...props}>
    <Stack grow align="start" gap="none" overflow="text">
      {heading}
      <span className="text-xs font-normal text-secondary">
        {description}
      </span>
    </Stack>
  </Button>
);

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuContentItem,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};
