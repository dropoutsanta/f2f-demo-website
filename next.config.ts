import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pks.rs',
      },
      {
        protocol: 'https',
        hostname: '**.pks.rs',
      },
    ],
  },
};

export default withNextIntl(nextConfig);

