import { Section, Text } from '@theme/components';
import type { IDictionary } from '@theme/types';
import { HeroSection } from '@theme-ui/sections';

type HomeProps = {} & IDictionary;

export const Home = ({ dictionary }: HomeProps) => {
  return (
    <>
      <HeroSection dictionary={dictionary} />
      <Section as="section" container>
        <Text>
          Hello World!
          This is the home page.
        </Text>
      </Section>
    </>
  );
};
