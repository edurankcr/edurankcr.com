import { useFormatter } from 'next-intl';

import type { IDictionary } from '@/types';

// noinspection ES6PreferShortImport
import { HeroSection, LastReviewActivitySection } from '../../sections';

type HomeProps = {} & IDictionary;

export const Home = ({ dictionary }: HomeProps) => {
  const formatter = useFormatter();
  return (
    <>
      <HeroSection dictionary={dictionary} />
      <LastReviewActivitySection dictionary={dictionary} formatter={formatter} />
    </>
  );
};
