import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

const imageVariants = cva('', {
  variants: {
    select: { none: 'select-none' },
    pointer: { none: 'pointer-events-none' },
  },
  defaultVariants: {
    select: 'none',
    pointer: 'none',
  },
});

type ImageProps = ComponentProps<'img'> & VariantProps<typeof imageVariants>;

const Image: FC<ImageProps> = memo(({
  className,
  select,
  pointer,
  src = '',
  alt = 'Image',
  title,
  width,
  height,
  loading = 'lazy',
  ...props
}) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cx(imageVariants({ select, pointer }), className)}
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      loading={loading}
      {...props}
    />
  );
});

Image.displayName = 'Image';

export { Image };
