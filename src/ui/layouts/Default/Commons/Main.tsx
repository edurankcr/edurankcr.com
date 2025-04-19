'use client';

import { Box, Stack } from '@/components';
import type { IChildren, IPathname } from '@/types';
import { getMainType } from '@/utils';

import { MainBackground } from './Main.background';

type MainProps = {
  value?: number;
} & IChildren & IPathname;

const Main = (props: MainProps) => {
  const { children, pathname, value } = props;

  const { background, type } = getMainType(pathname);

  if (type === 'form') {
    return (
      <Stack
        as="main"
        position="relative"
        flexGrow
      >
        <Box
          marginX="section"
          marginY="section"
          padding="3xl"
          rounded="lg"
          maxWidth="form"
          bgBackground="white"
          boxShadow={200}
          zIndex={10}
          className="md:w-full md:mx-auto mx-4"
        >
          <Stack gap="section" className="relative">
            {children}
          </Stack>
        </Box>
        <MainBackground type={background} value={value} />
      </Stack>
    );
  }

  if (type === 'largeForm') {
    return (
      <Stack
        as="main"
        position="relative"
        padding="section"
        flexGrow
      >
        <Box
          gap="section"
          padding="section"
          bgBackground="white"
          rounded="lg"
          boxShadow={200}
          zIndex={10}
          container
        >
          <Stack gap="section" className="relative">
            {children}
          </Stack>
        </Box>
        <MainBackground type={background} value={value} />
      </Stack>
    );
  }

  return (
    <Stack as="main" flexGrow>
      {children}
    </Stack>
  );
};

export { Main };
