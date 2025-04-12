'use client';

import { useFormatter, useTranslations } from 'next-intl';

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
  Stack,
  Text,
} from '@/components';
import { useUserStore } from '@/stores';

// noinspection ES6PreferShortImport
import { AvatarForm, BiographyForm, BirthdateForm, EmailForm, NameForm, UsernameForm } from '../../forms';

export const PersonalInformation = () => {
  const dictionary = useTranslations('UI');
  const formatter = useFormatter();
  const { user } = useUserStore();

  const getName = () => {
    if (!user?.name || !user?.lastName) {
      return '';
    }
    return `${user.name} ${user.lastName}`;
  };

  const getBirthdate = () => {
    if (!user?.birthDate) {
      return '';
    }
    const date = new Date(user.birthDate);
    return `${formatter.relativeTime(date)} (${formatter.dateTime(date)})`;
  };

  const getBiography = () => {
    if (!user?.biography) {
      return '';
    }
    const biography = user.biography;
    return biography.length > 100 ? `${biography.slice(0, 100)}...` : biography;
  };

  const getEmail = () => {
    if (!user?.email) {
      return '';
    }

    if (user.newEmail) {
      return dictionary('Paragraph.pending_to_confirm', { email: user.newEmail });
    }

    return user.email;
  };

  return (
    <Stack gap="none" flexGrow>
      <Accordion type="single" collapsible>
        <AccordionItem value="avatar" className="pt-0 flex justify-between">
          <Text as="h3" color="primary" weight="semibold">
            {dictionary('Heading.form_avatar')}
          </Text>
          <Dialog>
            <DialogTrigger className="cursor-pointer">
              <Text color="primary" weight="semibold" size="sm" underline>
                {dictionary('Heading.edit')}
              </Text>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {dictionary('Heading.form_avatar')}
                </DialogTitle>
                <DialogDescription>
                  {dictionary('Paragraph.form_avatar')}
                </DialogDescription>
              </DialogHeader>
              <AvatarForm user={user} dictionary={dictionary} />
            </DialogContent>
          </Dialog>
        </AccordionItem>
        <AccordionItem value="name">
          <AccordionTriggerForm keyValue={getName()} keyLocalization="form_legal_name" dictionary={dictionary} />
          <AccordionContent>
            <NameForm user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="username">
          <AccordionTriggerForm keyValue={user?.userName} keyLocalization="form_username" dictionary={dictionary} />
          <AccordionContent>
            <UsernameForm user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="birthdate">
          <AccordionTriggerForm keyValue={getBirthdate()} keyLocalization="form_birthdate" dictionary={dictionary} />
          <AccordionContent>
            <BirthdateForm user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="biography">
          <AccordionTriggerForm keyValue={getBiography()} keyLocalization="form_biography" dictionary={dictionary} />
          <AccordionContent>
            <BiographyForm user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="email">
          <AccordionTriggerForm keyValue={getEmail()} keyLocalization="form_email" dictionary={dictionary} />
          <AccordionContent>
            <EmailForm user={user} dictionary={dictionary} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};
