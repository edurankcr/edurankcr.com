import type { ITranslations } from '@/types';
import { AlertApiError } from '@/ui';

import { ActivityReviewContainer } from './Activity.container';

type InstituteReviewErrorProps = ITranslations;

const InstituteReviewError = (props: InstituteReviewErrorProps) => {
  const { dictionary } = props;
  return (
    <ActivityReviewContainer dictionary={dictionary}>
      <AlertApiError message={dictionary('Errors.fetch_data')} />
    </ActivityReviewContainer>
  );
};

export { InstituteReviewError };
