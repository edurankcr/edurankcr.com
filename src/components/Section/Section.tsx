'use client';

import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

import { Box } from '../Box';

type SectionProps = ComponentProps<typeof Box>;

const Section: FC<SectionProps> = memo(({
  ...props
}) => (
  <Box
    width="full"
    paddingY="section"
    paddingX="section"
    gap="section"
    as="section"
    {...props}
  />
));

Section.displayName = 'Section';

export { Section };
