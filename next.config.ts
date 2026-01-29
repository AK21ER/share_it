import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: __dirname, // Ensures Next.js uses THIS folder as root
};

export default nextConfig;
