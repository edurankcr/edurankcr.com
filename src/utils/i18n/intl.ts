import { notFound } from 'next/navigation';
import { getMessages, getTranslations } from 'next-intl/server';

import { routing } from '@/services';
import type { GetLocales, GetMessagesForLocale, GetMetadata, IsLocale } from '@/types';

async function getMetadata({ locale, namespace, variables }: GetMetadata.Params): Promise<GetMetadata.Response> {
  // @ts-expect-error @next-intl/server
  const t = await getTranslations({ locale, namespace: `Meta.${namespace}` });

  return {
    title: t('title', variables)?.trim() || 'Unknown title',
    description: t('description', variables)?.trim() || 'Unknown description',
  };
}

async function getMessagesForLocale({ locale }: GetMessagesForLocale.Params): Promise<GetMessagesForLocale.Response> {
  if (!isLocale({ locale })) {
    notFound();
  }

  return getMessages();
}

function isLocale({ locale }: IsLocale.Params): IsLocale.Response {
  return routing.locales.includes(locale as typeof routing.locales[number]);
}

function getLocales(): GetLocales.Response {
  return routing.locales.map(locale => ({ locale }));
}

export { getLocales, getMessagesForLocale, getMetadata, isLocale };
