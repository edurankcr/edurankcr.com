import React from 'react';

import { HeroHeading, Link, Section, Stack } from '@/components';
import type { IDictionary } from '@/types';
import { GlobalSearchInput } from '@/ui';

import { HeroHomeBackground } from './Common';

type SectionHeroHomeProps = {} & IDictionary;

const SectionHeroHome = ({ dictionary }: SectionHeroHomeProps) => {
  return (
    <Section as="section" paddingY="none" paddingX="none" position="relative" id="hero">
      <HeroHomeBackground />
      <Stack alignItems="center" position="absolute" zIndex={10} gap="2xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-0 md:w-[676px]">
        <HeroHeading settings={{ align: 'center' }}>
          {dictionary('Hero.Home.title')}
        </HeroHeading>
        <GlobalSearchInput variant="hero" />
        <Link
          text={{ size: '300-res', color: 'white', weight: 'bold', underline: true, align: 'center' }}
          href="#"
        >
          {dictionary('Hero.Home.link')}
        </Link>
      </Stack>
    </Section>
  );
};

export { SectionHeroHome };
