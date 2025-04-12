import { IconDots } from '@tabler/icons-react';

import {
  Avatar,
  Box,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Group,
  Stack,
  Text,
} from '@/components';
import type { IDictionary, IFormatter } from '@/types';

type InstituteReviewBadgeItemProps = {
  title: string;
  value: number;
};

const InstituteReviewBadgeItem = ({ title, value }: InstituteReviewBadgeItemProps) => {
  return (
    <Box className="px-2.5 py-1 border border-border-interactive rounded-sm text-sm text-text-secondary font-semibold">
      {title}
      {' '}
      {value}
    </Box>
  );
};

type InstituteReviewListItemProps = {
  avatarUrl: string;
  name: string;
  createdAt: string;
  text: string;
  reputation: number;
  happiness: number;
  facilities: number;
  clubs: number;
  security: number;
  opportunities: number;
  location: number;
  social: number;
  internet: number;
  food: number;
} & IDictionary & IFormatter;

const InstituteReviewListItem = (props: InstituteReviewListItemProps) => {
  const {
    dictionary,
    formatter,
    avatarUrl,
    name,
    createdAt,
    text,
    reputation = 0,
    happiness = 0,
    facilities = 0,
    clubs = 0,
    security = 0,
    opportunities = 0,
    location = 0,
    social = 0,
    internet = 0,
    food = 0,
  } = props;
  return (
    <Stack className="border-b border-border-interactive pb-4 md:pb-12">
      <Group preventGrowOverflow={false} flexGrow justifyContent="between" flexWrap="nowrap">
        <Group preventGrowOverflow={false} flexGrow justifyContent="start" gap="lg">
          <Avatar
            user={{ avatarUrl, userName: name }}
            width={48}
            height={48}
            className="rounded-full min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px]"
          />
          <Stack gap="none">
            <Text weight="semibold">{name}</Text>
            <Text size="sm" color="secondary">
              {formatter.relativeTime(new Date(createdAt))}
            </Text>
          </Stack>
        </Group>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button bgColor="ghostInteractiveSecondary" width="md" height="md" paddingX="none" borderRadius="full">
              <IconDots />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[220px] w-[220px] max-w-[220px]">
            <DropdownMenuItem>
              {dictionary('Elements.Institute.Review.Actions.report')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Group>
      <Text>
        {text}
      </Text>
      <Group preventGrowOverflow={false} flexGrow justifyContent="start" gap="md">
        <InstituteReviewBadgeItem title={dictionary('Elements.Institute.Overall.Items.reputation')} value={reputation} />
        <InstituteReviewBadgeItem title={dictionary('Elements.Institute.Overall.Items.happiness')} value={happiness} />
        <InstituteReviewBadgeItem title={dictionary('Elements.Institute.Overall.Items.facilities')} value={facilities} />
        <InstituteReviewBadgeItem title={dictionary('Elements.Institute.Overall.Items.clubs')} value={clubs} />
        <InstituteReviewBadgeItem title={dictionary('Elements.Institute.Overall.Items.security')} value={security} />
        <InstituteReviewBadgeItem title={dictionary('Elements.Institute.Overall.Items.opportunities')} value={opportunities} />
        <InstituteReviewBadgeItem title={dictionary('Elements.Institute.Overall.Items.location')} value={location} />
        <InstituteReviewBadgeItem title={dictionary('Elements.Institute.Overall.Items.social')} value={social} />
        <InstituteReviewBadgeItem title={dictionary('Elements.Institute.Overall.Items.internet')} value={internet} />
        <InstituteReviewBadgeItem title={dictionary('Elements.Institute.Overall.Items.food')} value={food} />
      </Group>
    </Stack>
  );
};

type InstituteReviewProps = IDictionary & IFormatter;

export const InstituteReviewList = ({ dictionary, formatter }: InstituteReviewProps) => {
  return (
    <Stack>
      <InstituteReviewListItem
        avatarUrl="https://i.pravatar.cc/150?img=1"
        name="John Doe"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        createdAt="2023-10-01T12:00:00Z"
        reputation={3.8}
        happiness={4.2}
        facilities={4.5}
        clubs={3.5}
        security={4.0}
        opportunities={4.8}
        location={4.2}
        social={4.0}
        internet={4.5}
        food={4.8}
        dictionary={dictionary}
        formatter={formatter}
      />
      <InstituteReviewListItem
        avatarUrl="https://i.pravatar.cc/150?img=2"
        name="Jane Smith"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        createdAt="2023-10-02T12:00:00Z"
        reputation={4.0}
        happiness={4.5}
        facilities={4.0}
        clubs={3.8}
        security={4.2}
        opportunities={4.5}
        location={4.0}
        social={4.5}
        internet={4.8}
        food={4.2}
        dictionary={dictionary}
        formatter={formatter}
      />
      <InstituteReviewListItem
        avatarUrl="https://i.pravatar.cc/150?img=3"
        name="Alice Johnson"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        createdAt="2023-10-03T12:00:00Z"
        reputation={4.5}
        happiness={4.8}
        facilities={4.2}
        clubs={4.0}
        security={4.5}
        opportunities={4.2}
        location={4.8}
        social={4.5}
        internet={4.0}
        food={4.5}
        dictionary={dictionary}
        formatter={formatter}
      />
    </Stack>
  );
};
