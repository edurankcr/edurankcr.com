import {
  IconBriefcase,
  IconBuildingCommunity,
  IconHeartHandshake,
  IconMapPin,
  IconMoodSmile,
  IconSalad,
  IconShieldCheck,
  IconStar,
  IconUsersGroup,
  IconWifi,
} from '@tabler/icons-react';
import type { ReactNode } from 'react';

import { Box, Group, Stars, Text } from '@/components';
import type { IDictionary } from '@/types';

import styles from './Overview.module.css';

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

type InstituteOverallProps = IDictionary;

export const InstituteOverall = ({ dictionary }: InstituteOverallProps) => {
  return (
    <Box className={styles.table}>
      <InstituteOverallItem icon={<IconStar />} title={dictionary('Elements.Institute.Overall.Items.reputation')} value={1} />
      <InstituteOverallItem icon={<IconBriefcase />} title={dictionary('Elements.Institute.Overall.Items.opportunities')} value={2} />
      <InstituteOverallItem icon={<IconMoodSmile />} title={dictionary('Elements.Institute.Overall.Items.happiness')} value={3} />
      <InstituteOverallItem icon={<IconMapPin />} title={dictionary('Elements.Institute.Overall.Items.location')} value={4} />
      <InstituteOverallItem icon={<IconBuildingCommunity />} title={dictionary('Elements.Institute.Overall.Items.facilities')} value={5} />
      <InstituteOverallItem icon={<IconUsersGroup />} title={dictionary('Elements.Institute.Overall.Items.social')} value={1.5} />
      <InstituteOverallItem icon={<IconHeartHandshake />} title={dictionary('Elements.Institute.Overall.Items.clubs')} value={2.5} />
      <InstituteOverallItem icon={<IconWifi />} title={dictionary('Elements.Institute.Overall.Items.internet')} value={3.5} />
      <InstituteOverallItem icon={<IconShieldCheck />} title={dictionary('Elements.Institute.Overall.Items.security')} value={4.5} />
      <InstituteOverallItem icon={<IconSalad />} title={dictionary('Elements.Institute.Overall.Items.food')} value={5} />
    </Box>
  );
};
