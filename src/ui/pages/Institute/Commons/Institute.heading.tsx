import {
  Group,
  Icons,
  Stack,
  Text,
} from '@/components';
import type { IDictionary, IInstituteDetails } from '@/types';

type InstituteHeadingProps = IInstituteDetails & IDictionary;

const InstituteHeading = (props: InstituteHeadingProps) => {
  const { institute, instituteSummary, dictionary } = props;
  return (
    <Stack flexGrow>
      <Text size="600-res" weight="semibold" wrap="pretty">
        {institute.name}
      </Text>
      <Group preventGrowOverflow={false} className="text-sm font-medium" justifyContent="start">
        <Group preventGrowOverflow={false} gap="sm">
          <Group preventGrowOverflow={false} gap="md">
            <Icons iconName="starFilled" size={20} className="text-brand-neon" />
            <Text>
              {instituteSummary.totalAverageScore}
            </Text>
          </Group>
          <Text>
            &#40;
            <span className="underline">
              {dictionary('Section.Institute.reviews', {
                total: instituteSummary.totalReviews,
              })}
            </span>
            &#41;
          </Text>
        </Group>
        <Text color="secondary">
          &#183;
        </Text>
        <Text>
          {dictionary(`Global.Institute.${institute.type}` as any)}
        </Text>
        <Text color="secondary">
          &#183;
        </Text>
        <Text>
          {dictionary(`Global.Province.${institute.province}` as any)}
        </Text>
      </Group>
    </Stack>
  );
};

export { InstituteHeading };
