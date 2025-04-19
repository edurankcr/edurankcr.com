import React, { useCallback } from 'react';

import { Box, Group, Icons } from '@/components';
import { Link } from '@/components/Navigation/Navigation';
import { SETTINGS_SECTIONS } from '@/constants';
import type { IPathname, ITranslations } from '@/types';

type SettingsContentNavbarProps = ITranslations & IPathname;

const SettingsContentNavbar = (params: SettingsContentNavbarProps) => {
  const { dictionary, pathname } = params;
  const getIsActive = useCallback((sectionLink: string) => {
    return sectionLink === pathname;
  }, [pathname]);
  return (
    <Box
      gap="none"
      fontSize="sm"
      fontWeight="semibold"
      width="full"
      flexWrap="nowrap"
      className="flex flex-row md:flex-col overflow-x-scroll md:overflow-x-hidden md:max-w-1/4"
    >
      {Object.entries(SETTINGS_SECTIONS).map(([key, section]) => (
        <Link href={section.link || '#'} key={key}>
          <Group
            flexGrow
            flexWrap="nowrap"
            justifyContent="start"
            padding="md"
            overflow="hidden"
            preventGrowOverflow={false}
            data-active={section.link ? getIsActive(section.link) : false}
            className="text-nowrap border border-transparent text-text-secondary data-[active=true]:border-border-interactive data-[active=true]:text-text-primary hover:text-text-primary rounded-lg transition-all duration-300 ease-in-out"
          >
            <Icons iconName={section.iconName} />
            {dictionary(section.titleKey)}
          </Group>
        </Link>
      ))}
    </Box>
  );
};

export { SettingsContentNavbar };
