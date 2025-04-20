import { Stack } from '@/components';
import type { IChildren } from '@/types';

type InstituteReviewContainerProps = IChildren;

const InstituteReviewContainer = (params: InstituteReviewContainerProps) => {
  const { children } = params;

  return (
    <Stack>
      {children}
    </Stack>
  );
};

export { InstituteReviewContainer };
