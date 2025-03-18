'use client';

import { Box, Carousel, CarouselContent } from '@theme/components';
import Autoplay from 'embla-carousel-autoplay';
import type { ReactNode } from 'react';

type IHeroCarousel = {
  children: ReactNode;
};

const HeroCarousel = ({ children }: IHeroCarousel) => {
  return (
    <Carousel
      className="pointer-events-none select-none h-[476px] md:h-[540px] xl:h-[36vw]"
      plugins={[
        Autoplay({
          delay: 6000,
          stopOnInteraction: true,
        }),
      ]}
    >
      <Box
        width="full"
        height="carouselLinear"
        zIndex={10}
        pointerEvents="none"
        className="absolute top-0 left-0 background-linear"
      />
      <CarouselContent>{children}</CarouselContent>
    </Carousel>
  );
};

export { HeroCarousel };
