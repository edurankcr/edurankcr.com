import React from 'react';

import { Skeleton } from '@/components';

import { GlobalSearchInputResultsContainer } from './Results.container';

const GlobalSearchInputResultsSkeleton = () => {
  return (
    <GlobalSearchInputResultsContainer>
      {Array.from({ length: 4 }, (_, index) => (
        <Skeleton key={index} className="min-h-[48px] h-[48px] w-full rounded-lg" />
      ))}
    </GlobalSearchInputResultsContainer>
  );
};

export { GlobalSearchInputResultsSkeleton };
