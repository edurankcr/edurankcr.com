import { Box, Section, Text } from '@theme/components';

export const Home = () => {
  return (
    <>
      <Section as="section" paddingY="none" paddingX="none">
        <Box bgBackground="black" width="full" height="carousel" animation="default" />
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
