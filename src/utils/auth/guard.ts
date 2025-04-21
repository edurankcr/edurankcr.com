'use client';

import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

import { useRouter } from '@/components';
import { AppRoutes } from '@/constants';
import { getTokenFromCookie } from '@/services';
import { useUserStore } from '@/stores';

export const AuthGuard = () => {
  const { user, hasHydrated, clearUser } = useUserStore();
  const hasChecked = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (!hasHydrated || hasChecked.current) {
      return;
    }

    hasChecked.current = true;

    getTokenFromCookie().then((token) => {
      if (!token && user) {
        toast.error('Session expired. Please log in again.');
        clearUser();
        router.push(AppRoutes.Guest.Login);
      }
    });
  }, [hasHydrated, user, clearUser, router]);

  return null;
};
