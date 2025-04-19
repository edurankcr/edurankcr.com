import React from 'react';

import { Box, Stack } from '@/components';
import type { IChildren, IPathname, ITranslations } from '@/types';
import { Settings } from '@/ui';

import { SettingsContentNavbar } from './Commons';

type SettingsContentProps = {
  title: string;
  paragraph?: string;
} & IChildren & ITranslations & IPathname;

const SettingsContent = (params: SettingsContentProps) => {
  const { title, paragraph, children, pathname, dictionary } = params;

  return (
    <Settings
      title={title}
      paragraph={paragraph}
    >
      <Box className="flex flex-col md:flex-row" gap="section">
        <SettingsContentNavbar pathname={pathname} dictionary={dictionary} />
        <Stack flexGrow>
          {children}
        </Stack>
      </Box>
    </Settings>
  );
};

export { SettingsContent };
