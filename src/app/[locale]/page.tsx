import { Stack } from '@theme/components';
import { getMetadata } from '@theme/hooks';
import type { IMeta } from '@theme/types';

export async function generateMetadata({ params }: IMeta) {
  const { locale } = await params;
  return await getMetadata({ locale, space: 'Home' });
}

export default async function Page() {
  return (
    <Stack>
      <b>hello world!</b>
      <span>
        xd
      </span>
    </Stack>
  );
}
