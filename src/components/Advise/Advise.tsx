'use client';

import type { FC, ReactNode } from 'react';
import { memo } from 'react';

type AdviseProps = {
  content: string | null | ReactNode;
};

const Advise: FC<AdviseProps> = memo(({
  content = '',
}: AdviseProps) => {
  return (
    <div className="advise-info">
      <span>{content}</span>
    </div>
  );
});

Advise.displayName = 'Advise';

export { Advise };
