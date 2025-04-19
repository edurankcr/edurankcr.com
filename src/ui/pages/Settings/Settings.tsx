'use client';

import { useFormatter, useTranslations } from 'next-intl';
import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTriggerForm,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Link,
  Text,
  usePathname,
} from '@/components';
import { AppRoutes } from '@/constants';
import { useUserStore } from '@/stores';
import {
  FormAvatar,
  FormBiography,
  FormBirthdate,
  FormEmail,
  FormFullName,
  FormUserName,
  SettingsContent,
  SettingsContentLoading,
} from '@/ui';
import { getBiography, getBirthdate, getEmail, getFullName } from '@/utils';

const PageSettings = () => {
  const dictionary = useTranslations('Base');
  const pathname = usePathname();
  const { user, hasHydrated } = useUserStore();
  const formatter = useFormatter();

  if (!user || !hasHydrated) {
    return <SettingsContentLoading />;
  }

  return (
    <SettingsContent
      title={dictionary('Settings.title')}
      paragraph={dictionary.rich('Settings.description', {
        greeting: 'Hello',
        name: user.name,
        email: user.email,
        b: (chunks: any) => <b>{chunks}</b>,
        link: (chunks: any) => (
          <Link
            href={AppRoutes.Global.Profile(user.userName || '')}
            text={{ underline: true, weight: 'medium', color: 'neon' }}
          >
            {chunks}
          </Link>
        ),
      }) as string}
      pathname={pathname}
      dictionary={dictionary}
    >
      <Accordion type="single" collapsible>
        <AccordionItem value="avatar" className="pt-0 flex justify-between">
          <Text as="h3" color="primary" weight="semibold">
            {dictionary('Accordion.Avatar.title')}
          </Text>
          <Dialog>
            <DialogTrigger className="cursor-pointer">
              <Text color="primary" weight="semibold" size="sm" underline>
                {dictionary('Accordion.edit')}
              </Text>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {dictionary('Accordion.Avatar.title')}
                </DialogTitle>
                <DialogDescription>
                  {dictionary('Accordion.Avatar.description')}
                </DialogDescription>
              </DialogHeader>
              <FormAvatar user={user} dictionary={dictionary} />
            </DialogContent>
          </Dialog>
        </AccordionItem>
        <AccordionItem value="name">
          <AccordionTriggerForm keyValue={getFullName(user.name, user.lastName)} keyLocalization="Name" dictionary={dictionary} />
          <AccordionContent>
            <FormFullName user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="username">
          <AccordionTriggerForm keyValue={user.userName} keyLocalization="UserName" dictionary={dictionary} />
          <AccordionContent>
            <FormUserName user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="birthdate">
          <AccordionTriggerForm keyValue={getBirthdate(user.birthDate, formatter)} keyLocalization="BirthDate" dictionary={dictionary} />
          <AccordionContent>
            <FormBirthdate user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="biography">
          <AccordionTriggerForm keyValue={getBiography(user.biography)} keyLocalization="Biography" dictionary={dictionary} />
          <AccordionContent>
            <FormBiography user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="email">
          <AccordionTriggerForm keyValue={getEmail(user.email, user.newEmail, user.isEmailConfirmed)} keyLocalization="Email" dictionary={dictionary} />
          <AccordionContent>
            <FormEmail user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SettingsContent>
  );
};

export { PageSettings };
