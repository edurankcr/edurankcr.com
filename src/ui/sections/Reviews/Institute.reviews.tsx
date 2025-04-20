'use client';

import { useQuery } from '@tanstack/react-query';
import { useFormatter, useTranslations } from 'next-intl';

import { getInstitutionRatings } from '@/services';
import type { InstitutionReviewsResponse } from '@/types';

import { InstituteReviewContent, InstituteReviewError, InstituteReviewSkeleton } from './Common';

type SectionInstituteReviewsProps = {
  instituteId: string;
};

const SectionInstituteReviews = (params: SectionInstituteReviewsProps) => {
  const { instituteId } = params;

  const dictionary = useTranslations('Base');
  const formatter = useFormatter();

  const { data, isLoading, error } = useQuery<InstitutionReviewsResponse>({
    queryKey: ['institute-reviews', instituteId],
    queryFn: async () => {
      const response = await getInstitutionRatings(instituteId);
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  if (error) {
    return <InstituteReviewError dictionary={dictionary} />;
  }

  if ((!error && isLoading) || !data) {
    return <InstituteReviewSkeleton />;
  }

  return (
    <InstituteReviewContent
      dictionary={dictionary}
      formatter={formatter}
      response={data}
    />
  );
};

export { SectionInstituteReviews };
