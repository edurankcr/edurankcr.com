import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';
import { memo } from 'react';

const inputVariants = cva('outline-0 w-full', {
  variants: {
    fontSize: {
      300: 'text-300',
    },
    fontWeight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    height: {
      sm: 'h-9',
      md: 'h-10',
      lg: 'h-18',
    },
    paddingX: {
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
    },
    shadow: {
      200: 'shadow-200',
    },
    width: {
      full: 'w-full',
    },
  },
  defaultVariants: {
    fontWeight: 'medium',
    height: 'md',
    paddingX: 'md',
  },
});

type InputProps = {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
} & ComponentProps<'input'> & VariantProps<typeof inputVariants>;

const Input = memo<InputProps>(({
  className,
  leftSection,
  rightSection,
  fontSize,
  fontWeight,
  height,
  paddingX,
  shadow,
  width,
  ...props
}) => {
  return (
    <div className={cx(inputVariants({
      fontSize,
      fontWeight,
      height,
      shadow,
    }), 'inline-flex w-full items-center rounded-full bg-white')}
    >
      {leftSection && <span className="me-4 text-neutral-600">{leftSection}</span>}
      <input
        className={cx(className, 'w-full outline-0 placeholder:text-neutral-600 text-ellipsis')}
        {...props}
      />
      {rightSection && <span className="ms-4 text-neutral-600">{rightSection}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
