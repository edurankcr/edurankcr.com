import { Slot } from '@radix-ui/react-slot';
import { IconChevronRight, IconDots } from '@tabler/icons-react';
import { cx } from 'class-variance-authority';
import * as React from 'react';

import { Link } from '@/components/Navigation/Navigation';

type BreadcrumbProps = {
  separator?: React.ReactNode;
  ref?: React.RefObject<HTMLElement | null>;
} & React.ComponentPropsWithoutRef<'nav'>;

const Breadcrumb = ({ ref, ...props }: BreadcrumbProps) => <nav ref={ref} aria-label="breadcrumb" {...props} />;

Breadcrumb.displayName = 'Breadcrumb';

type BreadcrumbListProps = {
  ref?: React.RefObject<HTMLOListElement | null>;
} & React.ComponentPropsWithoutRef<'ol'>;

const BreadcrumbList = ({ ref, className, ...props }: BreadcrumbListProps) => (
  <ol
    ref={ref}
    className={cx(
      'flex items-center gap-2 break-words text-sm md:gap-2 overflow-hidden flex-nowrap',
      className,
    )}
    {...props}
  />
);

BreadcrumbList.displayName = 'BreadcrumbList';

type BreadcrumbItemProps = {
  ref?: React.RefObject<HTMLLIElement | null>;
} & React.ComponentPropsWithoutRef<'li'>;

const BreadcrumbItem = ({ ref, className, ...props }: BreadcrumbItemProps) => (
  <li
    ref={ref}
    className={cx('inline-flex items-center', className)}
    {...props}
  />
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

type BreadcrumbLinkProps = {
  asChild?: boolean;
  asHome?: boolean;
  ref?: React.RefObject<HTMLAnchorElement | null>;
} & React.ComponentPropsWithoutRef<typeof Link>;

const BreadcrumbLink = ({ ref, asHome, asChild, className, ...props }: BreadcrumbLinkProps) => {
  const Comp = asChild ? Slot : Link;

  return (
    <Comp
      ref={ref}
      className={cx(
        asHome && 'text-primary font-semibold underline',
        'transition-colors hover:text-text-secondary hover:underline text-nowrap',
        className,
      )}
      {...props}
    />
  );
};

BreadcrumbLink.displayName = 'BreadcrumbLink';

type BreadcrumbPageProps = {
  ref?: React.RefObject<HTMLSpanElement | null>;
} & React.ComponentPropsWithoutRef<'span'>;

const BreadcrumbPage = ({ ref, className, ...props }: BreadcrumbPageProps) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cx('font-semibold truncate', className)}
    {...props}
  />
);

BreadcrumbPage.displayName = 'BreadcrumbPage';

type BreadcrumbSeparatorProps = {
  ref?: React.RefObject<HTMLLIElement | null>;
} & React.ComponentPropsWithoutRef<'li'>;

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cx('[&>svg]:w-3.5 [&>svg]:h-3.5', className)}
    {...props}
  >
    {children ?? <IconChevronRight />}
  </li>
);

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

type BreadcrumbEllipsisProps = {
  ref?: React.RefObject<HTMLSpanElement | null>;
} & React.ComponentPropsWithoutRef<'span'>;

const BreadcrumbEllipsis = ({
  className,
  ...props
}: BreadcrumbEllipsisProps) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cx('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <IconDots className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);

BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
