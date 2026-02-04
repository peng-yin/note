/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/note',
  trailingSlash: true,
  // Optimize production builds
  swcMinify: true,
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
