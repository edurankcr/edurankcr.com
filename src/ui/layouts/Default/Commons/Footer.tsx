import React from 'react';

import { Group, Link, Logotype, Separator, Stack, Text } from '@/components';
import { FOOTER_SECTIONS } from '@/constants';
import type { IDictionary } from '@/types';

type FooterProps = IDictionary;

const Footer = (params: FooterProps) => {
  const { dictionary } = params;
  return (
    <Stack
      as="footer"
      bgBackground="inverse"
    >
      <Stack paddingX="section" paddingY="section" gap="section" container className="md:gap-12">
        <Logotype variant="white-color" />
        <Group
          flexGrow
          alignItems="start"
          fontColor="white"
          fontWeight="medium"
          gap="xl"
          hiddenFrom="xs"
          visibleFrom="md"
        >
          {Object.entries(FOOTER_SECTIONS).map(([key, section]) => (
            <Stack key={key}>
              <Text size="300" weight="bold">
                {dictionary(section.titleKey as any)}
              </Text>
              {section.items.map(item => (
                <Text key={item.titleKey}>
                  {dictionary(item.titleKey as any)}
                </Text>
              ))}
            </Stack>
          ))}
        </Group>
        <Separator className="max-sm:hidden md:block" />
        <Stack
          fontColor="white"
        >
          <Text>
            {dictionary.rich('Footer.copyright', {
              year: new Date().getFullYear(),
              b: (chunks: any) => <b className="font-semibold">{chunks}</b>,
            })}
          </Text>
          <Group
            justifyContent="start"
            preventGrowOverflow={false}
            className="gap-1 md:gap-2 gap-y-0"
          >
            <Link href="#">
              {dictionary('Footer.terms')}
            </Link>
            <Text as="span">
              &#183;
            </Text>
            <Link href="#">
              {dictionary('Footer.privacy')}
            </Link>
            <Text as="span">
              &#183;
            </Text>
            <Link href="#">
              {dictionary('Footer.cookie')}
            </Link>
            <Text as="span">
              &#183;
            </Text>
            <Link href="#">
              {dictionary('Footer.creators')}
            </Link>
          </Group>
        </Stack>
      </Stack>
    </Stack>
  );
};

export { Footer };
