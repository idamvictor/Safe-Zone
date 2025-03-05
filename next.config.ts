import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "/api/v1/image/assets/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dyp8gtllq/**",
      },
      {
        protocol: "https",
        hostname: "virtual-offline-test.s3.amazonaws.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://safezone-backend-5ye3.onrender.com/api/v1/:path*",
      },
    ];
  },
};

export default nextConfig;

// virtual - offline - test.s3.amazonaws.com;
