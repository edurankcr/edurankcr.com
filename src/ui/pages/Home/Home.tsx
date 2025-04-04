import type { IDictionary } from '@types';
import { HeroSection, LastReviewActivitySection } from '@ui/sections';
import { useFormatter } from 'next-intl';

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
