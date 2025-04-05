import type { ComponentProps } from 'react';

import { Link } from '@/components';

type CtaRankingProps = {} & ComponentProps<typeof Link>;

const CTAHero = ({ ...props }: CtaRankingProps) => {
  return (
    <Link
      text={{ size: '300-res', color: 'white', weight: 'bold', underline: true, align: 'center' }}
      {...props}
    />
  );
};

export { CTAHero };
