import type { ITranslations } from '@/types';
import { AlertApiError } from '@/ui';

import { InstituteReviewContainer } from './Institute.container';

type InstituteReviewErrorProps = ITranslations;

const InstituteReviewError = (props: InstituteReviewErrorProps) => {
  const { dictionary } = props;
  return (
    <InstituteReviewContainer>
      <AlertApiError message={dictionary('Errors.fetch_data')} />
    </InstituteReviewContainer>
  );
};

export { InstituteReviewError };
