import { cx } from 'class-variance-authority';

import { Text } from '@/components';
import type { IComponent } from '@/types';

type HeadingProps = {
  className?: string;
} & IComponent;

export const HeadingHero = ({ children }: HeadingProps) => {
  return (
    <Text
      as="h1"
      color="white"
      size="700-res"
      weight="medium"
      align="center"
    >
      {children}
    </Text>
  );
};

export const HeadingForm = ({ children, className }: HeadingProps) => {
  return (
    <Text
      as="h1"
      color="primary"
      size="400-res"
      weight="medium"
      align="center"
      wrap="balance"
      className={cx(className)}
    >
      {children}
    </Text>
  );
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <Text
      as="h2"
      color="primary"
      size="400-res"
      weight="semibold"
      align="center"
    >
      {children}
    </Text>
  );
};
