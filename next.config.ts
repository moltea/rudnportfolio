import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for next/image with static export
  },
};

export default nextConfig;
