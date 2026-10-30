import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['c1jcaowrig.preview.c39.airoapp.ai'],
  // experimental: {
  //   agentFeedback: true,
  // },
  // cacheComponents: true,
  // partialPrefetching: true,
  // turbopack: {
  //   rules: {
  //     "*.css": {
  //       loaders: ["@tailwindcss/turbopack"],
  //       as: "*.css",
  //     },
  //   },
  // },
};

export default nextConfig;
