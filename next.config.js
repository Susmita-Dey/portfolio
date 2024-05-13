// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://your-custom-domain.com/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://your-custom-domain.com/blog/:path*",
      },
    ];
  },
};
