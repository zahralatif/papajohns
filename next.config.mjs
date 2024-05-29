/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.papajohns.az',
          port: '',
        //   pathname: '/account123/**',
        },
      ],
    },
  }

export default nextConfig;
