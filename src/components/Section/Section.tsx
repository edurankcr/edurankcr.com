'use client';

import { Box } from '@components';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

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
