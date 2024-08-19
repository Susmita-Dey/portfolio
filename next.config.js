// async rewrites() {
//   return [
//     {
//       source: "/blog",
//       destination: "https://susmitawrites.vercel.app/blog",
//     },
//     {
//       source: "/blog/:path*",
//       destination: "https://susmitawrites.vercel.app/blog/:path*",
//     },
//   ];
// },
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
};