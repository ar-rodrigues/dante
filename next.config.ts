import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite el túnel frp en desarrollo; sin esto Next bloquea /_next/* (403).
  allowedDevOrigins: ["local.agilsolutions.lat"],
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
