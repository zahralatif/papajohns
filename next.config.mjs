// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'www.papajohns.az',
//           port: '',
//         //   pathname: '/account123/**',
//         },
//       ],
//     },
//   }

// export default nextConfig;
const nextConfig = {
  images: {
    domains: ['www.papajohns.az'], // Set the domain(s) from which images will be loaded
  },
};

export default nextConfig;
