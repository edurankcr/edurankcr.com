'use client';

import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

import { usePathname, useRouter } from '@/components';
import { AppRoutes } from '@/constants';
import { getTokenFromCookie } from '@/services';
import { useUserStore } from '@/stores';
import { isAuthRoute } from '@/utils';

export const AuthGuard = () => {
  const { user, hasHydrated, clearUser } = useUserStore();
  const hasChecked = useRef(false);
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!hasHydrated || hasChecked.current) {
      return;
    }

    hasChecked.current = true;

    getTokenFromCookie().then((token) => {
      if (!token && user) {
        clearUser();
        toast.error('Session expired. Please log in again.');

        if (isAuthRoute(pathName)) {
          return router.push(AppRoutes.Guest.Login);
        }

        router.refresh();
      }
    });
  }, [hasHydrated, user, clearUser, router, pathName]);

  return null;
};
