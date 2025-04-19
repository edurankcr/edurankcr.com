import React from 'react';

import { Skeleton } from '@/components';
import type { ITranslations } from '@/types';

import { ActivityReviewContainer } from './Activity.container';

type InstituteReviewSkeletonProps = ITranslations;

const InstituteReviewSkeleton = (props: InstituteReviewSkeletonProps) => {
  const { dictionary } = props;
  return (
    <ActivityReviewContainer dictionary={dictionary}>
      {Array.from({ length: 12 }, (_, index) => (
        <Skeleton key={index} className="h-[264px] review-card" />
      ))}
    </ActivityReviewContainer>
  );
};

export { InstituteReviewSkeleton };
