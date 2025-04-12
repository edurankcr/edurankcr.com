import React from 'react';

import { Group, Link, Stack, Text } from '@/components';
import { AppRoutes, InstituteBadgeList } from '@/constants';
import type { IFormatter, ITranslations, ReviewInstituteProps } from '@/types';
import { BadgeReviewList } from '@/ui';
import { getExperienceAverage, getExperienceText } from '@/utils';

import { ActivityCardFooter, ActivityCardHeader } from './ActivityCard.commons';

type Props = ReviewInstituteProps & ITranslations & IFormatter;

export const ActivityCardInstitute = ({ review, dictionary, formatter }: Props) => {
  const {
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
  } = review;
  const reviewList = InstituteBadgeList(dictionary, {
    reputation,
    happiness,
    facilities,
    clubs,
    security,
    opportunities,
    location,
    social,
    internet,
    food,
  });
  return (
    <Stack rounded="lg" width="full" className="review-card">
      <ActivityCardHeader dictionary={dictionary} formatter={formatter} review={review} />
      <Stack gap="sm">
        <Group preventGrowOverflow={false} justifyContent="start" gap="sm" flexWrap="nowrap" overflow="auto">
          <Link
            href={AppRoutes.Global.Institutes.Profile(review.instituteId)}
            text={{ weight: 'semibold', truncate: true }}
          >
            {review.instituteName}
          </Link>
          <Text color="secondary">
            &#183;
          </Text>
          <Text weight="medium" color="secondary" wrap="nowrap">
            &#127979;
            {' '}
            {dictionary(`Elements.Review.InstituteTypes.${review.instituteType}`)}
          </Text>
        </Group>
        <Text wrap="pretty">
          &ldquo;
          {getExperienceText(review.experienceText)}
          &rdquo;
        </Text>
        <Group preventGrowOverflow={false} flexGrow justifyContent="start" gap="md">
          <BadgeReviewList reviews={reviewList} />
        </Group>
      </Stack>
      <ActivityCardFooter
        dictionary={dictionary}
        value={getExperienceAverage(5, [
          review.reputation,
          review.happiness,
          review.facilities,
          review.clubs,
          review.security,
          review.opportunities,
          review.location,
          review.social,
          review.internet,
          review.food,
        ])}
        link={AppRoutes.Global.Institutes.Profile(review.instituteId)}
      />
    </Stack>
  );
};
