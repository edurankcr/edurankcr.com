import React from 'react';

import { Skeleton } from '@/components';
import type { ITranslations } from '@/types';

import { ActivityReviewContainer } from './Activity.container';

type ActivityReviewSkeletonProps = ITranslations;

const ActivityReviewSkeleton = (props: ActivityReviewSkeletonProps) => {
  const { dictionary } = props;
  return (
    <ActivityReviewContainer dictionary={dictionary}>
      {Array.from({ length: 12 }, (_, index) => (
        <Skeleton key={index} className="h-[264px] review-card" />
      ))}
    </ActivityReviewContainer>
  );
};

export { ActivityReviewSkeleton };
