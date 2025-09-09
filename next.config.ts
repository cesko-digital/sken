import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://assets.cesko.digital/**")],
  },
  redirects: async () => [
    {
      source: "/vysledky/:id/shrnuti",
      destination: "/vysledky/:id",
      permanent: true,
    },
  ],
};

export default nextConfig;
