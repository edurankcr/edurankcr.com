import type { Box } from '@theme/components';
import { Group, Image, Link, Separator, Stack, Text } from '@theme/components';
import type { IDictionary } from '@theme/types';
import type { ComponentProps, FC } from 'react';

const MenuItems = [
  {
    id: 1,
    label: 'Explore',
    items: [
      {
        id: 1,
        label: 'Institutions',
      },
      {
        id: 2,
        label: 'Professors',
      },
      {
        id: 3,
        label: 'Reviews',
      },
      {
        id: 4,
        label: 'Compare',
      },
      {
        id: 5,
        label: 'Tags',
      },
      {
        id: 6,
        label: 'ProvincesAndCantons',
      },
    ],
  },
  {
    id: 2,
    label: 'MyAccount',
    items: [
      {
        id: 1,
        label: 'Profile',
      },
      {
        id: 2,
        label: 'Favorites',
      },
      {
        id: 3,
        label: 'MyReviews',
      },
      {
        id: 4,
        label: 'SupportTickets',
      },
      {
        id: 5,
        label: 'Settings',
      },
    ],
  },
  {
    id: 3,
    label: 'About',
    items: [
      {
        id: 1,
        label: 'WhatIsEduRankCR',
      },
      {
        id: 2,
        label: 'OurMission',
      },
      {
        id: 3,
        label: 'TheTeam',
      },
      {
        id: 4,
        label: 'Press',
      },
      {
        id: 5,
        label: 'Partners',
      },
    ],
  },
  {
    id: 4,
    label: 'Community',
    items: [
      {
        id: 1,
        label: 'HelpCenter',
      },
      {
        id: 2,
        label: 'BecomeModerator',
      },
      {
        id: 3,
        label: 'JoinAmbassadors',
      },
      {
        id: 4,
        label: 'ContactUs',
      },
    ],
  },
];

type FooterProps = {
  urlHomepage?: string;
} & IDictionary & ComponentProps<typeof Box>;

const Footer: FC<FooterProps> = ({
  urlHomepage = '/',
  dictionary,
  ...props
}) => {
  const headerProps = {
    ...props,
  };

  return (
    <Stack
      as="footer"
      bgBackground="inverse"
      {...headerProps}
    >
      <Stack paddingX="section" paddingY="section" gap="section" container className="md:gap-12">
        <Link href={urlHomepage} title="Go to homepage">
          <Image
            src="/assets/branding/logo-white-s.svg"
            alt="Logo"
            title="Logo"
            width={131}
            height="auto"
          />
        </Link>
        <Group
          flexGrow
          alignItems="start"
          fontColor="white"
          fontWeight="medium"
          gap="xl"
          hiddenFrom="xs"
          visibleFrom="md"
        >
          {MenuItems.map(menu => (
            <Stack key={menu.id}>
              <Text size="300" weight="bold">
                {dictionary(`Helpers.Navigation.${menu.label}.label` as any)}
              </Text>
              {menu.items.map(item => (
                <Text key={item.id}>
                  {dictionary(`Helpers.Navigation.${menu.label}.Items.${item.label}.label` as any)}
                </Text>
              ))}
            </Stack>
          ))}
        </Group>
        <Separator className="max-sm:hidden md:block" />
        <Stack>
          <Text color="white">
            <Text as="span" weight="semibold">
              {dictionary('Helpers.Footer.copyright_brand', { year: new Date().getFullYear() })}
            </Text>
            {dictionary('Helpers.Footer.copyright_text')}
          </Text>
          <Group
            fontColor="white"
            justifyContent="start"
            preventGrowOverflow={false}
            className="gap-1 md:gap-2 gap-y-0"
          >
            <Link href="#">
              {dictionary('Helpers.Footer.terms_of_service')}
            </Link>
            <Text as="span">
              &#183;
            </Text>
            <Link href="#">
              {dictionary('Helpers.Footer.privacy_policy')}
            </Link>
            <Text as="span">
              &#183;
            </Text>
            <Link href="#">
              {dictionary('Helpers.Footer.cookie_policy')}
            </Link>
          </Group>
        </Stack>
      </Stack>
    </Stack>
  );
};

Footer.displayName = 'Footer';

export { Footer };
