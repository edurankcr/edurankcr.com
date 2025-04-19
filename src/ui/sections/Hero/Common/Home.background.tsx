'use client';

import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

import { Box, Carousel, CarouselContent, CarouselItem, Image } from '@/components';

const HeroHomeBackground = () => {
  return (
    <Carousel
      className="pointer-events-none select-none h-[476px] md:h-[540px] lg:h-[36vw]"
      plugins={[
        Autoplay({
          delay: 8000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <Box
        width="full"
        height="carouselLinear"
        zIndex={10}
        pointerEvents="none"
        position="absolute"
        className="top-0 left-0 background-linear"
      />
      <CarouselContent>
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
      </CarouselContent>
    </Carousel>
  );
};

export { HeroHomeBackground };
