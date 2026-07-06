import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Maquette : les visuels placeholder sont des SVG servis depuis /public.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
