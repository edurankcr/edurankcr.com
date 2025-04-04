import type { AbstractIntlMessages, NamespaceKeys } from 'use-intl';

import type { Messages } from '@/global';

import type { Locale } from './app';

type SpaceMetaMessages = Messages['Meta'];

namespace GetMetadata {
  export type Params = {
    locale: Locale;
    namespace: keyof SpaceMetaMessages | NamespaceKeys;
    variables?: Record<string, string>;
  };

  export type Response = {
    title: string;
    description: string;
  };
}

namespace GetMessagesForLocale {
  export type Params = {
    locale: Locale;
  };

  export type Response = Promise<AbstractIntlMessages>;
}

namespace GetLocales {
  export type Response = { locale: Locale }[];
}

namespace IsLocale {
  export type Params = {
    locale: Locale;
  };

  export type Response = boolean;
}

export {
  GetLocales,
  GetMessagesForLocale,
  GetMetadata,
  IsLocale,
};
