'use client';

import type { ComponentProps } from 'react';
import React, { useMemo } from 'react';

import { Box, Image, Stack, usePathname } from '@/components';
import { AppRoutes } from '@/constants';

const backgroundRoutes = [
  AppRoutes.Guest.Login,
  AppRoutes.Guest.Register,
];

const usePathStartsWith = (paths: string[]) => {
  const pathname = usePathname();
  return useMemo(() => paths.some(path => pathname.startsWith(path)), [pathname, paths]);
};

type LayoutFormProps = ComponentProps<typeof Box>;

export const LayoutMainForm = ({ children, ...props }: LayoutFormProps) => {
  return (
    <Box
      marginX="auto"
      padding="3xl"
      rounded="lg"
      maxWidth="form"
      bgBackground="white"
      boxShadow={200}
      {...props}
    >
      <Stack gap="section" className="relative">
        {children}
      </Stack>
    </Box>
  );
};

type LayoutBackgroundProps = {
  indexImage?: number;
};

export const LayoutBackground = ({ indexImage = 1 }: LayoutBackgroundProps) => {
  const showBackground = usePathStartsWith(backgroundRoutes);

  if (!showBackground) {
    return null;
  }

  return (
    <picture className="absolute inset-0 overflow-hidden">
      <source
        media="(max-width: 767.95px)"
        srcSet={`/assets/images/form/${indexImage}-sm.jpg`}
        type="image/jpg"
      />
      <Image
        key={indexImage}
        loading="eager"
        src={`/assets/images/form/${indexImage}.jpg`}
        alt="Background"
        className="size-full object-cover"
      />
    </picture>
  );
};
