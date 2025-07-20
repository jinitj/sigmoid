import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/sigmoid',
  assetPrefix: '/sigmoid/',
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure static assets are served correctly
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
};

export default nextConfig; 