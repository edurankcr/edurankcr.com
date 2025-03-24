import type { Box } from '@theme/components';
import { Button, Group, Image, Link, Stack, Text } from '@theme/components';
import type { IDictionary } from '@theme/types';
import type { ComponentProps, FC } from 'react';

import { Routes } from '@/routes';

type HeaderProps = {
  urlHomepage?: string;
} & IDictionary & ComponentProps<typeof Box>;

const Header: FC<HeaderProps> = ({
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
          <Button height="sm" paddingX="sm" borderColor="interactive" borderWidth={2} href={Routes.Guest.Login}>
            {dictionary('Button.log_in')}
          </Button>
        </Group>
      </Group>
    </Stack>
  );
};

Header.displayName = 'Header';

export { Header };
