import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// GitHub Pages serves this repo under /portfolio/, not at the domain root.
// Only apply the basePath in CI so `npm run dev` still runs at "/" locally.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubActions ? `/${repoName}` : "",
  assetPrefix: isGithubActions ? `/${repoName}/` : "",
};

export default withNextIntl(nextConfig);
