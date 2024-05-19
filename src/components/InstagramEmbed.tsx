"use client";

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export type ContentType = "reel" | "post";

interface InstagramEmbedProps {
  type: ContentType;
  url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ type, url }) => {
  useEffect(() => {
    // Ensure Instagram script is loaded
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-lg mx-auto">
      <Helmet>
        <script async src="//www.instagram.com/embed.js"></script>
      </Helmet>
      <blockquote
        className="instagram-media p-0 m-1 bg-white border-0 rounded-md shadow-sm max-w-full min-w-[326px]"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      >
        <div className="p-4">
          <a
            href={url}
            className="block text-center no-underline bg-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row items-center mb-4">
              <div className="bg-gray-200 rounded-full h-10 w-10 mr-4"></div>
              <div className="flex flex-col flex-grow justify-center">
                <div className="bg-gray-200 rounded w-24 h-3 mb-2"></div>
                <div className="bg-gray-200 rounded w-16 h-3"></div>
              </div>
            </div>
            {type === "reel" ? (
              <div className="pt-[19%]"></div>
            ) : (
              <div className="relative pb-[100%]">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src=""
                  alt="Instagram Content"
                />
              </div>
            )}
            <span className="block text-blue-500 text-sm font-semibold mt-4">
              View this {type === "reel" ? "reel" : "post"} on Instagram
            </span>
          </a>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
