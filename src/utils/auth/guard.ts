'use client';

import { getTokenFromCookie } from '@services';
import { useUserStore } from '@stores';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';

export const AuthGuard = () => {
  const { user, hasHydrated, clearUser } = useUserStore();
  const hasChecked = useRef(false);

  useEffect(() => {
    if (!hasHydrated || hasChecked.current) {
      return;
    }

    hasChecked.current = true;

    getTokenFromCookie().then((token) => {
      if (!token && user) {
        toast.error('Session expired. Please log in again.');
        clearUser();
      }
    });
  }, [hasHydrated, user, clearUser]);

  return null;
};
