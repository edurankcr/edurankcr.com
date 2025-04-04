import type { IDictionary } from '@types';
import { UserPreview } from '@ui/blocks';
import type { Box } from 'components';
import { Group, Image, Link, Stack, Text } from 'components';
import type { ComponentProps, FC } from 'react';

type HeaderProps = {
  urlHomepage?: string;
} & IDictionary & ComponentProps<typeof Box>;

export const Header: FC<HeaderProps> = ({
  urlHomepage = '/',
  dictionary,
  ...props
}) => {
  const headerProps = {
    ...props,
  };

  return (
    <Stack
      as="header"
      container
      paddingX="section"
      position="absolute"
      className="inset-0"
      zIndex={50}
      {...headerProps}
    >
      <Group flexGrow flexWrap="nowrap" justifyContent="between" preventGrowOverflow={false}>
        <Link href={urlHomepage} title="Go to homepage">
          <Image
            src="/assets/branding/logo-white.svg"
            alt="Logo"
            title="Logo"
            width={131}
            height="auto"
            loading="eager"
          />
        </Link>
        <Group
          flexGrow
          flexWrap="nowrap"
          justifyContent="end"
          preventGrowOverflow={false}
          hiddenFrom="xs"
          visibleFrom="md"
          fontColor="white"
          fontSize="sm"
          fontWeight="semibold"
          gap="4xl"
        >
          <Group flexGrow justifyContent="end" preventGrowOverflow={false} gap="2xl">
            <Text>
              {dictionary('Helpers.Navigation.Explore.label_emoji')}
            </Text>
            <Text>
              {dictionary('Helpers.Navigation.Saved.label')}
            </Text>
          </Group>
          <UserPreview />
        </Group>
      </Group>
    </Stack>
  );
};
