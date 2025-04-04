import type { User } from '@types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

export const useUserStore = create<UserState>()(
  persist(
    set => ({
      user: null,
      hasHydrated: false,
      setUser: user => set({ user }),
      clearUser: () => set({ user: null }),
      setHasHydrated: state => set({ hasHydrated: state }),
    }),
    {
      name: 'user-storage',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
