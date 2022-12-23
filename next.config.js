/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // domains:['via.placeholder.com/75x75'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'placeholder.pics',
      },
    ],
  }
}

module.exports = nextConfig
