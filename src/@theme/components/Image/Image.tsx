// noinspection HtmlRequiredAltAttribute

import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';

const imageVariants = cva('', {
  variants: {
    select: {
      none: 'select-none',
    },
    pointer: {
      none: 'pointer-events-none',
    },
  },
  defaultVariants: {
    select: 'none',
    pointer: 'none',
  },
});

type ImageProps = {
} & ComponentProps<'img'> & VariantProps<typeof imageVariants>;

const Image: FC<ImageProps> = ({
  className,
  select,
  pointer,
  src = '',
  alt = 'Image',
  title = 'A sample image',
  width,
  height,
  loading = 'lazy',
  ...props
}) => {
  const imageProps = {
    src,
    alt,
    title,
    width,
    height,
    loading,
    ...props,
  };
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cx(imageVariants({ select, pointer }), className)} {...imageProps} />
  );
};

Image.displayName = 'Image';

export { Image };
