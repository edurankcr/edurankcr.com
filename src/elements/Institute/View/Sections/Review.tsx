import { IconStarFilled } from '@tabler/icons-react';

import { Button, Group, Progress, Stack, Text } from '@/components';
import type { IDictionary, IFormatter, InstituteProps } from '@/types';

import { InstituteReviewList } from './Review.list';

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

type InstituteReviewProps = InstituteProps & IDictionary & IFormatter;

export const InstituteReview = ({ dictionary, formatter }: InstituteReviewProps) => {
  return (
    <section id="reviews" className="flex flex-col gap-4 md:flex-row lg:gap-16 relative items-start">
      <Stack className="w-full md:w-3/12" gap="section">
        <Text size="600-res" weight="semibold">
          {dictionary('Elements.Institute.Reviews.title')}
        </Text>
        <Group preventGrowOverflow={false} flexGrow flexWrap="nowrap" alignItems="end" justifyContent="start" gap="lg">
          <Group preventGrowOverflow={false} flexWrap="nowrap" alignItems="end" justifyContent="start">
            <Text weight="semibold" className="text-[80px] leading-[0.75]">
              4.8
            </Text>
            <IconStarFilled size={32} className="text-brand-neon" />
          </Group>
          <Text size="sm" color="secondary" underline weight="semibold">
            {dictionary('Elements.Institute.Reviews.quantity', { total: 178 })}
          </Text>
        </Group>
        <Stack gap="xs">
          <InstituteReviewItem title={dictionary('Elements.Institute.Reviews.Descriptions.experience')} value={3.8} />
          <InstituteReviewItem title={dictionary('Elements.Institute.Reviews.Descriptions.institution')} value={2.8} />
        </Stack>
        <Button bgColor="interactivePrimary" height="lg">
          {dictionary('Elements.Institute.Reviews.button')}
        </Button>
      </Stack>
      <Stack className="w-full md:w-9/12" gap="section">
        <InstituteReviewList formatter={formatter} dictionary={dictionary} />
      </Stack>
    </section>
  );
};
