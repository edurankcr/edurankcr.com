import { CarouselItem, Image, Section, Text } from '@theme/components';
import { HeroCarousel } from '@theme/widgets';

export const Home = () => {
  return (
    <>
      <Section as="section" paddingY="none" paddingX="none">
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
                    className="w-full md:h-full md:object-cover object-center"
                    src={`/assets/images/hero/${i}.jpg`}
                  />
                </picture>
              </CarouselItem>
            ))
          }
        </HeroCarousel>
      </Section>
      <Section as="section" container>
        <Text>
          Hello World!
          This is the home page.
        </Text>
      </Section>
    </>
  );
};
