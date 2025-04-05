import type { ComponentProps, FC } from 'react';
import React from 'react';

import { Box, Section, Stack } from '@/components';
import { LayoutBackground } from '@/utils';

type MainProps = {} & ComponentProps<typeof Box>;

export const Main: FC<MainProps> = ({
  children,
  ...props
}) => {
  const mainProps = {
    ...props,
  };

  return (
    <Box
      as="main"
      height="full"
      position="relative"
      bgBackground="secondary"
      flexGrow
      {...mainProps}
    >
      <Section position="relative" zIndex={10}>
        <Box marginX="auto" padding="3xl" rounded="lg" maxWidth="form" bgBackground="white" boxShadow={200}>
          <Stack gap="section" className="relative">
            {children}
          </Stack>
        </Box>
      </Section>
      <LayoutBackground />
    </Box>
  );
};
