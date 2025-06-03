import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://assets.cesko.digital/**")],
  },
};

export default nextConfig;
