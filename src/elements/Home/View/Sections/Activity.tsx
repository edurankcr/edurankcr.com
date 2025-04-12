'use client';

import { useQuery } from '@tanstack/react-query';
import { useFormatter, useTranslations } from 'next-intl';

import { Box, Section, Stack } from '@/components';
import { fetchLastActivity } from '@/services';
import { AlertApiError, Heading } from '@/ui';

import { ActivityCardSkeleton } from './ActivityCard.commons';
import { ActivityCardInstitute } from './ActivityCard.institute';
import { ActivityCardTeacher } from './ActivityCard.teacher';

export const HomeActivity = () => {
  const dictionary = useTranslations('UI');
  const formatter = useFormatter();
  const { data, isLoading, error } = useQuery({
    queryKey: ['last-activity'],
    queryFn: async () => {
      const response = await fetchLastActivity();
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  if (error) {
    return (
      <Section asChild>
        <Stack as="section" alignItems="center" container>
          <AlertApiError message={dictionary('Elements.Home.Errors.fetch_last_activity')} />
        </Stack>
      </Section>
    );
  }

  return (
    <Section asChild>
      <Stack as="section" alignItems="center" container>
        <Heading>
          {dictionary('Elements.Home.Activity.title')}
        </Heading>
        <Box className="grid-reviews">
          {isLoading
            ? (
                <ActivityCardSkeleton />
              )
            : (
                <>
                  {data.result.teacherReviews.map((review: any) => (
                    <ActivityCardTeacher
                      key={review.reviewId}
                      review={review}
                      dictionary={dictionary}
                      formatter={formatter}
                    />
                  ))}
                  {data.result.instituteReviews.map((review: any) => (
                    <ActivityCardInstitute
                      key={review.reviewId}
                      review={review}
                      dictionary={dictionary}
                      formatter={formatter}
                    />
                  ))}
                </>
              )}
        </Box>
      </Stack>
    </Section>
  );
};
