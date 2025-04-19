import React from 'react';

import { Group, Icons } from '@/components';

const SettingsContentLoading = () => {
  return (
    <Group className="h-[300px]">
      <Icons iconName="loader" className="spinner animate-spin" />
    </Group>
  );
};

export { SettingsContentLoading };
