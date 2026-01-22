import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nurovet.whdev.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
