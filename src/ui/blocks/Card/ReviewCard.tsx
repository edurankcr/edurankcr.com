import { Avatar, Group, Link, Stack, Stars, Text } from '@/components';
import type { IFormatter, ITranslations } from '@/types';

type ReviewCardProps = {
  user: {
    name: string;
    lastName: string;
    userName: string;
    avatarUrl?: string;
  };
  review: {
    reviewId: string;
    rating: number;
    experienceText: string;
    createdAt: Date;
    isVerified?: boolean;
  };
} & ITranslations & IFormatter;

export const ReviewCard = ({ user, review, dictionary, formatter }: ReviewCardProps) => {
  const getName = () => {
    if (user.lastName) {
      return `${user.name} ${user.lastName}`;
    }
    return user.name;
  };
  const getRelativeTime = () => {
    const date = review.createdAt || new Date();
    return formatter.relativeTime(date);
  };
  return (
    <Stack boxShadow="card" padding="md" rounded="lg" width="full" className="review-card">
      <Group flexWrap="nowrap" justifyContent="start" preventGrowOverflow={false} overflow="hidden">
        <Avatar user={user} />
        <Stack gap="none" overflow="hidden">
          <Text truncate>
            <Text as="span" weight="semibold">{getName()}</Text>
            {' '}
            {dictionary('Helpers.User.action_review')}
          </Text>
          <Text color="secondary" size="sm">
            {getRelativeTime()}
          </Text>
        </Stack>
      </Group>
      <Stack>
        <Text>
          “
          {review.experienceText}
          ”
        </Text>
        <Group preventGrowOverflow={false} justifyContent="between">
          <Link href="#" text={{ underline: true, weight: 'semibold', size: 'sm' }}>
            {dictionary('Helpers.User.action_read_more')}
          </Link>
          <Stars rate={review.rating} />
        </Group>
      </Stack>
    </Stack>
  );
};
