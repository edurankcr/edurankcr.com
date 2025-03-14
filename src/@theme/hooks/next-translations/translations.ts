import type {
  IGetMetadata,
  IGetMetadataReturn,
  IIsLocale,
  IUseMessages,
  IUseMessagesReturn,
} from '@theme/types';
import { notFound } from 'next/navigation';
import { getMessages, getTranslations } from 'next-intl/server';

import { routing } from '../../services/routing';

async function getMetadata({ locale, space, variables }: IGetMetadata): Promise<IGetMetadataReturn> {
  // @ts-expect-error NamespaceKeys
  const t = await getTranslations({ locale, namespace: `Meta.${space}` });

  return {
    title: t('title', variables)?.trim() || 'Unknown title',
    description: t('description', variables)?.trim() || 'Unknown description',
  };
}

async function useMessages({ locale }: IUseMessages): Promise<IUseMessagesReturn> {
  if (!isLocale({ locale })) {
    notFound();
  }

  return await getMessages();
}

function isLocale({ locale }: IIsLocale): boolean {
  return routing.locales.includes(locale as any);
}

export { getMetadata, isLocale, useMessages };
