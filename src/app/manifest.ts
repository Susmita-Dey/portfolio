import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Susmita Dey | Web Developer Portfolio",
    short_name: "Susmita's Portfolio",
    description:
      "Explore Susmita Dey's professional web development portfolio, featuring her projects, skills, and expertise in modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#f0f0f0",
    theme_color: "#1a1a1a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
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
