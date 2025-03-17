import { Link as RouterLink } from '@theme/components/Navigation/Navigation';
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

const linkVariants = cva('', {
  variants: {
    userCursor: { pointer: 'cursor-pointer' },
    userSelect: { none: 'select-none' },
  },
  defaultVariants: { userCursor: 'pointer' },
});

type LinkProps = ComponentProps<typeof RouterLink> & VariantProps<typeof linkVariants>;

const Link: FC<LinkProps> = memo(({
  className,
  userCursor,
  userSelect,
  href,
  target,
  rel,
  title,
  id,
  ...props
}) => {
  const computedRel = target === '_blank' ? 'noopener noreferrer' : rel;

  return (
    <RouterLink
      className={cx(linkVariants({ userCursor, userSelect }), className)}
      href={href}
      target={target}
      rel={computedRel}
      title={title}
      id={id}
      {...props}
    />
  );
});

Link.displayName = 'Link';

export { Link };
