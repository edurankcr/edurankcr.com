import { Box, Heading, Section } from '@/components';
import type { IChildren, ITranslations } from '@/types';

type ActivityReviewContentProps = ITranslations & IChildren;

const ActivityReviewContainer = (params: ActivityReviewContentProps) => {
  const { children, dictionary } = params;

  return (
    <Section as="section" alignItems="center" container id="activity">
      <Heading>
        {dictionary('Section.Activity.title')}
      </Heading>
      <Box className="grid-reviews">
        {children}
      </Box>
    </Section>
  );
};

export { ActivityReviewContainer };
