'use client';

import { Image, Link } from '@components';
import { cx } from 'class-variance-authority';
import type { FC } from 'react';
import { memo } from 'react';

type LogotypeProps = {
  urlHomepage?: string;
  type?: 'logo' | 'icon';
  variant?: 'white' | 'white-color' | 'black';
  responsive?: boolean;
  className?: string;
};

const imagePaths: Record<'logo' | 'icon', Record<'white' | 'white-color' | 'black', string>> = {
  logo: {
    'white': '/assets/branding/logo-white.svg',
    'white-color': '/assets/branding/logo-white-s.svg',
    'black': '/assets/branding/logo-color.svg',
  },
  icon: {
    'white': '/assets/branding/icon-white.svg',
    'white-color': '/assets/branding/icon-white-color.svg',
    'black': '/assets/branding/icon-black.svg',
  },
};

const Logotype: FC<LogotypeProps> = memo(({
  urlHomepage = '/',
  type = 'logo',
  variant = 'white',
  responsive = false,
  className = '',
}) => {
  const imageSrc = imagePaths[type]?.[variant] || '/assets/branding/logo-color.svg';
  const classInherit = type === 'logo' && 'w-[131px] min-w-[131px]';

  return (
    <Link href={urlHomepage} title="Go to homepage">
      {responsive
        ? (
            <>
              <Image
                src={imagePaths.icon[variant]}
                alt="Icon"
                title="Icon"
                loading="eager"
                className={cx('block md:hidden w-[24px] min-w-[24px]')}
              />
              <Image
                src={imagePaths.logo[variant]}
                alt="Logo"
                title="Logo"
                loading="eager"
                className={cx('hidden md:block w-[131px] min-w-[131px]')}
              />
            </>
          )
        : (
            <Image
              src={imageSrc}
              alt="Logo"
              title="Logo"
              loading="eager"
              className={cx(classInherit, className)}
            />
          )}
    </Link>
  );
});

Logotype.displayName = 'Logotype';

export { Logotype };
