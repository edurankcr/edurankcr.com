import { Box } from '@theme/components';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

type StackProps = ComponentProps<typeof Box>;

const Stack: FC<StackProps> = memo(({
  display = 'flex',
  flexDirection = 'column',
  alignItems = 'stretch',
  justifyContent = 'center',
  gap = 'md',
  ...props
}) => (
  <Box
    display={display}
    flexDirection={flexDirection}
    alignItems={alignItems}
    justifyContent={justifyContent}
    gap={gap}
    {...props}
  />
));

Stack.displayName = 'Stack';

export { Stack };
