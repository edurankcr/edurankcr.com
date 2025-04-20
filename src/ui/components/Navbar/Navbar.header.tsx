import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Group,
  Icons,
  Text,
} from '@/components';
import { NAVBAR_SECTIONS } from '@/constants';
import type { ITranslations } from '@/types';

type NavbarHeaderProps = ITranslations;

const NavbarHeader = (params: NavbarHeaderProps) => {
  const { dictionary } = params;
  return (
    <>
      {Object.entries(NAVBAR_SECTIONS).map(([key, section]) => (
        <DropdownMenu key={key}>
          <DropdownMenuTrigger>
            <Group preventGrowOverflow={false} flexWrap="nowrap" gap="md">
              {section.iconName && <Icons iconName={section.iconName} size={18} />}
              <Text>
                {dictionary(section.titleKey)}
              </Text>
            </Group>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[220px] w-[220px] max-w-[220px]">
            {section.items.map(item => (
              <DropdownMenuItem key={item.titleKey} href={item.link}>
                <Group className="size-8 rounded-md text-text-primary bg-background-secondary">
                  {item.iconName && <Icons iconName={item.iconName} size={18} />}
                </Group>
                {dictionary(item.titleKey)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </>
  );
};

export { NavbarHeader };
