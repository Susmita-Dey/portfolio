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
        hostname: 'cdn.sanity.io',
        port: '',
      },
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
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
};