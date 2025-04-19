import React from 'react';

import { Group, Link, Stack, Stars, Text } from '@/components';
import type { ITranslations } from '@/types';

type ReviewCardFooterProps = {
  href: string;
  averageRating: number;
} & ITranslations;

const ReviewCardFooter = (props: ReviewCardFooterProps) => {
  const { href, averageRating, dictionary } = props;
  return (
    <Stack>
      <Group preventGrowOverflow={false} justifyContent="between">
        <Link href={href} text={{ underline: true, weight: 'semibold' }}>
          {dictionary('Button.learn_more')}
        </Link>
        <Group preventGrowOverflow={false} gap="md">
          <Text weight="semibold">{averageRating}</Text>
          <Stars rate={averageRating} />
        </Group>
      </Group>
    </Stack>
  );
};

export { ReviewCardFooter };
