'use client';

import { useQuery } from '@tanstack/react-query';
import { useFormatter, useTranslations } from 'next-intl';

import { fetchLastActivity } from '@/services';
import type { LatestReviewsResponse } from '@/types';

import { ActivityReviewContent, ActivityReviewError, ActivityReviewSkeleton } from './Common';

const SectionActivityReviews = () => {
  const dictionary = useTranslations('Base');
  const formatter = useFormatter();

  const { data, isLoading, error } = useQuery<LatestReviewsResponse>({
    queryKey: ['last-activity'],
    queryFn: async () => {
      const response = await fetchLastActivity();
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  if (error) {
    return <ActivityReviewError dictionary={dictionary} />;
  }

  if ((!error && isLoading) || !data) {
    return <ActivityReviewSkeleton dictionary={dictionary} />;
  }

  return (
    <ActivityReviewContent
      dictionary={dictionary}
      formatter={formatter}
      institutionReviews={data.institutionReviews}
      teacherReviews={data.teacherReviews}
    />
  );
};

export { SectionActivityReviews };
