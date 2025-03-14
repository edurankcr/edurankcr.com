// noinspection HtmlRequiredAltAttribute

import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';

import { Link as RouterLink } from '../Navigation/Navigation';

const linkVariants = cva('', {
  variants: {
    cursor: {
      pointer: 'cursor-pointer',
    },
    select: {
      none: 'select-none',
    },
  },
  defaultVariants: {
    cursor: 'pointer',
  },
});

type LinkProps = {
} & ComponentProps<typeof RouterLink> & VariantProps<typeof linkVariants>;

const Link: FC<LinkProps> = ({
  className,
  cursor,
  href,
  target,
  rel,
  title,
  id,
  ...props
}) => {
  const linkProps = {
    href,
    target,
    rel,
    title,
    id,
    ...props,
  };
  return (
    <RouterLink className={cx(linkVariants({ cursor }), className)} {...linkProps} />
  );
};

Link.displayName = 'Link';

export { Link };
