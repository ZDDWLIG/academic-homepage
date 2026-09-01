import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  // Site is served from https://<user>.github.io/academic-homepage/
  basePath: "/academic-homepage",
  trailingSlash: true,
  images: {
    // The default image optimizer is not available with a static export.
    unoptimized: true,
  },
};

export default nextConfig;
