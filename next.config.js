/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['pbs.twimg.com', 's3.amazonaws.com', 'mm-static-media.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
