'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerForm,
  usePathname,
} from '@/components';
import { useUserStore } from '@/stores';
import {
  FormPassword,
  SettingsContent,
  SettingsContentLoading,
} from '@/ui';

const PageSettingsSecurity = () => {
  const dictionary = useTranslations('Base');
  const pathname = usePathname();
  const { user, hasHydrated } = useUserStore();

  if (!user || !hasHydrated) {
    return <SettingsContentLoading />;
  }

  return (
    <SettingsContent
      title={dictionary('Settings.Security.title')}
      paragraph={dictionary('Settings.Security.description')}
      pathname={pathname}
      dictionary={dictionary}
    >

      <Accordion type="single" collapsible>
        <AccordionItem value="name">
          <AccordionTriggerForm keyLocalization="Password" dictionary={dictionary} />
          <AccordionContent>
            <FormPassword user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SettingsContent>
  );
};

export { PageSettingsSecurity };
