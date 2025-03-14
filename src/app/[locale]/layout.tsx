import '@theme/styles/globals.css';

import { fontMono, fontSans } from '@theme/fonts';
import type { IRootLayout } from '@theme/types';
import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default async function RootLayout({ children, params }: Readonly<IRootLayout>) {
  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale} className={clsx(fontSans.variable, fontMono.variable)}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
