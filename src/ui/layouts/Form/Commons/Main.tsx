import type { ComponentProps, FC } from 'react';
import React, { useMemo } from 'react';

import { Box, Section } from '@/components';

import { LayoutBackground, LayoutMainForm } from '../../Background';

type MainProps = {} & ComponentProps<typeof Box>;

export const Main: FC<MainProps> = ({
  children,
  ...props
}) => {
  const mainProps = {
    ...props,
  };

  const indexImage = useMemo(() => Math.floor(Math.random() * 2) + 1, []);

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
        <LayoutMainForm>
          {children}
        </LayoutMainForm>
      </Section>
      <LayoutBackground indexImage={indexImage} />
    </Box>
  );
};
