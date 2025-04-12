import { IconStarFilled } from '@tabler/icons-react';

import {
  Group,
  Stack,
  Text,
} from '@/components';
import type { IDictionary, InstituteProps } from '@/types';

type InstituteHeadingProps = InstituteProps & IDictionary;

export const InstituteHeading = (props: InstituteHeadingProps) => {
  const { institute, dictionary } = props;
  return (
    <Stack flexGrow>
      <Text size="600-res" weight="semibold" wrap="pretty">
        {institute.name}
      </Text>
      <Group preventGrowOverflow={false} className="text-sm font-medium" justifyContent="start">
        <Group preventGrowOverflow={false} gap="sm">
          <Group preventGrowOverflow={false} gap="md">
            <IconStarFilled size={20} className="text-brand-neon" />
            <Text>4.8</Text>
          </Group>
          <Text>
            &#40;
            <span className="underline">
              178 reviews
            </span>
            &#41;
          </Text>
        </Group>
        <Text color="secondary">
          &#183;
        </Text>
        <Text>
          {dictionary(`Helpers.Institute.Type.${institute.type}` as any)}
        </Text>
        <Text color="secondary">
          &#183;
        </Text>
        <Text>
          {dictionary(`Helpers.Province.${institute.province}` as any)}
        </Text>
      </Group>
    </Stack>
  );
};
