import { IconSearch } from '@tabler/icons-react';
import { Input } from '@theme/components';
import type { ComponentProps } from 'react';

type SearchBarProps = {
  variant?: 'hero' | 'default';
} & ComponentProps<typeof Input>;

const Search = ({
  variant = 'default',
  ...props
}: SearchBarProps) => {
  if (variant === 'hero') {
    return (
      <Input
        leftSection={<IconSearch />}
        boxSettings={{ boxShadow: 200, bgBackground: 'white', height: 'lg', fontSize: 300, paddingX: '2xl' }}
        {...props}
      />
    );
  }

  return (
    <Input
      leftSection={<IconSearch size={18} />}
      boxSettings={{ bgBackground: 'secondary', paddingX: 'lg', height: 'md' }}
      {...props}
    />
  );
};

export { Search };
