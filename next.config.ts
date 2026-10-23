import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
