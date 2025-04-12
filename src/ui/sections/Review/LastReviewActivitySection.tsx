import { Box, Section, Stack } from '@/components';
import type { IDictionary, IFormatter } from '@/types';

// noinspection ES6PreferShortImport
import { Heading, ReviewCard } from '../../blocks';

type LastReviewActivitySectionProps = {
} & IDictionary & IFormatter;

export const LastReviewActivitySection = ({ dictionary, formatter }: LastReviewActivitySectionProps) => {
  return (
    <Section asChild>
      <Stack as="section" alignItems="center" container>
        <Heading>
          {dictionary('Heading.last_activity')}
        </Heading>
        <Box className="grid-reviews">
          <ReviewCard
            user={{
              name: 'Carlos',
              lastName: 'Gomez',
              userName: 'carlitox',
            }}
            review={{
              reviewId: '987654321',
              isVerified: true,
              rating: 4.5,
              experienceText: 'Amazing experience, highly recommended!',
              createdAt: new Date('2024-01-15T14:30:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            user={{
              name: 'Sofia',
              lastName: 'Rodriguez',
              userName: 'sofi23',
            }}
            review={{
              reviewId: '564738291',
              isVerified: false,
              rating: 2.5,
              experienceText: 'It was okay, but not what I expected.',
              createdAt: new Date('2023-12-10T09:15:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            user={{
              name: 'Luis',
              lastName: 'Fernandez',
              userName: 'luisito_f',
            }}
            review={{
              reviewId: '112233445',
              isVerified: true,
              rating: 5.0,
              experienceText: 'Perfect service! Couldn’t be happier.',
              createdAt: new Date('2024-02-20T18:45:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            user={{
              name: 'Andrea',
              lastName: 'Lopez',
              userName: 'andrea_lpz',
            }}
            review={{
              reviewId: '998877665',
              isVerified: false,
              rating: 3.0,
              experienceText: 'Good but with some flaws.',
              createdAt: new Date('2024-03-05T20:00:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            user={{
              name: 'Fernando',
              lastName: 'Martinez',
              userName: 'fercho_mtz',
            }}
            review={{
              reviewId: '556677889',
              isVerified: true,
              rating: 4.5,
              experienceText: 'Really good, but there’s room for improvement.',
              createdAt: new Date('2024-01-28T16:10:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            user={{
              name: 'Elena',
              lastName: 'Castro',
              userName: 'elena_c',
            }}
            review={{
              reviewId: '334455667',
              isVerified: false,
              rating: 1.5,
              experienceText: 'Not satisfied at all. Needs major improvements.',
              createdAt: new Date('2023-11-25T08:00:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            user={{
              name: 'Miguel',
              lastName: 'Hernandez',
              userName: 'miguel_hdz',
            }}
            review={{
              reviewId: '223344556',
              isVerified: true,
              rating: 5,
              experienceText: 'Great service and fast response time!',
              createdAt: new Date('2024-02-08T12:30:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            user={{
              name: 'Valeria',
              lastName: 'Ramos',
              userName: 'valeria_r',
            }}
            review={{
              reviewId: '667788990',
              isVerified: false,
              rating: 3.5,
              experienceText: 'Decent experience, but nothing outstanding.',
              createdAt: new Date('2023-10-22T17:20:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            user={{
              name: 'Daniel',
              lastName: 'Vargas',
              userName: 'danielvgs',
            }}
            review={{
              reviewId: '889900112',
              isVerified: true,
              rating: 5.0,
              experienceText: 'Absolutely loved it! Will return for sure.',
              createdAt: new Date('2024-03-12T21:15:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
        </Box>
      </Stack>
    </Section>
  );
};
