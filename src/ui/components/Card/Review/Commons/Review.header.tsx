import React from 'react';

import { Avatar, Group, Link, Stack, Text } from '@/components';
import { AppRoutes } from '@/constants';
import type { ITranslations, User } from '@/types';
import { getFullName } from '@/utils';

type ReviewCardHeaderProps = {
  user: Pick<User, 'avatarUrl' | 'userName' | 'name' | 'lastName'>;
  createdAt: string;
} & ITranslations;

const ReviewCardHeader = (props: ReviewCardHeaderProps) => {
  const { user, createdAt, dictionary } = props;
  return (
    <Group flexWrap="nowrap" justifyContent="start" preventGrowOverflow={false} overflow="hidden">
      <Avatar user={user} size="md" />
      <Stack gap="none" overflow="hidden">
        <Text truncate>
          {dictionary.rich('Card.Review.wrote', {
            userFullName: getFullName(user.name, user.lastName),
            link: (chunks: any) => (
              <Link
                href={AppRoutes.Global.Profile(user.userName)}
                text={{ weight: 'medium' }}
              >
                {chunks}
              </Link>
            ),
            b: (chunks: any) => <b className="font-semibold">{chunks}</b>,
          })}
        </Text>
        <Text color="secondary" size="sm">
          {createdAt}
        </Text>
      </Stack>
    </Group>
  );
};

export { ReviewCardHeader };
