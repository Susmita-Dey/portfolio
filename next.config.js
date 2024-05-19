module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://susmitawrites.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://susmitawrites.vercel.app/blog/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'fueler.io',
        pathname: '**',
      },
    ],
  },
};