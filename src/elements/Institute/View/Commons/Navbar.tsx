import { IconBookmark, IconShare } from '@tabler/icons-react';
import { cx } from 'class-variance-authority';
import type { ReactNode } from 'react';

import {
  Button,
  Group,
} from '@/components';
import type { IDictionary } from '@/types';

type InstituteNavbarItemProps = {
  isActive?: boolean;
  name: string;
};

const InstituteNavbarItem = (props: InstituteNavbarItemProps) => {
  const { isActive = false, name } = props;
  return (
    <button
      role="tab"
      type="button"
      tabIndex={isActive ? 0 : -1}
      className={cx(
        'flex items-center justify-center text-text-200 font-semibold cursor-pointer transition-colors duration-200 ease-in-out min-h-[80px] border-t-2 border-t',
        isActive ? 'border-interactive-active text-text-primary' : 'border-transparent text-text-secondary hover:text-text-primary',
      )}
    >
      <span>{name}</span>
    </button>
  );
};

type InstituteNavbarItemButtonProps = {
  icon: ReactNode;
};

const InstituteNavbarItemButton = (props: InstituteNavbarItemButtonProps) => {
  const { icon } = props;
  return (
    <Button bgColor="interactiveSecondary" borderRadius="full" paddingX="none" height="lg" width="lg">
      {icon}
    </Button>
  );
};

type InstituteNavbarProps = IDictionary;

export const InstituteNavbar = ({ dictionary }: InstituteNavbarProps) => {
  return (
    <Group justifyContent="start" preventGrowOverflow={false} flexGrow flexWrap="nowrap" height="navbar" className="border-t border-border-separator">
      <Group justifyContent="start" preventGrowOverflow={false} flexGrow flexWrap="nowrap" gap="2xl">
        <InstituteNavbarItem name={dictionary('Button.overview')} isActive />
        <InstituteNavbarItem name={dictionary('Button.reviews')} />
      </Group>
      <Group justifyContent="start" preventGrowOverflow={false}>
        <InstituteNavbarItemButton icon={<IconBookmark />} />
        <InstituteNavbarItemButton icon={<IconShare />} />
      </Group>
    </Group>
  );
};
