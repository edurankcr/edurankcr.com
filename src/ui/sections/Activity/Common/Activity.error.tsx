import type { ITranslations } from '@/types';
import { AlertApiError } from '@/ui';

import { ActivityReviewContainer } from './Activity.container';

type ActivityReviewErrorProps = ITranslations;

const ActivityReviewError = (props: ActivityReviewErrorProps) => {
  const { dictionary } = props;
  return (
    <ActivityReviewContainer dictionary={dictionary}>
      <AlertApiError message={dictionary('Errors.fetch_data')} />
    </ActivityReviewContainer>
  );
};

export { ActivityReviewError };
