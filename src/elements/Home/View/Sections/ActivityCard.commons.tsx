import React from 'react';

import { Avatar, Group, Link, Skeleton, Stack, Stars, Text } from '@/components';
import { AppRoutes } from '@/constants';
import { getFullName, getRelativeTime } from '@/utils';

export const ActivityCardHeader = ({
  review,
  dictionary,
  formatter,
}: {
  review: any;
  dictionary: any;
  formatter: any;
}) => {
  return (
    <Group flexWrap="nowrap" justifyContent="start" preventGrowOverflow={false} overflow="hidden">
      <Avatar user={{ avatarUrl: review.avatarUrl, userName: review.userName }} height={48} width={48} className="rounded-full min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px]" />
      <Stack gap="none" overflow="hidden">
        <Text truncate>
          {dictionary.rich('Elements.Review.Actions.wrote', {
            userFullName: getFullName(review.userFirstName, review.userLastName),
            b: (chunks: any) => <b className="font-semibold">{chunks}</b>,
            link: (chunks: any) => (
              <Link
                href={AppRoutes.Global.Profile(review.userName)}
                text={{ weight: 'medium' }}
              >
                {chunks}
              </Link>
            ),
          })}
        </Text>
        <Text color="secondary" size="sm">
          {getRelativeTime(formatter, review.createdAt)}
        </Text>
      </Stack>
    </Group>
  );
};

export const ActivityCardFooter = ({
  dictionary,
  link,
  value,
}: {
  dictionary: any;
  link: any;
  value: any;
}) => {
  return (
    <Stack>
      <Group preventGrowOverflow={false} justifyContent="between">
        <Link href={link} text={{ underline: true, weight: 'semibold' }}>
          {dictionary('Elements.Review.Actions.read_more')}
        </Link>
        <Group preventGrowOverflow={false} gap="md">
          <Text weight="semibold">{value}</Text>
          <Stars rate={value} />
        </Group>
      </Group>
    </Stack>
  );
};

export const ActivityCardSkeleton = () => {
  return Array.from({ length: 12 }, (_, index) => (
    <Skeleton key={index} className="h-[264px] review-card" />
  ));
};
