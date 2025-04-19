import type { ActivityReviewContentResponse, IFormatter, ITranslations } from '@/types';
import { ReviewCardInstitute, ReviewCardTeacher } from '@/ui';

import { ActivityReviewContainer } from './Activity.container';

type InstituteReviewContentProps = ITranslations & ActivityReviewContentResponse['result'] & IFormatter;

const InstituteReviewContent = (params: InstituteReviewContentProps) => {
  const { dictionary, formatter, instituteReviews, teacherReviews } = params;

  return (
    <ActivityReviewContainer dictionary={dictionary}>
      {teacherReviews.map(review => (
        <ReviewCardTeacher
          key={review.reviewId}
          review={review}
          dictionary={dictionary}
          formatter={formatter}
        />
      ))}
      {instituteReviews.map(review => (
        <ReviewCardInstitute
          key={review.instituteId}
          review={review}
          dictionary={dictionary}
          formatter={formatter}
        />
      ))}
    </ActivityReviewContainer>
  );
};

export { InstituteReviewContent };
