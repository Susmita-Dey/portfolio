/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://susmitadey.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://susmitadey.vercel.app/blog/:path*",
      },
    ];
  },
};

export default nextConfig;

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/blog",
//         destination: "https://susmitadey.vercel.app/blog",
//       },
//       {
//         source: "/blog/:path*",
//         destination: "https://susmitadey.vercel.app/blog/:path*",
//       },
//     ];
//   },
// };
