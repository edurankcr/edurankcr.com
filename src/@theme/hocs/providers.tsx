import type { IProviders } from '@theme/types';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const Providers = async ({ children }: IProviders) => {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export { Providers };
