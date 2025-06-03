import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://assets.cesko.digital/**")],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "https://forms.fillout.com/t/rMoYry5Shaus",
      statusCode: 302,
    },
  ],
};

export default nextConfig;
