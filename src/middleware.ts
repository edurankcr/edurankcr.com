import { deleteTokenCookie, getTokenFromCookie, verifyToken } from '@theme/services';
import { routing } from '@theme/services/routing';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { Routes } from '@/routes';

const intlMiddleware = createMiddleware(routing);

const guestRoutes = [
  Routes.Guest.Login,
  Routes.Guest.Register,
  Routes.Guest.Email.Request,
  Routes.Guest.Email.Sent,
  Routes.Guest.Email.Verify,
];

export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const token = await getTokenFromCookie();
  const pathname = request.nextUrl.pathname;
  const isGuestRoute = guestRoutes.some(route => pathname.includes(route));

  if (token && isGuestRoute) {
    const valid = await verifyToken(token);
    if (valid) {
      return NextResponse.redirect(new URL(Routes.Global.Home, request.url));
    } else {
      await deleteTokenCookie();
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
