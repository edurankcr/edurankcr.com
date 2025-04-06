import { AppRoutes } from '@/constants';

type AppRoutesType = typeof AppRoutes;
type RouteGroup = keyof AppRoutesType;

const SUPPORTED_LOCALES = ['en', 'es'];

const sanitizePath = (pathname: string): string => {
  const segments = pathname.split('/');
  const noLocale
    = segments.length > 1 && segments[1] && SUPPORTED_LOCALES.includes(segments[1])
      ? `/${segments.slice(2).join('/')}`
      : pathname;

  return noLocale.endsWith('/') && noLocale !== '/' ? noLocale.slice(0, -1) : noLocale;
};

const flattenRoutes = (group: RouteGroup): string[] => {
  const recurse = (obj: Record<string, any>): string[] =>
    Object.values(obj).flatMap(value =>
      typeof value === 'string' ? [value] : recurse(value),
    );

  return recurse(AppRoutes[group]).map(path =>
    path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path,
  );
};

const RouteMap = Object.keys(AppRoutes).reduce((map, key) => {
  map[key as RouteGroup] = flattenRoutes(key as RouteGroup);
  return map;
}, {} as Record<RouteGroup, string[]>);

export const isGlobalRoute = (pathname: string): boolean =>
  RouteMap.Global.includes(sanitizePath(pathname));

export const isGuestRoute = (pathname: string): boolean =>
  RouteMap.Guest.includes(sanitizePath(pathname));

export const isAuthRoute = (pathname: string): boolean =>
  RouteMap.Auth.includes(sanitizePath(pathname));

export const getRouteGroup = (pathname: string): RouteGroup | null => {
  const cleanPath = sanitizePath(pathname);
  if (RouteMap.Global.includes(cleanPath)) {
    return 'Global';
  }
  if (RouteMap.Guest.includes(cleanPath)) {
    return 'Guest';
  }
  if (RouteMap.Auth.includes(cleanPath)) {
    return 'Auth';
  }
  return null;
};
