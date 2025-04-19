'use client';

import type { ComponentProps } from 'react';
import { memo } from 'react';

import type { IChildren } from '@/types';

import { Text } from '../Text';

type HeadingProps = {
  settings?: ComponentProps<typeof Text>;
} & IChildren;

const HeroHeading = memo((props: HeadingProps) => {
  const { settings, children } = props;
  return (
    <Text
      as={settings?.as ?? 'h1'}
      color={settings?.color ?? 'white'}
      align={settings?.align ?? 'start'}
      size="700-res"
      weight="medium"
    >
      {children}
    </Text>
  );
});

const Heading = memo((props: HeadingProps) => {
  const { settings, children } = props;
  return (
    <Text
      as={settings?.as ?? 'h2'}
      color={settings?.color ?? 'primary'}
      align={settings?.align ?? 'center'}
      size="400-res"
      weight="semibold"
    >
      {children}
    </Text>
  );
});

const HeadingForm = memo((props: HeadingProps) => {
  const { settings, children } = props;
  return (
    <Text
      as={settings?.as ?? 'h1'}
      color={settings?.color ?? 'primary'}
      size={settings?.size ?? '400-res'}
      className={settings?.className}
      weight="medium"
      align="center"
      wrap="balance"
    >
      {children}
    </Text>
  );
});

export { Heading, HeadingForm, HeroHeading };
