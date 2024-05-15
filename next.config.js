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
    domains: ["aceternity.com", "media.licdn.com"],
  },
};