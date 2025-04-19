import { Group, Icons, Stack, Text } from '@/components';
import { Link } from '@/components/Navigation/Navigation';
import type { ICons } from '@/types';

type GlobalSearchInputResultsContentItemProps = {
  title: string;
  subtitle: string;
  href: string;
} & ICons;

const GlobalSearchInputResultsContentItem = (params: GlobalSearchInputResultsContentItemProps) => {
  const { iconName, title, subtitle, href } = params;
  return (
    <Link href={href}>
      <Group preventGrowOverflow={false} flexWrap="nowrap" flexGrow>
        <Group bgBackground="secondary" rounded="md" className="size-[40px] min-w-[40px] max-w-[40px] md:size-[48px] md:min-w-[48px] md:max-w-[48px]">
          <Icons iconName={iconName} />
        </Group>
        <Stack flexWrap="nowrap" flexGrow gap="none" overflow="hidden">
          <Text weight="semibold" truncate>
            {title}
          </Text>
          <Text color="secondary" size="sm">
            {subtitle}
          </Text>
        </Stack>
      </Group>
    </Link>
  );
};

export { GlobalSearchInputResultsContentItem };
