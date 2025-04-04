import { routing } from '@theme/services/routing';
import type {
  IGetLocalesResponse,
  IGetMessagesForLocale,
  IGetMessagesForLocaleResponse,
  IGetMetadata,
  IGetMetadataResponse,
  IIsLocale,
  IIsLocaleResponse,
} from '@theme/types';
import { notFound } from 'next/navigation';
import { getMessages, getTranslations } from 'next-intl/server';

async function getMetadata({ locale, space, variables }: IGetMetadata): Promise<IGetMetadataResponse> {
  // @ts-expect-error @next-intl/server
  const t = await getTranslations({ locale, namespace: `Meta.${space}` });

  return {
    title: t('title', variables)?.trim() || 'Unknown title',
    description: t('description', variables)?.trim() || 'Unknown description',
  };
}

async function getMessagesForLocale({ locale }: IGetMessagesForLocale): Promise<IGetMessagesForLocaleResponse> {
  if (!isLocale({ locale })) {
    notFound();
  }

  return await getMessages();
}

function isLocale({ locale }: IIsLocale): IIsLocaleResponse {
  return routing.locales.includes(locale as any);
}

function getLocales(): IGetLocalesResponse {
  return routing.locales.map(locale => ({ locale }));
}

export { getLocales, getMessagesForLocale, getMetadata, isLocale };
