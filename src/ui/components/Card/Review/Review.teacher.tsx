import React, { useMemo } from 'react';

import { Stack } from '@/components';
import { AppRoutes } from '@/constants';
import type { IFormatter, ITranslations, TeacherReview } from '@/types';
import { getExperienceAverage, getRelativeTime } from '@/utils';

import { ReviewCardContent, ReviewCardFooter, ReviewCardHeader } from './Commons';

type ReviewCardTeacherProps = {
  review: TeacherReview;
} & ITranslations & IFormatter;

const ReviewCardTeacher = (props: ReviewCardTeacherProps) => {
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
        href={AppRoutes.Global.Teachers.Profile(review.teacherId)}
        averageRating={getExperienceAverage(5, [
          review.clarity,
          review.knowledge,
          review.respect,
          review.fairness,
          review.punctuality,
          review.motivation,
        ])}
        dictionary={dictionary}
      />
    </Stack>
  );
};

export { ReviewCardTeacher };
