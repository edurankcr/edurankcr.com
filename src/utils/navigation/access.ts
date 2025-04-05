import { AppRoutes } from '@/constants';

type AppRoutesType = typeof AppRoutes;
type RouteGroup = keyof AppRoutesType;

const flattenRoutes = (group: RouteGroup): string[] => {
  const groupRoutes = AppRoutes[group];

  const recurse = (obj: Record<string, any>): string[] => {
    return Object.values(obj).flatMap(value =>
      typeof value === 'string' ? [value] : recurse(value),
    );
  };

  return recurse(groupRoutes);
};

const RouteMap = {
  Global: flattenRoutes('Global'),
  Guest: flattenRoutes('Guest'),
};

export const isGlobalRoute = (pathname: string): boolean =>
  RouteMap.Global.includes(pathname);

export const isGuestRoute = (pathname: string): boolean =>
  RouteMap.Guest.includes(pathname);

export const getRouteGroup = (
  pathname: string,
): RouteGroup | null => {
  if (isGlobalRoute(pathname)) {
    return 'Global';
  }
  if (isGuestRoute(pathname)) {
    return 'Guest';
  }
  return null;
};
