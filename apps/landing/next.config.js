/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
  swcMinify: true,
  /**
   * Note that this can change/break without warning.
   * @see https://github.com/vercel/next.js/pull/22867
   */
  experimental: {
    externalDir: true,
  },
  env: {
    NEXT_PUBLIC_ENV_TYPE: process.env.NEXT_PUBLIC_ENV_TYPE || "dev",
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_ENV_TYPE: process.env.NEXT_PUBLIC_ENV_TYPE || "dev",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  output: "standalone",
};

console.log("Next.js Runtime Config:", nextConfig);

console.log("Environment Variables:", {
  NEXT_PUBLIC_ENV_TYPE: process.env.NEXT_PUBLIC_ENV_TYPE,
});

module.exports = nextConfig;
