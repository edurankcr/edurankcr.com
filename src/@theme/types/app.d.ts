import type { ReactNode } from 'react';

import type en from '../../messages/en.json';
/* eslint-disable ts/consistent-type-definitions */
import type { formats } from './@theme/i18n';

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

type IRootLayout = {
  children: Children;
} & ILayoutParams;

type IMeta = {} & ILayoutParams;

export { IMeta, IRootLayout, Locale, Messages };
