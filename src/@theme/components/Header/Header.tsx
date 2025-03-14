import type { ComponentProps, FC } from 'react';

import type { IDictionary } from '../../types';
import { Box } from '../Box';
import { Button } from '../Button';
import { Group } from '../Group';
import { Image } from '../Image';
import { Link } from '../Link';
import { Stack } from '../Stack';
import { Text } from '../Text';

type HeaderProps = {
  urlHomepage?: string;
} & IDictionary & ComponentProps<typeof Box>;

const Header: FC<HeaderProps> = ({
  urlHomepage = '/',
  align = 'center',
  justify = 'start',
  gap = 'md',
  dictionary,
  ...props
}) => {
  const headerProps = {
    align,
    justify,
    gap,
    ...props,
  };

  return (
    <Stack as="header" container gap="none" zIndex={50}>
      <Box
        display="flex"
        className="main-header"
        {...headerProps}
      >
        <Group grow wrap="nowrap" justify="between" preventGrowOverflow={false}>
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
          <Group grow wrap="nowrap" justify="end" preventGrowOverflow={false} hiddenFrom="xs" visibleFrom="md" gap="xl">
            <Group fontWeight="bold" color="white">
              <Text size="sm">
                {dictionary('Navigation.Explore.label')}
              </Text>
              <Text size="sm">
                {dictionary('Navigation.Saved.label')}
              </Text>
              <Text size="sm">
                {dictionary('Navigation.Recommendations.label')}
              </Text>
            </Group>
            <Button color="white" fontColor="white" borderWidth="lg" size="sm" fontSize="sm">
              {dictionary('Buttons.log_in')}
            </Button>
          </Group>
        </Group>
      </Box>
    </Stack>
  );
};

Header.displayName = 'Header';

export { Header };
