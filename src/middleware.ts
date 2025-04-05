import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AppRoutes } from '@/constants';
import { deleteTokenCookie, getTokenFromCookie, routing, verifyToken } from '@/services';
import { isGuestRoute } from '@/utils';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const token = await getTokenFromCookie();

  if (token && isGuestRoute(request.nextUrl.pathname)) {
    const valid = await verifyToken(token);
    if (valid) {
      return NextResponse.redirect(new URL(AppRoutes.Global.Home, request.url));
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
