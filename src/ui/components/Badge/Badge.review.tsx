import { Box } from '@/components';

type BadgeReviewProps = {
  title: string;
  value: number;
};

export const BadgeReview = ({ title, value }: BadgeReviewProps) => {
  return (
    <Box className="px-2.5 py-1 border border-border-interactive rounded-sm text-sm text-text-secondary font-semibold flex-nowrap flex">
      {title}
      &nbsp;
      {value}
    </Box>
  );
};

type BadgeReviewListProps = {
  reviews: BadgeReviewProps[];
};

export const BadgeReviewList = ({ reviews }: BadgeReviewListProps) => {
  return reviews.map((review, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <BadgeReview key={index} title={review.title} value={review.value} />
  ));
};
