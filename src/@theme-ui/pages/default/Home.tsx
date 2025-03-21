import { Box, Section, Stack } from '@theme/components';
import type { IDictionary } from '@theme/types';
import { ReviewCard } from '@theme/widgets';
import { Heading } from '@theme-ui/components';
import { HeroSection } from '@theme-ui/sections';
import { useFormatter } from 'next-intl';

type HomeProps = {} & IDictionary;

export const Home = ({ dictionary }: HomeProps) => {
  const format = useFormatter();
  return (
    <>
      <HeroSection dictionary={dictionary} />
      <Section asChild>
        <Stack as="section" alignItems="center" container>
          <Heading>
            {dictionary('Heading.last_activity')}
          </Heading>
          <Box className="grid-reviews">
            <ReviewCard
              User={{
                Name: 'Alejandro',
                LastName: 'Marin',
                UserName: 'btwxyz',
              }}
              Review={{
                ReviewId: '123456789',
                IsVerified: false,
                Rating: 3.5,
                ExperienceText: 'Hello world!',
                CreatedAt: new Date('2023-10-01T12:00:00Z'),
              }}
              dictionary={dictionary}
              formater={format}
            />
          </Box>
        </Stack>
      </Section>
    </>
  );
};
