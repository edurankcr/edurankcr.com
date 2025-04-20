import {
  Avatar,
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Group,
  Icons,
  Stack,
  Text,
} from '@/components';
import type { IFormatter, InstitutionReviewItem, ITranslations } from '@/types';
import { getFullName } from '@/utils';

type ReviewFullCardInstituteProps = InstitutionReviewItem & ITranslations & IFormatter;

const ReviewFullCardInstitute = (props: ReviewFullCardInstituteProps) => {
  const {
    dictionary,
    formatter,
    review,
    user,
  } = props;

  return (
    <Stack className="border-b border-border-interactive pb-4 md:pb-12">
      <Group preventGrowOverflow={false} flexGrow justifyContent="between" flexWrap="nowrap">
        <Group preventGrowOverflow={false} flexGrow justifyContent="start" gap="lg">
          <Avatar
            user={{ ...user }}
            width={48}
            height={48}
            className="rounded-full min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px]"
          />
          <Stack gap="none">
            <Text weight="semibold">
              {getFullName(user.name, user.lastName)}
            </Text>
            <Text size="sm" color="secondary">
              {formatter.relativeTime(new Date(review.createdAt))}
            </Text>
          </Stack>
        </Group>
        <DropdownMenu>
          <DropdownMenuTrigger hasIcon={false} asChild>
            <Button bgColor="ghostInteractiveSecondary" width="md" height="md" paddingX="none" borderRadius="full">
              <Icons iconName="dots" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[220px] w-[220px] max-w-[220px]">
            <DropdownMenuItem>
              {dictionary('Button.report')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Group>
      <Group preventGrowOverflow={false} flexGrow justifyContent="start" gap="md">
        <Badge variant="secondary">
          {dictionary('Section.Institute.reviews_reputation', { value: formatter.number(review.reputation) })}
        </Badge>
        <Badge variant="secondary">
          {dictionary('Section.Institute.reviews_happiness', { value: formatter.number(review.happiness) })}
        </Badge>
        <Badge variant="secondary">
          {dictionary('Section.Institute.reviews_facilities', { value: formatter.number(review.facilities) })}
        </Badge>
        <Badge variant="secondary">
          {dictionary('Section.Institute.reviews_clubs', { value: formatter.number(review.clubs) })}
        </Badge>
        <Badge variant="secondary">
          {dictionary('Section.Institute.reviews_security', { value: formatter.number(review.safety) })}
        </Badge>
        <Badge variant="secondary">
          {dictionary('Section.Institute.reviews_opportunities', { value: formatter.number(review.opportunities) })}
        </Badge>
        <Badge variant="secondary">
          {dictionary('Section.Institute.reviews_location', { value: formatter.number(review.location) })}
        </Badge>
        <Badge variant="secondary">
          {dictionary('Section.Institute.reviews_social', { value: formatter.number(review.social) })}
        </Badge>
        <Badge variant="secondary">
          {dictionary('Section.Institute.reviews_internet', { value: formatter.number(review.internet) })}
        </Badge>
        <Badge variant="secondary">
          {dictionary('Section.Institute.reviews_food', { value: formatter.number(review.food) })}
        </Badge>
      </Group>
      <Text>
        {review.testimony}
      </Text>
    </Stack>
  );
};

export { ReviewFullCardInstitute };
