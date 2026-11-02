/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const isStaticExport = basePath !== "";

const nextConfig = {
  /* config options here */
  output: isStaticExport ? "export" : undefined,
  basePath,
  ...(isStaticExport && {
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
  allowedDevOrigins: ["192.168.1.138"],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: !isStaticExport,
  partialPrefetching: !isStaticExport,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
