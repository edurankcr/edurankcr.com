import React, { useMemo } from 'react';

import { Stack } from '@/components';
import { AppRoutes } from '@/constants';
import type { IFormatter, InstitutionReview, ITranslations } from '@/types';
import { getExperienceAverage, getRelativeTime } from '@/utils';

import { ReviewCardContent, ReviewCardFooter, ReviewCardHeader } from './Commons';

type ReviewCardInstituteProps = {
  review: InstitutionReview;
} & ITranslations & IFormatter;

const ReviewCardInstitute = (props: ReviewCardInstituteProps) => {
  const { review, dictionary, formatter } = props;
  const relativeTime = useMemo(() => getRelativeTime(formatter, review.createdAt), [formatter, review.createdAt]);

  return (
    <Stack rounded="lg" width="full" className="review-card shadow-200" justifyContent="start" height="fit">
      <ReviewCardHeader
        user={{
          name: review.user.name,
          lastName: review.user.lastName,
          avatarUrl: review.user.avatarUrl,
          userName: review.user.userName,
        }}
        createdAt={relativeTime}
        dictionary={dictionary}
      />
      <ReviewCardContent
        experienceText={review.testimony}
      />
      <ReviewCardFooter
        href={AppRoutes.Global.Institutes.Profile(review.institutionId)}
        averageRating={getExperienceAverage(5, [
          review.reputation,
          review.happiness,
          review.facilities,
          review.clubs,
          review.safety,
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
