import type { ReactNode } from 'react';

import { Box, Group, Icons, Stars, Text } from '@/components';
import type { IDictionary, InstitutionDetailsResponse } from '@/types';

import styles from './Institute.module.css';

type InstituteOverallItemProps = {
  icon: ReactNode;
  title: string;
  value: number;
};

const InstituteOverallItem = ({ icon, title, value }: InstituteOverallItemProps) => {
  return (
    <Group preventGrowOverflow={false} flexGrow justifyContent="between" gap="md" flexWrap="nowrap">
      <Group preventGrowOverflow={false} flexGrow justifyContent="start">
        {icon}
        <Text weight="semibold">
          {title}
        </Text>
      </Group>
      <Group preventGrowOverflow={false} justifyContent="start">
        <Text weight="semibold">
          {value}
        </Text>
        <Stars rate={value} />
      </Group>
    </Group>
  );
};

type InstituteOverallProps = {
  instituteSummary: InstitutionDetailsResponse['aggregateRatings'];
} & IDictionary;

const InstituteOverall = (params: InstituteOverallProps) => {
  const { dictionary, instituteSummary } = params;
  return (
    <Box className={styles.table}>
      <InstituteOverallItem icon={<Icons iconName="star" />} title={dictionary('Global.Vote.reputation')} value={instituteSummary.reputation} />
      <InstituteOverallItem icon={<Icons iconName="briefcase" />} title={dictionary('Global.Vote.opportunities')} value={instituteSummary.opportunities} />
      <InstituteOverallItem icon={<Icons iconName="moodSmile" />} title={dictionary('Global.Vote.happiness')} value={instituteSummary.happiness} />
      <InstituteOverallItem icon={<Icons iconName="mapPin" />} title={dictionary('Global.Vote.location')} value={instituteSummary.location} />
      <InstituteOverallItem icon={<Icons iconName="buildingCommunity" />} title={dictionary('Global.Vote.facilities')} value={instituteSummary.facilities} />
      <InstituteOverallItem icon={<Icons iconName="usersGroup" />} title={dictionary('Global.Vote.social')} value={instituteSummary.social} />
      <InstituteOverallItem icon={<Icons iconName="heartHandshake" />} title={dictionary('Global.Vote.clubs')} value={instituteSummary.clubs} />
      <InstituteOverallItem icon={<Icons iconName="wifi" />} title={dictionary('Global.Vote.internet')} value={instituteSummary.internet} />
      <InstituteOverallItem icon={<Icons iconName="shieldCheck" />} title={dictionary('Global.Vote.security')} value={instituteSummary.safety} />
      <InstituteOverallItem icon={<Icons iconName="salad" />} title={dictionary('Global.Vote.food')} value={instituteSummary.food} />
    </Box>
  );
};

export { InstituteOverall };
