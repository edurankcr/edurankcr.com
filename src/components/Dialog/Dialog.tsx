'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons-react';
import { cx } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, HTMLAttributes, Ref } from 'react';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

type DialogOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> & {
  ref?: Ref<HTMLDivElement> | null;
};

const DialogOverlay = ({ ref, className, ...props }: DialogOverlayProps) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cx(
      'fixed inset-0 z-50 bg-black/75 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
);

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  ref?: Ref<HTMLDivElement> | null;
};

const DialogContent = ({ ref, className, children, ...props }: DialogContentProps) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cx(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100vw-1.5rem)] md:max-w-[40vw] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:text-text-secondary cursor-pointer">
        <IconX className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
);

DialogContent.displayName = DialogPrimitive.Content.displayName;

type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

const DialogHeader = ({
  className,
  ...props
}: DialogHeaderProps) => (
  <div
    className={cx(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className,
    )}
    {...props}
  />
);

DialogHeader.displayName = 'DialogHeader';

type DialogFooterProps = HTMLAttributes<HTMLDivElement>;

const DialogFooter = ({
  className,
  ...props
}: DialogFooterProps) => (
  <div
    className={cx(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
);

DialogFooter.displayName = 'DialogFooter';

type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title> & {
  ref?: Ref<HTMLHeadingElement> | null;
};

const DialogTitle = ({ ref, className, ...props }: DialogTitleProps) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cx(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
);

DialogTitle.displayName = DialogPrimitive.Title.displayName;

type DialogDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description> & {
  ref?: Ref<HTMLParagraphElement> | null;
};

const DialogDescription = ({ ref, className, ...props }: DialogDescriptionProps) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cx('sr-only', className)}
    {...props}
  />
);

DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
