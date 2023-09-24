/** @type {import('next').NextConfig} */
const hostname = process.env.NEXT_PUBLIC_STORAGE_HOST_NAME;
const pathname = process.env.NEXT_PUBLIC_STORAGE_PATH_NAME;

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname,
        pathname: `${pathname}/**`,
      },
    ],
    loader: 'custom',
    loaderFile: './src/utils/loaderFile.ts',
  },
  reactStrictMode: true,
};

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra(nextConfig);

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
