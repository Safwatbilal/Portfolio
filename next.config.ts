import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Unmatched URLs get the site's own 404 (app/global-not-found.tsx).
  experimental: { globalNotFound: true },
};

export default nextConfig;
