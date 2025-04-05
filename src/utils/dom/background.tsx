'use client';

import { useMemo } from 'react';

import { Image, usePathname } from '@/components';

export const LayoutBackground = () => {
  const pathname = usePathname();

  const isBackgroundRoute = useMemo(
    () => pathname.startsWith('/login') || pathname.startsWith('/register'),
    [pathname],
  );

  const indexImage = useMemo(() => Math.floor(Math.random() * 2) + 1, []);
  const imageBasePath = `/assets/images/form/${indexImage}`;

  if (!isBackgroundRoute) {
    return null;
  }

  return (
    <picture className="absolute inset-0 overflow-hidden">
      <source
        media="(max-width: 767.95px)"
        srcSet={`${imageBasePath}-sm.jpg`}
        type="image/jpg"
      />
      <Image
        key={imageBasePath}
        loading="eager"
        src={`${imageBasePath}.jpg`}
        alt="Background"
        className="size-full object-cover"
      />
    </picture>
  );
};
