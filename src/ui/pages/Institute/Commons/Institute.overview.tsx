import type { ReactNode } from 'react';

import { Box, Group, Icons, Link, Separator, Stack, Text } from '@/components';
import type { IDictionary, IInstituteDetails } from '@/types';

import { InstituteOverall } from './Institute.overviewAll';

type InstituteOverviewItemProps = {
  title: string;
  icon: ReactNode;
  href?: string;
};

const InstituteOverviewItem = (params: InstituteOverviewItemProps) => {
  const { icon, title, href } = params;

  return (
    <Group preventGrowOverflow={false} flexGrow justifyContent="between" gap="xs" flexWrap="nowrap">
      <Link href={href || '#'} text={{ weight: href ? 'semibold' : 'normal' }} target="_blank" rel="noopener noreferrer">
        {title}
      </Link>
      <Box>
        {icon}
      </Box>
    </Group>
  );
};

type InstituteOverviewProps = IInstituteDetails & IDictionary;

const InstituteOverview = (params: InstituteOverviewProps) => {
  const { dictionary, institute, instituteSummary } = params;
  return (
    <Group flexDirection="rowRes" preventGrowOverflow={false} flexGrow gap="content" flexWrap="nowrap" position="relative" alignItems="start">
      <Stack className="w-full md:w-9/12" gap="section">
        <Stack>
          <Text size="500" weight="semibold">
            {dictionary('Section.Institute.overview_title', { name: institute.name })}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </Text>
        </Stack>
        <Stack>
          <Text size="500" weight="semibold">
            {dictionary('Section.Institute.overview_quality_title', { name: institute.name })}
          </Text>
          <InstituteOverall dictionary={dictionary} instituteSummary={instituteSummary} />
        </Stack>
      </Stack>
      <Stack className="w-full md:w-3/12 top-5 border border-border-interactive rounded-lg p-4" position="sticky" gap="md">
        {institute.url && (
          <InstituteOverviewItem icon={<Icons iconName="link" size={20} />} title={institute.url} href={institute.url} />
        )}
        <Separator bgColor="interactive" />
        <InstituteOverviewItem icon={<Icons iconName="phone" size={20} />} title="(506) 6183-2853" />
        <Separator bgColor="interactive" />
        <InstituteOverviewItem icon={<Icons iconName="gps" size={20} />} title="Heredia, Costa Rica" />
      </Stack>
    </Group>
  );
};

export { InstituteOverview };
