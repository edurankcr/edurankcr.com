import React from 'react';

import type { IChildren } from '@/types';
import { FormFooter, SettingsHeader } from '@/ui';

type SettingsProps = {
  title: string;
  paragraph?: string;
  footer?: any;
} & IChildren;

const Settings = (params: SettingsProps) => {
  const { title, paragraph, children, footer } = params;
  return (
    <>
      <SettingsHeader title={title} paragraph={paragraph} />
      {children}
      {footer && (
        <FormFooter>
          {footer}
        </FormFooter>
      )}
    </>
  );
};

export { Settings };
