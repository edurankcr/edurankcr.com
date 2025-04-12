import type { getTranslations } from 'next-intl/server';
import type { ReactNode } from 'react';
import type { createFormatter, useTranslations } from 'use-intl';

import type en from '../messages/en.json';
import type { formats } from './@theme/i18n';

/* eslint-disable ts/consistent-type-definitions */

declare global {
  interface IntlMessages extends Messages {}
  interface IntlFormats extends Formats {}
}

type Children = ReactNode;
type Locale = string;

type Messages = typeof en;
type Formats = typeof formats;

type ILayoutParams = {
  params: Promise<{
    locale: Locale;
  }>;
};

type ILayoutIdParams = {
  params: Promise<{
    locale: Locale;
    id: string;
  }>;
};

type IBaseLayout = {
  children: Children;
} & ILayoutParams;

type IChildren = {
  children: Children;
};

type ILayout = IBaseLayout;
type IRootLayout = IBaseLayout;
type IPageLayout = IBaseLayout;
type IMeta = ILayoutParams;
type IIdMeta = ILayoutIdParams;
type IProviders = IBaseLayout;

type IDictionary = {
  dictionary: Awaited<ReturnType<typeof getTranslations>>;
};

type ITranslations = {
  dictionary: Awaited<ReturnType<typeof useTranslations>>;
};

type IFormatter = {
  formatter: Awaited<ReturnType<typeof createFormatter>>;
};

type IComponent = {
  children: Children;
  dictionary?: Awaited<ReturnType<typeof getTranslations>>;
};

type IPathName = {
  pathname: string;
};

export {
  IChildren,
  IComponent,
  IDictionary,
  IFormatter,
  IIdMeta,
  ILayout,
  IMeta,
  IPageLayout,
  IPathName,
  IProviders,
  IRootLayout,
  ITranslations,
  Locale,
  Messages,
};
