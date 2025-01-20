import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "cms.shelleyandblaine.com"],
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
