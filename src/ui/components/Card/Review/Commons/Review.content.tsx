import React from 'react';

import { Stack, Text } from '@/components';
import { getExperienceText } from '@/utils';

type ReviewCardContentProps = {
  experienceText: string;
};

const ReviewCardContent = (props: ReviewCardContentProps) => {
  const { experienceText } = props;
  return (
    <Stack gap="sm">
      <Text wrap="pretty">
        &ldquo;
        {getExperienceText(experienceText)}
        &rdquo;
      </Text>
    </Stack>
  );
};

export { ReviewCardContent };
