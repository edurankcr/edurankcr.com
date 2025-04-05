import '@/styles/globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Toaster } from '@/components';
import { Providers } from '@/providers';
import { fontMono, fontSans } from '@/styles';
import type { IRootLayout } from '@/types';
import { AuthGuard, getBaseUrl, getLocales, isLocale } from '@/utils';

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  icons: [
    {
      rel: 'icon',
      url: '/favicon.svg',
    },
  ],
  openGraph: {
    url: new URL(getBaseUrl()),
    siteName: 'EduRankCR',
    images: [
      {
        url: '/assets/social/og.jpg',
        width: 1200,
        height: 628,
        alt: 'EduRankCR - Trusted Reviews of Universities & Teachers in Costa Rica',
      },
    ],
    type: 'website',
    locale: 'es_CR',
  },
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
        <Providers params={params}>
          {children}
        </Providers>
        <Toaster />
        <AuthGuard />
      </body>
    </html>
  );
}
