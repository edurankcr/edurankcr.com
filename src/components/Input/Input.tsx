'use client';

import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';
import { memo } from 'react';

import { Box } from '../Box';
// noinspection ES6PreferShortImport
import { inputVariants } from './Input.variants';

type InputProps = {
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  boxSettings?: & ComponentProps<typeof Box>;
} & ComponentProps<'input'> & VariantProps<typeof inputVariants>;

const CSput = memo<InputProps>(({
  className,
  leftSection,
  rightSection,
  boxSettings,
  onKeyDown,
  ...props
}) => {
  return (
    <Box
      display="inlineFlex"
      paddingX="md"
      rounded="full"
      width="full"
      bgBackground="white"
      justifyContent="center"
      alignItems="center"
      {...boxSettings}
    >
      {leftSection && <span className="me-4 text-neutral-600">{leftSection}</span>}
      <input
        {...props}
        className={cx(inputVariants(), className)}
        onKeyDown={onKeyDown}
      />
      {rightSection && <span className="ms-4 text-neutral-600">{rightSection}</span>}
    </Box>
  );
});

CSput.displayName = 'CSput';

export { CSput };
