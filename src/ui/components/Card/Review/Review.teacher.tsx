import React, { useMemo } from 'react';

import { Stack } from '@/components';
import { AppRoutes } from '@/constants';
import type { IFormatter, ITranslations, ReviewTeacher } from '@/types';
import { getRelativeTime } from '@/utils';

import { ReviewCardContent, ReviewCardFooter, ReviewCardHeader } from './Commons';

type ReviewCardTeacherProps = {
  review: ReviewTeacher;
} & ITranslations & IFormatter;

const ReviewCardTeacher = (props: ReviewCardTeacherProps) => {
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
        href={AppRoutes.Global.Teachers.Profile(review.teacherId)}
        averageRating={review.professorRating}
        dictionary={dictionary}
      />
    </Stack>
  );
};

export { ReviewCardTeacher };
