'use client';

import { cx } from 'class-variance-authority';
import type { UseEmblaCarouselType } from 'embla-carousel-react';
import useEmblaCarousel from 'embla-carousel-react';
import type { HTMLAttributes } from 'react';
import { createContext, use, useCallback, useEffect, useMemo, useState } from 'react';

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

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = use(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = ({ ref, orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }: HTMLAttributes<HTMLDivElement> & CarouselProps & { ref?: any }) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (event: any) => {
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

  useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) {
      return;
    }

    function handleSelect() {
      if (!api) {
        return;
      }

      queueMicrotask(() => {
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
      });
    }

    handleSelect();

    api.on('reInit', handleSelect);
    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
      api.off('reInit', handleSelect);
    };
  }, [api]);

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

const CarouselContent = ({ ref, inset = false, className, ...props }: HTMLAttributes<HTMLDivElement> & { ref?: any; inset?: boolean }) => {
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

const CarouselItem = ({ ref, className, ...props }: HTMLAttributes<HTMLDivElement> & { ref?: any }) => {
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
