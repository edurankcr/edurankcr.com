import { IconGps, IconLink, IconPhone } from '@tabler/icons-react';
import type { ReactNode } from 'react';

import { Box, Button, Group, Separator, Stack, Text } from '@/components';
import type { IDictionary, InstituteProps } from '@/types';

import { InstituteOverall } from './Overview.overall';

type InstituteOverviewItemProps = {
  title: string;
  icon: ReactNode;
};

const InstituteOverviewItem = ({ title, icon }: InstituteOverviewItemProps) => {
  return (
    <Group preventGrowOverflow={false} flexGrow justifyContent="between" gap="xs" flexWrap="nowrap">
      <Text weight="semibold">
        {title}
      </Text>
      <Box>
        {icon}
      </Box>
    </Group>
  );
};

type InstituteOverviewProps = InstituteProps & IDictionary;

export const InstituteOverview = ({ institute, dictionary }: InstituteOverviewProps) => {
  return (
    <section id="overview" className="flex flex-col gap-4 md:flex-row lg:gap-8 relative items-start">
      <Stack className="w-full md:w-9/12" gap="section">
        <Stack>
          <Text size="500" weight="semibold">
            {dictionary('Elements.Institute.Overview.title', { name: institute.name })}
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </Text>
        </Stack>
        <Stack>
          <Text size="500" weight="semibold">
            {dictionary('Elements.Institute.Overall.title', { name: institute.name })}
          </Text>
          <InstituteOverall dictionary={dictionary} />
        </Stack>
      </Stack>
      <Stack className="w-full md:w-3/12 top-5 border border-border-interactive rounded-lg p-4" position="sticky" gap="md">
        <InstituteOverviewItem icon={<IconLink size={20} />} title="www.edurankcr.com/es" />
        <Separator bgColor="interactive" />
        <InstituteOverviewItem icon={<IconPhone size={20} />} title="(506) 6183-2853" />
        <Separator bgColor="interactive" />
        <InstituteOverviewItem icon={<IconGps size={20} />} title="Heredia, Costa Rica" />
        <Button bgColor="interactiveSecondary" className="mt-4">
          {dictionary('Elements.Institute.Overview.button')}
        </Button>
      </Stack>
    </section>
  );
};
