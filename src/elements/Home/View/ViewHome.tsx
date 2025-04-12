import type { IDictionary } from '@/types';

import { HomeActivity, HomeHero } from './Sections';

type Props = IDictionary;

export const ViewHome = ({ dictionary }: Props) => {
  return (
    <>
      <HomeHero dictionary={dictionary} />
      <HomeActivity />
    </>
  );
};
