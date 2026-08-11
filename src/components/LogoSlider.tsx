"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  { image: "/codedamn.svg" },
  { image: "/digitea.svg" },
  { image: "/fountane_logo.svg" },
  { image: "/fueler.svg" },
  { image: "/TanokTech.svg" },
  { image: "/wemakedevs.png" },
  { image: "/sema-logo.svg" },
  { image: "/happyturtleyoga.png" },
  { image: "/aerotalk.png" },
];

const LogoSlider = () => {
  // Duplicate slides to create a seamless infinite loop
  const duplicatedSlides = [...slides, ...slides];

  return (
    <section className="relative w-full overflow-hidden py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-3"
          >
            Trusted by
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-center text-black dark:text-white mb-6"
          >
            Companies I have worked with
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"
          ></motion.div>
        </div>
      </div>

      <div className="relative mt-8 w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex flex-nowrap w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center mx-8 md:mx-12 w-[160px] md:w-[200px] h-[80px] md:h-[100px] group cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center transition-all duration-300 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                <Image
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  width={200}
                  height={100}
                  unoptimized
                  className="object-contain max-h-[60px] md:max-h-[80px] w-auto drop-shadow-lg"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSlider;
