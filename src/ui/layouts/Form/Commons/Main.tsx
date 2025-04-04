import { Box, Image, Section, Stack } from '@components';
import type { ComponentProps, FC } from 'react';
import React, { useMemo } from 'react';

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
      <picture className="absolute inset-0 overflow-hidden">
        <source
          media="(max-width: 767.95px)"
          srcSet={`/assets/images/form/${indexImage}-sm.jpg`}
          type="image/jpg"
        />
        <Image
          loading="eager"
          src={`/assets/images/form/${indexImage}.jpg`}
          className="size-full object-cover"
        />
      </picture>
    </Box>
  );
};
