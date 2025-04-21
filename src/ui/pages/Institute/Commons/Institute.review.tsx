import { IconStarFilled } from '@tabler/icons-react';

import { Button, Group, Progress, Stack, Text } from '@/components';
import { AppRoutes } from '@/constants';
import type { IDictionary, InstitutionDetailsResponse } from '@/types';
import { SectionInstituteReviews } from '@/ui';
import { getExperienceAverage } from '@/utils';

type InstituteReviewItemProps = {
  title: string;
  value: number;
};

const InstituteReviewItem = ({ title, value }: InstituteReviewItemProps) => {
  return (
    <Group preventGrowOverflow={false} flexGrow justifyContent="between" flexWrap="nowrap">
      <Text size="sm" className="w-[70px] min-w-[70px]" wrap="nowrap" truncate>{title}</Text>
      <Group preventGrowOverflow={false} flexGrow flexWrap="nowrap" className="text-brand-neon">
        <IconStarFilled size={16} className="min-w-[16px]" />
        <Progress value={Math.floor(value * 10)} bgColor="neon" height="sm" />
      </Group>
    </Group>
  );
};

type InstituteReviewProps = {
  institutionId: string;
  instituteSummary: InstitutionDetailsResponse['aggregateRatings'];
} & IDictionary;

const InstituteReview = (params: InstituteReviewProps) => {
  const { dictionary, instituteSummary, institutionId } = params;
  return (
    <Group flexDirection="rowRes" preventGrowOverflow={false} flexGrow gap="content" flexWrap="nowrap" position="relative" alignItems="start">
      <Stack className="w-full md:w-3/12" gap="section">
        <Text size="600-res" weight="semibold">
          {dictionary('Section.Institute.reviews_title')}
        </Text>
        <Group preventGrowOverflow={false} flexGrow flexWrap="nowrap" alignItems="end" justifyContent="start" gap="lg">
          <Group preventGrowOverflow={false} flexWrap="nowrap" alignItems="end" justifyContent="start">
            <Text weight="semibold" className="text-[80px] leading-[0.75]">
              {instituteSummary.overallAverage}
            </Text>
            <IconStarFilled size={32} className="text-brand-neon" />
          </Group>
          <Text size="sm" color="secondary" underline weight="semibold">
            {dictionary('Section.Institute.reviews_quantity', { total: instituteSummary.reviewCount })}
          </Text>
        </Group>
        <Stack gap="xs">
          <InstituteReviewItem
            title={dictionary('Section.Institute.community')}
            value={getExperienceAverage(5, [instituteSummary.happiness, instituteSummary.social, instituteSummary.clubs, instituteSummary.reputation, instituteSummary.opportunities])}
          />
          <InstituteReviewItem
            title={dictionary('Section.Institute.environment')}
            value={getExperienceAverage(5, [instituteSummary.location, instituteSummary.safety, instituteSummary.internet, instituteSummary.facilities, instituteSummary.food])}
          />
        </Stack>
        <Button bgColor="interactivePrimary" height="lg" href={AppRoutes.Auth.Institutes.Review.replace('[id]', institutionId)}>
          {dictionary('Button.write_review')}
        </Button>
      </Stack>
      <Stack className="w-full md:w-9/12" gap="section">
        {instituteSummary.reviewCount > 0 && (
          <SectionInstituteReviews instituteId={institutionId} />
        )}
      </Stack>
    </Group>
  );
};

export { InstituteReview };
