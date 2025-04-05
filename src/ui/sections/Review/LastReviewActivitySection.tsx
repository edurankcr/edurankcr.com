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
            User={{
              Name: 'Carlos',
              LastName: 'Gomez',
              UserName: 'carlitox',
            }}
            Review={{
              ReviewId: '987654321',
              IsVerified: true,
              Rating: 4.5,
              ExperienceText: 'Amazing experience, highly recommended!',
              CreatedAt: new Date('2024-01-15T14:30:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            User={{
              Name: 'Sofia',
              LastName: 'Rodriguez',
              UserName: 'sofi23',
            }}
            Review={{
              ReviewId: '564738291',
              IsVerified: false,
              Rating: 2.5,
              ExperienceText: 'It was okay, but not what I expected.',
              CreatedAt: new Date('2023-12-10T09:15:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            User={{
              Name: 'Luis',
              LastName: 'Fernandez',
              UserName: 'luisito_f',
            }}
            Review={{
              ReviewId: '112233445',
              IsVerified: true,
              Rating: 5.0,
              ExperienceText: 'Perfect service! Couldn’t be happier.',
              CreatedAt: new Date('2024-02-20T18:45:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            User={{
              Name: 'Andrea',
              LastName: 'Lopez',
              UserName: 'andrea_lpz',
            }}
            Review={{
              ReviewId: '998877665',
              IsVerified: false,
              Rating: 3.0,
              ExperienceText: 'Good but with some flaws.',
              CreatedAt: new Date('2024-03-05T20:00:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            User={{
              Name: 'Fernando',
              LastName: 'Martinez',
              UserName: 'fercho_mtz',
            }}
            Review={{
              ReviewId: '556677889',
              IsVerified: true,
              Rating: 4.5,
              ExperienceText: 'Really good, but there’s room for improvement.',
              CreatedAt: new Date('2024-01-28T16:10:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            User={{
              Name: 'Elena',
              LastName: 'Castro',
              UserName: 'elena_c',
            }}
            Review={{
              ReviewId: '334455667',
              IsVerified: false,
              Rating: 1.5,
              ExperienceText: 'Not satisfied at all. Needs major improvements.',
              CreatedAt: new Date('2023-11-25T08:00:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            User={{
              Name: 'Miguel',
              LastName: 'Hernandez',
              UserName: 'miguel_hdz',
            }}
            Review={{
              ReviewId: '223344556',
              IsVerified: true,
              Rating: 5,
              ExperienceText: 'Great service and fast response time!',
              CreatedAt: new Date('2024-02-08T12:30:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            User={{
              Name: 'Valeria',
              LastName: 'Ramos',
              UserName: 'valeria_r',
            }}
            Review={{
              ReviewId: '667788990',
              IsVerified: false,
              Rating: 3.5,
              ExperienceText: 'Decent experience, but nothing outstanding.',
              CreatedAt: new Date('2023-10-22T17:20:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
          <ReviewCard
            User={{
              Name: 'Daniel',
              LastName: 'Vargas',
              UserName: 'danielvgs',
            }}
            Review={{
              ReviewId: '889900112',
              IsVerified: true,
              Rating: 5.0,
              ExperienceText: 'Absolutely loved it! Will return for sure.',
              CreatedAt: new Date('2024-03-12T21:15:00Z'),
            }}
            dictionary={dictionary}
            formatter={formatter}
          />
        </Box>
      </Stack>
    </Section>
  );
};
