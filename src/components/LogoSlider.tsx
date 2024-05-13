"use client";

import React from "react";
import { motion } from "framer-motion";

// import codedamn from "/codedamn.svg";
// import digitea from "/digitea.svg";
// import fountane from "/fountane_logo.svg";
// import fueler from "/fueler_logo.svg";
// import wemakedevs from "/wemakedevs.png";
// import sema from "/sema-logo.svg";
// import happyturtleyoga from "/happyturtleyoga.png";

const slides = [
  { image: "/codedamn.svg" },
  { image: "/digitea.svg" },
  { image: "/fountane_logo.svg" },
  { image: "/fueler_logo.svg" },
  { image: "/wemakedevs.png" },
  { image: "/sema-logo.svg" },
  { image: "/happyturtleyoga.png" },
];

const LogoSlider = () => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative h-full w-full overflow-hidden py-12 bg-backgroundColorTertiary">
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-40 before:h-full before:bg-gradient-to-r before:from-transparent before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-40 after:h-full after:bg-gradient-to-l after:from-transparent after:to-transparent after:filter after:blur-3"></div>

      <h2 className="flex items-center justify-center text-4xl font-semibold pb-8 text-textColorPrimary">
        Companies I have worked with...
      </h2>
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex items-center justify-center h-full py-4 px-6">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="max-h-full"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
