import type { IDictionary } from '@/types';
import { SectionActivityReviews, SectionHeroHome } from '@/ui';

type HomeProps = IDictionary;

const PageHome = ({ dictionary }: HomeProps) => {
  return (
    <>
      <SectionHeroHome dictionary={dictionary} />
      <SectionActivityReviews />
    </>
  );
};

export { PageHome };
