'use client';

import React from 'react';

import { CarouselItem, Image } from '@/components';

// noinspection ES6PreferShortImport
import { HeroCarousel } from '../Carousel';

export const BackgroundHero = () => {
  return (
    <HeroCarousel>
      {
        [1, 2, 3].map(i => (
          <CarouselItem key={i}>
            <picture>
              <source
                media="(max-width: 767.95px)"
                srcSet={`/assets/images/hero/${i}-sm.jpg`}
                type="image/jpg"
              />
              <Image
                loading="eager"
                className="w-full md:h-full md:object-cover object-center"
                src={`/assets/images/hero/${i}.jpg`}
              />
            </picture>
          </CarouselItem>
        ))
      }
    </HeroCarousel>
  );
};
