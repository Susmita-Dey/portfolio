"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  { image: "/fueler.svg" },
  { image: "/TanokTech.svg" },
  { image: "/wemakedevs.png" },
  { image: "/sema-logo.svg" },
  { image: "/happyturtleyoga.png" },
];

const LogoSlider = () => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative h-full w-full overflow-hidden py-12 bg-backgroundColorTertiary">
      {/* <div className="absolute inset-0 before:absolute before:left-0 before:top-0 before:w-40 before:h-full before:bg-gradient-to-r before:from-transparent before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-40 after:h-full after:bg-gradient-to-l after:from-transparent after:to-transparent after:filter after:blur-3"></div> */}

      <h2 className="flex items-center justify-center md:text-4xl text-2xl font-semibold px-4 text-center pb-8">
        Companies I have worked with...
      </h2>
      <motion.div
        className="flex overflow-hidden"
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
            <div className="flex items-center justify-center w-full h-full py-4 px-6">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={200}
                height={100}
                unoptimized
                className="h-full w-full"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoSlider;
