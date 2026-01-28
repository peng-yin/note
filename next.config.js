/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 如果你的仓库名不是 username.github.io，需要设置 basePath
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
