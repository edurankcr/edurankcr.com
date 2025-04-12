import React from 'react';

import { Group, Link, Stack, Text } from '@/components';
import { AppRoutes } from '@/constants';
import type { IFormatter, ITranslations, ReviewTeacherProps } from '@/types';
import { BadgeReview } from '@/ui';
import { getExperienceText } from '@/utils';

import { ActivityCardFooter, ActivityCardHeader } from './ActivityCard.commons';

type Props = ReviewTeacherProps & ITranslations & IFormatter;

export const ActivityCardTeacher = ({ review, dictionary, formatter }: Props) => {
  return (
    <Stack rounded="lg" width="full" className="review-card" justifyContent="start" height="fit">
      <ActivityCardHeader dictionary={dictionary} formatter={formatter} review={review} />
      <Stack gap="sm">
        <Group preventGrowOverflow={false} justifyContent="start" gap="sm" flexWrap="nowrap" overflow="auto">
          <Link
            href={AppRoutes.Global.Teachers.Profile(review.teacherId)}
            text={{ weight: 'semibold', truncate: true }}
          >
            {review.teacherName}
            {' '}
            {review.teacherLastName}
          </Link>
          <Text color="secondary">
            &#183;
          </Text>
          <Text weight="medium" color="secondary" wrap="nowrap">
            &#x1F393;
            {' '}
            {dictionary('Elements.Review.teacher')}
          </Text>
        </Group>
        <Text wrap="pretty">
          &ldquo;
          {getExperienceText(review.experienceText)}
          &rdquo;
        </Text>
        <Group preventGrowOverflow={false} flexGrow justifyContent="start" gap="md">
          <BadgeReview title={dictionary('Elements.Review.CourseMode.title')} value={dictionary(`Elements.Review.CourseMode.${review.courseMode}`)} />
          <BadgeReview title={dictionary('Elements.Review.FreeCourse.title')} value={dictionary(`Elements.Review.FreeCourse.${review.freeCourse}`)} />
          <BadgeReview title={dictionary('Elements.Review.MandatoryAttendance.title')} value={dictionary(`Elements.Review.MandatoryAttendance.${review.mandatoryAttendance}`)} />
        </Group>
      </Stack>
      <ActivityCardFooter dictionary={dictionary} value={review.professorRating} link={AppRoutes.Global.Teachers.Profile(review.teacherId)} />
    </Stack>
  );
};
