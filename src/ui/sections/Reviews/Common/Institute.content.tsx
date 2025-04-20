import type { IFormatter, InstitutionReviewsResponse, ITranslations } from '@/types';
import { ReviewFullCardInstitute } from '@/ui';

import { InstituteReviewContainer } from './Institute.container';

type InstituteReviewContentProps = {
  response: InstitutionReviewsResponse;
} & ITranslations & IFormatter;

const InstituteReviewContent = (params: InstituteReviewContentProps) => {
  const { dictionary, formatter, response } = params;

  return (
    <InstituteReviewContainer>
      {response && response.map(review => (
        <ReviewFullCardInstitute
          key={review.review.institutionRatingId}
          review={review.review}
          user={review.user}
          dictionary={dictionary}
          formatter={formatter}
        />
      ))}
    </InstituteReviewContainer>
  );
};

export { InstituteReviewContent };
