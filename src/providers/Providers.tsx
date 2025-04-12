import { NextIntlClientProvider } from 'next-intl';

import type { IProviders } from '@/types';
import { getMessagesForLocale } from '@/utils';

import { ReactQueryProvider } from './ReactQueryProvider';

const Providers = async ({ children, params }: IProviders) => {
  const { locale } = await params;
  const messages = await getMessagesForLocale({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </NextIntlClientProvider>
  );
};

export { Providers };
