'use client';

import { useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerForm,
  Stack,
} from '@/components';
import { useUserStore } from '@/stores';

// noinspection ES6PreferShortImport
import { PasswordForm } from '../../forms';

export const Security = () => {
  const dictionary = useTranslations('UI');
  const { user } = useUserStore();

  return (
    <Stack gap="none" flexGrow>
      <Accordion type="single" collapsible>
        <AccordionItem value="name">
          <AccordionTriggerForm keyLocalization="form_password" dictionary={dictionary} />
          <AccordionContent>
            <PasswordForm user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};
