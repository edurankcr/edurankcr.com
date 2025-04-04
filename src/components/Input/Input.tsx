'use client';

import { Box, inputVariants } from '@components';
import type { VariantProps } from 'class-variance-authority';
import { cx } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';
import { memo } from 'react';

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
        className={cx(inputVariants(), className)}
        {...props}
      />
      {rightSection && <span className="ms-4 text-neutral-600">{rightSection}</span>}
    </Box>
  );
});

CSput.displayName = 'CSput';

export { CSput };
