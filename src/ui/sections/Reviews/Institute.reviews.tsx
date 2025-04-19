'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchLastActivity } from '@/services';
import type { ActivityReviewContentResponse, ITranslations } from '@/types';

import { InstituteReviewContent, InstituteReviewError, InstituteReviewSkeleton } from './Common';

type SectionInstituteReviewsProps = {
  instituteId: string;
} & ITranslations;

const SectionInstituteReviews = (params: SectionInstituteReviewsProps) => {
  const { instituteId, dictionary } = params;

  const { data, isLoading, error } = useQuery<ActivityReviewContentResponse>({
    queryKey: ['institute-reviews', instituteId],
    queryFn: async () => {
      const response = await fetchLastActivity();
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  if (error) {
    return <InstituteReviewError dictionary={dictionary} />;
  }

  if ((!error && isLoading) || !data) {
    return <InstituteReviewSkeleton dictionary={dictionary} />;
  }

  return (
    <InstituteReviewContent
      dictionary={dictionary}
      formatter={formatter}
      instituteReviews={data.result.instituteReviews}
      teacherReviews={data.result.teacherReviews}
    />
  );
};

export { SectionInstituteReviews };
