import type { ComponentProps, FC } from 'react';

import { Box, usePreventGrowOverflow } from '../Box';

type GroupProps = {} & ComponentProps<typeof Box>;

const Group: FC<GroupProps> = ({
  align = 'center',
  gap = 'md',
  grow = false,
  justify = 'center',
  preventGrowOverflow = true,
  wrap = 'wrap',
  ...props
}) => {
  const groupProps = {
    align,
    gap,
    grow,
    justify,
    preventGrowOverflow,
    wrap,
    ...props,
  };

  return usePreventGrowOverflow(<Box display="flex" direction="row" {...groupProps} />, preventGrowOverflow);
};

Group.displayName = 'Group';

export { Group };
