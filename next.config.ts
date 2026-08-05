import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Served from the mardenandradee.github.io user-site repo, which GitHub
// Pages publishes at the domain root — no basePath needed.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
