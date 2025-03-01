import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "prueba-tecnica-api-tienda-moviles.onrender.com",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: +(process.env.CACHE_EXPIRATION_TIME ?? 60),
  },
};

export default nextConfig;
