import React, { useMemo } from 'react';

import { Stack } from '@/components';
import { AppRoutes } from '@/constants';
import type { IFormatter, ITranslations, ReviewInstitute } from '@/types';
import { getExperienceAverage, getRelativeTime } from '@/utils';

import { ReviewCardContent, ReviewCardFooter, ReviewCardHeader } from './Commons';

type ReviewCardInstituteProps = {
  review: ReviewInstitute;
} & ITranslations & IFormatter;

const ReviewCardInstitute = (props: ReviewCardInstituteProps) => {
  const { review, dictionary, formatter } = props;
  const relativeTime = useMemo(() => getRelativeTime(formatter, review.createdAt), [formatter, review.createdAt]);

  return (
    <Stack rounded="lg" width="full" className="review-card" justifyContent="start" height="fit">
      <ReviewCardHeader
        user={{
          avatarUrl: review.avatarUrl,
          userName: review.userName,
          lastName: review.userLastName,
          name: review.userFirstName,
        }}
        createdAt={relativeTime}
        dictionary={dictionary}
      />
      <ReviewCardContent
        experienceText={review.experienceText}
      />
      <ReviewCardFooter
        href={AppRoutes.Global.Institutes.Profile(review.instituteId)}
        averageRating={getExperienceAverage(5, [
          review.reputation,
          review.happiness,
          review.facilities,
          review.clubs,
          review.security,
          review.opportunities,
          review.location,
          review.social,
          review.internet,
          review.food,
        ])}
        dictionary={dictionary}
      />
    </Stack>
  );
};

export { ReviewCardInstitute };
