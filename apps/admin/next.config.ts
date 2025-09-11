import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    PORT: process.env.ADMIN_PORT,
  },
};

export default nextConfig;
