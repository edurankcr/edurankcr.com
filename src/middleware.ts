import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { AppRoutes } from '@/constants';
import { deleteTokenInMiddleware, getTokenFromMiddleware, routing, verifyTokenInMiddleware } from '@/services';
import { isAuthRoute, isGuestRoute } from '@/utils';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const { pathname } = request.nextUrl;

  const isGuest = isGuestRoute(pathname);
  const isAuth = isAuthRoute(pathname);
  const requiresAuthCheck = isGuest || isAuth;

  if (!requiresAuthCheck) {
    return response;
  }

  const token = await getTokenFromMiddleware(request);

  if (!token) {
    if (isAuth) {
      return NextResponse.redirect(new URL(AppRoutes.Guest.Login, request.url));
    }
    return response;
  }

  const isValid = await verifyTokenInMiddleware(token);

  if (isGuest && isValid) {
    return NextResponse.redirect(new URL(AppRoutes.Global.Home, request.url));
  }

  if (isAuth && !isValid) {
    const redirect = NextResponse.redirect(new URL(AppRoutes.Guest.Login, request.url));
    return deleteTokenInMiddleware(redirect);
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
