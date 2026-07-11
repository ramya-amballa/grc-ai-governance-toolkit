import type { NextConfig } from "next";

/**
 * True only on a Vercel Production deployment. Preview deployments,
 * local dev, and any other host all fall back to `false` so the
 * X-Robots-Tag header below defaults closed rather than open.
 */
const isProductionDeployment = process.env.VERCEL_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  async headers() {
    if (isProductionDeployment) return [];

    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
