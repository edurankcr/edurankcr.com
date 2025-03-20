import { CarouselItem, Image, Section, Stack, Text } from '@theme/components';
import type { IDictionary } from '@theme/types';
import { HeroCarousel } from '@theme/widgets';
import { CtaRanking, SearchBar } from '@theme-ui/components';

type HomeProps = {} & IDictionary;

export const Home = ({ dictionary }: HomeProps) => {
  return (
    <>
      <Section as="section" paddingY="none" paddingX="none" position="relative">
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
        <Stack position="absolute" zIndex={10} gap="2xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-0 md:w-[676px]">
          <Text
            as="h1"
            color="white"
            size="700-res"
            weight="medium"
            align="center"
          >
            {dictionary('Heading.hero_cta')}
          </Text>
          <SearchBar placeholder={dictionary('Input.Search.placeholder')} />
          <CtaRanking href="#">
            {dictionary('Button.link_hero_cta')}
          </CtaRanking>
        </Stack>
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
