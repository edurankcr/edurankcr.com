'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import { IconCheck, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { cx } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, Ref } from 'react';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

type SelectTriggerProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
  ref?: Ref<HTMLButtonElement | null>;
};

const SelectTrigger = ({ ref, className, children, ...props }: SelectTriggerProps) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cx(
      'aria-[invalid=false]:data-[placeholder]:text-text-secondary font-medium h-[48px] min-h-[auto] w-full rounded-lg flex w-full items-center justify-between whitespace-nowrap bg-transparent px-3 py-[0.32rem] disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 aria-[invalid=true]:bg-background-error-weak aria-[invalid=true]:text-text-error',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <IconChevronDown className="h-4 w-4 text-text-secondary" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
);

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

type SelectScrollButtonProps = ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton> & {
  ref?: Ref<HTMLDivElement | null>;
};

const SelectScrollUpButton = ({ ref, className, ...props }: SelectScrollButtonProps) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cx(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <IconChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
);

SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

type SelectScrollDownButtonProps = ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton> & {
  ref?: Ref<HTMLDivElement | null>;
};

const SelectScrollDownButton = ({ ref, className, ...props }: SelectScrollDownButtonProps) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cx(
      'flex cursor-default items-center justify-center py-1',
      className,
    )}
    {...props}
  >
    <IconChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
);

SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

type SelectContentProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
  ref?: Ref<HTMLDivElement | null>;
};

const SelectContent = ({ ref, className, children, position = 'popper', ...props }: SelectContentProps) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cx(
        'relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-lg bg-white text-text-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin] border border-border-interactive',
        position === 'popper'
        && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cx(
          'p-1',
          position === 'popper'
          && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
);

SelectContent.displayName = SelectPrimitive.Content.displayName;

type SelectLabelProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Label> & {
  ref?: Ref<HTMLDivElement | null>;
};

const SelectLabel = ({ ref, className, ...props }: SelectLabelProps) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cx('px-2 py-1.5 text-sm font-semibold', className)}
    {...props}
  />
);

SelectLabel.displayName = SelectPrimitive.Label.displayName;

type SelectItemProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
  ref?: Ref<HTMLDivElement | null>;
};

const SelectItem = ({ ref, className, children, ...props }: SelectItemProps) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cx(
      'hover:bg-background-secondary font-medium relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 outline-none focus:bg-background-secondary data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <IconCheck className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);

SelectItem.displayName = SelectPrimitive.Item.displayName;

type SelectSeparatorProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Separator> & {
  ref?: Ref<HTMLDivElement | null>;
};

const SelectSeparator = ({ ref, className, ...props }: SelectSeparatorProps) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cx('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
);

SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
