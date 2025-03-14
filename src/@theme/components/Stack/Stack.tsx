import type { ComponentProps, FC } from 'react';

import { Box } from '../Box';

type StackProps = {} & ComponentProps<typeof Box>;

const Stack: FC<StackProps> = ({ align = 'stretch', justify = 'center', gap = 'md', ...props }) => {
  const stackProps = {
    align,
    justify,
    gap,
    ...props,
  };

  return <Box display="flex" direction="column" {...stackProps} />;
};

Stack.displayName = 'Stack';

export { Stack };
