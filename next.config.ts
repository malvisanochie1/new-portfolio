import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  compress: true,
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion", "lucide-react"],
  },
};

export default nextConfig;
