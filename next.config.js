/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ncb-storage.s3.amazonaws.com/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io/**',
      }
    ],
  }
}

module.exports = nextConfig
