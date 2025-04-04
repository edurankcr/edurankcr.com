import { Text } from '@theme/components';
import type { IComponent } from '@theme/types';
import { cx } from 'class-variance-authority';

type HeadingProps = {
  className?: string;
} & IComponent;

const HeadingHero = ({ children }: HeadingProps) => {
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

const HeadingForm = ({ children, className }: HeadingProps) => {
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

const Heading = ({ children }: HeadingProps) => {
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

export { Heading, HeadingForm, HeadingHero };
