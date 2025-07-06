import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Susmita Dey | Web Developer Portfolio",
    short_name: "Susmita's Portfolio",
    description:
      "Explore Susmita Dey's professional web development portfolio, featuring her projects, skills, and expertise in modern web technologies.",
    start_url: "/",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone", "browser"],
    background_color: "#f0f0f0",
    theme_color: "#1a1a1a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      // {
      //   src: "/icon-192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      //   purpose: "any maskable",
      // },
      // {
      //   src: "/icon-512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      //   purpose: "any maskable",
      // },
    ],
    orientation: "portrait",
    scope: "/",
    lang: "en",
    categories: [
      "portfolio",
      "web development",
      "technology",
      "professional",
      "web design",
      "product design",
      "invitation cards design",
      "invitation videos",
      "e-invitation",
      "graphic design",
      "freelancer",
      "web developer",
      "software engineer",
      "software developer",
    ],
  };
}
