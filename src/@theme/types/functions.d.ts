import type { AbstractIntlMessages, NamespaceKeys } from 'use-intl';

import type { Messages } from '@/global';

import type { Locale } from './app';

declare type SpaceMetaMessages = Messages['Meta'];

type IGetMetadata = {
  locale: Locale;
  space: keyof SpaceMetaMessages | NamespaceKeys;
  variables?: Record<string, string>;
};

type IGetMetadataResponse = {
  title: string;
  description: string;
};

type IGetMessagesForLocale = {
  locale: Locale;
};

type IGetMessagesForLocaleResponse = {} & Promise<AbstractIntlMessages>;

type IGetLocalesResponse = { locale: Locale }[];

type IIsLocale = {
  locale: Locale;
};

type IIsLocaleResponse = boolean;

export {
  IGetLocalesResponse,
  IGetMessagesForLocale,
  IGetMessagesForLocaleResponse,
  IGetMetadata,
  IGetMetadataResponse,
  IIsLocale,
  IIsLocaleResponse,
};
