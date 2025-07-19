import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.insalud.pe",
      },
      {
        protocol: "https",
        hostname: "prensa.insalud.pe",
      },
    ],
  },
};

export default nextConfig;
