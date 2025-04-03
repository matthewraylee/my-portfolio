import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: Skipping ESLint checks during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
