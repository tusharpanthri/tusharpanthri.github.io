import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
