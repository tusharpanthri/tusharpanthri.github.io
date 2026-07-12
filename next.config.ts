import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Use the repository name as the base path for GitHub Pages
  // If this is a User Page (tusharpanthri.github.io), basePath should be empty.
  // We'll set it to empty by default but keep the logic for flexibility.
  basePath: "", 
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly for GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
