import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agdil.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "ikore.org",
        pathname: "/Agdil/wp-content/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/articles/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
