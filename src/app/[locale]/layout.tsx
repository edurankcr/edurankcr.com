import '@theme/styles/globals.css';

import { fontMono, fontSans } from '@theme/fonts';
import { Providers } from '@theme/hocs';
import { getLocales, isLocale } from '@theme/hooks';
import type { IRootLayout } from '@theme/types';
import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export function generateStaticParams() {
  return getLocales();
}

export default async function RootLayout({ children, params }: Readonly<IRootLayout>) {
  const { locale } = await params;

  if (!isLocale({ locale })) {
    return notFound();
  }

  return (
    <html lang={locale} className={clsx(fontSans.variable, fontMono.variable)}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
