import type { IFormatter, ITranslations, LatestReviewsResponse } from '@/types';
import { ReviewCardInstitute, ReviewCardTeacher } from '@/ui';

import { ActivityReviewContainer } from './Activity.container';

type ActivityReviewContentProps = ITranslations & LatestReviewsResponse & IFormatter;

const ActivityReviewContent = (params: ActivityReviewContentProps) => {
  const { dictionary, formatter, institutionReviews, teacherReviews } = params;

  return (
    <ActivityReviewContainer dictionary={dictionary}>
      {institutionReviews && institutionReviews.map(review => (
        <ReviewCardInstitute
          key={review.institutionRatingId}
          review={review}
          dictionary={dictionary}
          formatter={formatter}
        />
      ))}
      {teacherReviews && teacherReviews.map(review => (
        <ReviewCardTeacher
          key={review.teacherId}
          review={review}
          dictionary={dictionary}
          formatter={formatter}
        />
      ))}
    </ActivityReviewContainer>
  );
};

export { ActivityReviewContent };
