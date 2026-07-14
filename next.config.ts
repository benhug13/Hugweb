import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Schlanker Node-Server fuer PaaS-Hosting wie deplo.io (Schweiz).
  // Stoert Vercel nicht — laeuft weiterhin ueberall.
  output: "standalone",
};

export default nextConfig;
