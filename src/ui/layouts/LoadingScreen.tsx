'use client';

import { Logotype, Stack } from '@/components';
import { useUserStore } from '@/stores';

export const LoadingScreen = () => {
  const { hasHydrated } = useUserStore();

  if (hasHydrated) {
    return null;
  }

  return (
    <Stack
      bgBackground="secondary"
      height="auto"
      minHeight="dvh"
      gap="none"
      position="absolute"
      zIndex={50}
      alignItems="center"
      justifyContent="center"
      className="inset-0"
    >
      <Logotype variant="black" className="scale-200 loading-logo" />
    </Stack>
  );
};
