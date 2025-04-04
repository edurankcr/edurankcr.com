import { getMessagesForLocale } from '@theme/functions';
import type { IProviders } from '@theme/types';
import { NextIntlClientProvider } from 'next-intl';

const Providers = async ({ children, params }: IProviders) => {
  const { locale } = await params;
  const messages = await getMessagesForLocale({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export { Providers };
