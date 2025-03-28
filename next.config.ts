import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import './src/@theme/services/env';

const withNextIntl = createNextIntlPlugin('./src/@theme/services/request.ts');

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);
