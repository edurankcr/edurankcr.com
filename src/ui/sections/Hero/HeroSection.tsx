import React from 'react';

import { Section, Stack } from '@/components';
import type { IDictionary } from '@/types';

// noinspection ES6PreferShortImport
import { BackgroundHero, CTAHero, HeadingHero, SearchInput } from '../../blocks';

type HeroSectionProps = {} & IDictionary;

const HeroSection = ({ dictionary }: HeroSectionProps) => {
  return (
    <Section as="section" paddingY="none" paddingX="none" position="relative">
      <BackgroundHero />
      <Stack alignItems="center" position="absolute" zIndex={10} gap="2xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-0 md:w-[676px]">
        <HeadingHero>
          {dictionary('Heading.hero_cta')}
        </HeadingHero>
        <SearchInput variant="hero" placeholder={dictionary('Input.Search.placeholder')} />
        <CTAHero href="#">
          {dictionary('Button.link_hero_cta')}
        </CTAHero>
      </Stack>
    </Section>
  );
};

export { HeroSection };
