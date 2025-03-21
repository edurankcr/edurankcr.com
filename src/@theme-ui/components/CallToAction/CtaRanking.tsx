import { Link } from '@theme/components';
import type { ComponentProps } from 'react';

type CtaRankingProps = {} & ComponentProps<typeof Link>;

const CtaRanking = ({ ...props }: CtaRankingProps) => {
  return (
    <Link
      text={{ size: '300-res', color: 'white', weight: 'bold', underline: true, align: 'center' }}
      {...props}
    />
  );
};

export { CtaRanking };
