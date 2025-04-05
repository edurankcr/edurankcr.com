'use client';

import type { ComponentProps, FC } from 'react';
import React from 'react';

import { Box, Stack } from '@/components';

export const MainHeader: FC<ComponentProps<typeof Stack>> = ({
  children,
  ...props
}) => {
  return (
    <Stack
      gap="none"
      paddingY="none"
      paddingX="section"
      {...props}
    >
      {children}
    </Stack>
  );
};

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
      <Box
        container
        marginY="section"
        padding="3xl"
        rounded="lg"
        bgBackground="white"
        boxShadow={200}
      >
        <MainHeader />
        <Stack gap="section" className="relative">
          {children}
        </Stack>
      </Box>
    </Box>
  );
};
