import { Group, Icons, Stack, Text } from '@/components';
import { Link } from '@/components/Navigation/Navigation';
import type { ICons } from '@/types';

type GlobalSearchInputResultsContentItemProps = {
  title: string;
  subtitle: string;
  href: string;
  overall: string;
} & ICons;

const GlobalSearchInputResultsContentItem = (params: GlobalSearchInputResultsContentItemProps) => {
  const { iconName, title, subtitle, overall, href } = params;
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
          <Group preventGrowOverflow={false} flexWrap="nowrap" overflow="hidden" justifyContent="start" gap="xs">
            <Text color="secondary" size="sm" truncate>
              {subtitle}
            </Text>
            <Text color="secondary" className="hidden md:inline-block" size="sm">
              &#183;
            </Text>
            <Group preventGrowOverflow={false} flexWrap="nowrap" overflow="hidden" justifyContent="start" gap="xs" flexGrow>
              <Icons iconName="starFilled" size={14} className="text-text-secondary min-w-[14px]" />
              <Text color="secondary" size="sm" wrap="nowrap" truncate>
                {overall}
              </Text>
            </Group>
          </Group>
        </Stack>
      </Group>
    </Link>
  );
};

export { GlobalSearchInputResultsContentItem };
