import type { IProviders } from '@types';
import { getMessagesForLocale } from '@utils';
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
