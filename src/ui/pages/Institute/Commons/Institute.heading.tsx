import {
  Group,
  Icons,
  Stack,
  Text,
} from '@/components';
import type { IDictionary, InstitutionDetailsResponse } from '@/types';

type InstituteHeadingProps = {
  institution: InstitutionDetailsResponse['institution'];
  instituteSummary: InstitutionDetailsResponse['aggregateRatings'];
} & IDictionary;

const InstituteHeading = (props: InstituteHeadingProps) => {
  const { institution, instituteSummary, dictionary } = props;
  return (
    <Stack flexGrow>
      <Text size="600-res" weight="semibold" wrap="pretty">
        {institution.name}
      </Text>
      <Group preventGrowOverflow={false} className="text-sm font-medium" justifyContent="start">
        <Group preventGrowOverflow={false} gap="sm">
          <Group preventGrowOverflow={false} gap="md">
            <Icons iconName="starFilled" size={20} className="text-brand-neon" />
            <Text>
              {instituteSummary.overallAverage}
            </Text>
          </Group>
          <Text>
            &#40;
            <span className="underline">
              {dictionary('Section.Institute.reviews', {
                total: instituteSummary.reviewCount,
              })}
            </span>
            &#41;
          </Text>
        </Group>
        <Text color="secondary">
          &#183;
        </Text>
        <Text>
          {dictionary(`Global.Institute.${institution.type}` as any)}
        </Text>
        <Text color="secondary">
          &#183;
        </Text>
        <Text>
          {dictionary(`Global.Province.${institution.province}` as any)}
        </Text>
      </Group>
    </Stack>
  );
};

export { InstituteHeading };
