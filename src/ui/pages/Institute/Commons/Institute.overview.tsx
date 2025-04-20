import type { ReactNode } from 'react';

import { Box, Group, Icons, Link, Stack, Text } from '@/components';
import type { IDictionary, InstitutionDetailsResponse } from '@/types';

import { InstituteOverall } from './Institute.overviewAll';

type InstituteOverviewItemProps = {
  title: string;
  icon: ReactNode;
  href?: string;
};

const InstituteOverviewItem = (params: InstituteOverviewItemProps) => {
  const { icon, title, href } = params;

  return (
    <Group preventGrowOverflow={false} flexGrow justifyContent="between" gap="xs" flexWrap="nowrap" overflow="hidden">
      <Link href={href || '#'} text={{ weight: href ? 'semibold' : 'normal', truncate: true }} target="_blank" rel="noopener noreferrer">
        {title}
      </Link>
      <Box>
        {icon}
      </Box>
    </Group>
  );
};

type InstituteOverviewProps = {
  institution: InstitutionDetailsResponse['institution'];
  instituteSummary: InstitutionDetailsResponse['aggregateRatings'];
} & IDictionary;

const InstituteOverview = (params: InstituteOverviewProps) => {
  const { dictionary, institution, instituteSummary } = params;
  return (
    <Group flexDirection="rowRes" preventGrowOverflow={false} flexGrow gap="content" flexWrap="nowrap" position="relative" alignItems="start">
      <Stack className="w-full md:w-9/12" gap="section">
        <Stack>
          <Text size="500" weight="semibold">
            {dictionary('Section.Institute.overview_title', { name: institution.name })}
          </Text>
          <Text>
            {institution.description}
          </Text>
        </Stack>
        <Stack>
          <Text size="500" weight="semibold">
            {dictionary('Section.Institute.overview_quality_title', { name: institution.name })}
          </Text>
          <InstituteOverall dictionary={dictionary} instituteSummary={instituteSummary} />
        </Stack>
      </Stack>
      <Stack className="w-full md:w-3/12 top-5 border border-border-interactive rounded-lg p-4" position="sticky" gap="md">
        {institution.websiteUrl && (
          <InstituteOverviewItem icon={<Icons iconName="link" size={20} />} title={institution.websiteUrl} href={institution.websiteUrl} />
        )}
      </Stack>
    </Group>
  );
};

export { InstituteOverview };
