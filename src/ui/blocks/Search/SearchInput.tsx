import { IconSearch } from '@tabler/icons-react';
import type { ComponentProps } from 'react';

import { CSput } from '@/components';

type SearchInputProps = {
  variant?: 'hero' | 'default';
} & ComponentProps<typeof CSput>;

export const SearchInput = ({
  variant = 'default',
  ...props
}: SearchInputProps) => {
  if (variant === 'hero') {
    return (
      <CSput
        leftSection={<IconSearch />}
        boxSettings={{ boxShadow: 200, bgBackground: 'white', height: 'lg', fontSize: 300, paddingX: '2xl' }}
        {...props}
      />
    );
  }

  return (
    <CSput
      leftSection={<IconSearch size={18} />}
      boxSettings={{ bgBackground: 'secondary', paddingX: 'lg', height: 'md', className: 'search--input-default' }}
      {...props}
    />
  );
};
