import type { AbstractIntlMessages, NamespaceKeys } from 'use-intl';

import type { Messages } from '@/global';

import type { Locale } from './app';

declare type SpaceMetaMessages = Messages['Meta'];

type IGetMetadata = {
  locale: Locale;
  space: keyof SpaceMetaMessages | NamespaceKeys;
  variables?: Record<string, string>;
};

type IGetMetadataReturn = {
  title: string;
  description: string;
};

type IUseMessages = {
  locale: Locale;
};

type IUseMessagesReturn = {} & Promise<AbstractIntlMessages>;

type IGetLocales = { locale: Locale }[];

type IIsLocale = {
  locale: Locale;
};

export { IGetLocales, IGetMetadata, IGetMetadataReturn, IIsLocale, IUseMessages, IUseMessagesReturn };
