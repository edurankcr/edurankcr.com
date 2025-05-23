'use client';

import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

import { getPreventGrowOverflow } from '@/utils';

import { Box } from '../Box';

type GroupProps = {
  preventGrowOverflow?: boolean;
} & ComponentProps<typeof Box>;

const Group: FC<GroupProps> = memo(({
  alignItems = 'center',
  display = 'flex',
  flexDirection = 'row',
  gap = 'md',
  flexGrow = false,
  justifyContent = 'center',
  preventGrowOverflow = true,
  flexWrap = 'wrap',
  ...props
}) => {
  return getPreventGrowOverflow(
    <Box
      alignItems={alignItems}
      display={display}
      flexDirection={flexDirection}
      gap={gap}
      flexGrow={flexGrow}
      justifyContent={justifyContent}
      overflow={preventGrowOverflow ? 'hidden' : undefined}
      flexWrap={flexWrap}
      {...props}
    />,
    preventGrowOverflow,
  );
});

Group.displayName = 'Group';

export { Group };
