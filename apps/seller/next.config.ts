import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
   env: {
    PORT: process.env.SELLER_PORT, 
  }
};

export default nextConfig;
