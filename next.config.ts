import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "https://forms.fillout.com/t/ew3SxJA4UDus",
      statusCode: 302,
    },
  ],
};

export default nextConfig;
