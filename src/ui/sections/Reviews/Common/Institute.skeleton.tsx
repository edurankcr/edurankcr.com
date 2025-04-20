import React from 'react';

import { Skeleton } from '@/components';

import { InstituteReviewContainer } from './Institute.container';

const InstituteReviewSkeleton = () => {
  return (
    <InstituteReviewContainer>
      {Array.from({ length: 12 }, (_, index) => (
        <Skeleton key={index} className="h-[264px] review-card" />
      ))}
    </InstituteReviewContainer>
  );
};

export { InstituteReviewSkeleton };
