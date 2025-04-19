import { IconStarFilled } from '@tabler/icons-react';

import { Button, Group, Progress, Stack, Text } from '@/components';
import type { IDictionary, IFormatter, IInstituteDetails } from '@/types';

import { InstituteReviewList } from './Institute.reviewList';

type InstituteReviewItemProps = {
  title: string;
  value: number;
};

const InstituteReviewItem = ({ title, value }: InstituteReviewItemProps) => {
  return (
    <Group preventGrowOverflow={false} flexGrow justifyContent="between" flexWrap="nowrap">
      <Text size="sm" className="w-[70px] min-w-[70px]">{title}</Text>
      <Group preventGrowOverflow={false} flexGrow flexWrap="nowrap" className="text-brand-neon">
        <IconStarFilled size={16} className="min-w-[16px]" />
        <Progress value={Math.floor(value * 10)} bgColor="neon" />
      </Group>
    </Group>
  );
};

type InstituteReviewProps = IInstituteDetails & IDictionary & IFormatter;

const InstituteReview = (params: InstituteReviewProps) => {
  const { dictionary, formatter, instituteSummary } = params;
  return (
    <Group flexDirection="rowRes" preventGrowOverflow={false} flexGrow gap="content" flexWrap="nowrap" position="relative" alignItems="start">
      <Stack className="w-full md:w-3/12" gap="section">
        <Text size="600-res" weight="semibold">
          {dictionary('Section.Institute.reviews_title')}
        </Text>
        <Group preventGrowOverflow={false} flexGrow flexWrap="nowrap" alignItems="end" justifyContent="start" gap="lg">
          <Group preventGrowOverflow={false} flexWrap="nowrap" alignItems="end" justifyContent="start">
            <Text weight="semibold" className="text-[80px] leading-[0.75]">
              4.8
            </Text>
            <IconStarFilled size={32} className="text-brand-neon" />
          </Group>
          <Text size="sm" color="secondary" underline weight="semibold">
            {dictionary('Section.Institute.reviews_quantity', { total: instituteSummary.totalReviews })}
          </Text>
        </Group>
        <Stack gap="xs">
          <InstituteReviewItem title={dictionary('Section.Institute.avg_quality')} value={3.8} />
          <InstituteReviewItem title={dictionary('Section.Institute.avg_social')} value={2.8} />
        </Stack>
        <Button bgColor="interactivePrimary" height="lg">
          {dictionary('Button.write_review')}
        </Button>
      </Stack>
      <Stack className="w-full md:w-9/12" gap="section">
        <InstituteReviewList formatter={formatter} dictionary={dictionary} />
      </Stack>
    </Group>
  );
};

export { InstituteReview };
