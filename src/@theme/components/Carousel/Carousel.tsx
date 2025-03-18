'use client';

import { cx } from 'class-variance-authority';
import type { UseEmblaCarouselType } from 'embla-carousel-react';
import useEmblaCarousel from 'embla-carousel-react';
import * as React from 'react';
import { useMemo } from 'react';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = ({ ref, orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & CarouselProps & { ref?: any }) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((API: CarouselApi) => {
    if (!API) {
      return;
    }

    setCanScrollPrev(API.canScrollPrev());
    setCanScrollNext(API.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return undefined;
    }

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  const getValues = useMemo(() => {
    return {
      carouselRef,
      api,
      opts,
      orientation:
        orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    };
  }, [
    carouselRef,
    api,
    opts,
    orientation,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
  ]);

  return (
    <CarouselContext value={getValues}>
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cx('relative', className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext>
  );
};
Carousel.displayName = 'Carousel';

const CarouselContent = ({ ref, inset = false, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: any; inset?: boolean }) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className={cx('h-full overflow-hidden', inset && '-ms-2 p-2')}>
      <div
        ref={ref}
        className={cx(
          'flex h-full',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  );
};
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = ({ ref, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: any }) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cx(
        'min-w-0 shrink-0 grow-0 basis-full carousel-item',
        orientation === 'horizontal' ? '' : 'pt-4',
        className,
      )}
      {...props}
    />
  );
};
CarouselItem.displayName = 'CarouselItem';

export {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
};
