"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import Image from "next/image";
import { fonts } from "@/lib/data";

export default function AboutPage() {
  const containerRef = useRef(null);
  
  // Entire page scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Section 1: Cinematic Hero (0% to 20% of page scroll)
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], ["0%", "-50%"]);

  // Section 2: Pinned Hook (15% to 35% of page scroll)
  const hookOpacity = useTransform(scrollYProgress, [0.12, 0.15, 0.35, 0.38], [0, 1, 1, 0]);
  
  // Word 1: "I don't just write code."
  const word1Opacity = useTransform(scrollYProgress, [0.15, 0.18, 0.20, 0.21], [0, 1, 1, 0]);
  const word1Y = useTransform(scrollYProgress, [0.15, 0.18, 0.20, 0.21], [50, 0, 0, -50]);
  
  // Word 2: "I build digital experiences."
  const word2Opacity = useTransform(scrollYProgress, [0.22, 0.25, 0.27, 0.28], [0, 1, 1, 0]);
  const word2Y = useTransform(scrollYProgress, [0.22, 0.25, 0.27, 0.28], [50, 0, 0, -50]);
  
  // Word 3: "That convert."
  const word3Opacity = useTransform(scrollYProgress, [0.29, 0.32, 0.34, 0.35], [0, 1, 1, 0]);
  const word3Y = useTransform(scrollYProgress, [0.29, 0.32, 0.34, 0.35], [50, 0, 0, -50]);

  // Section 3: Parallax Story (38% to 75% of page scroll)
  const storyOpacity = useTransform(scrollYProgress, [0.38, 0.42, 0.72, 0.75], [0, 1, 1, 0]);
  
  // Image Parallax
  const imageY = useTransform(scrollYProgress, [0.4, 0.75], ["20%", "-20%"]);
  
  // Story lines
  const line1Opacity = useTransform(scrollYProgress, [0.42, 0.46, 0.49, 0.50], [0, 1, 1, 0]);
  const line1Y = useTransform(scrollYProgress, [0.42, 0.46, 0.49, 0.50], [50, 0, 0, -50]);
  
  const line2Opacity = useTransform(scrollYProgress, [0.52, 0.56, 0.59, 0.60], [0, 1, 1, 0]);
  const line2Y = useTransform(scrollYProgress, [0.52, 0.56, 0.59, 0.60], [50, 0, 0, -50]);
  
  const line3Opacity = useTransform(scrollYProgress, [0.62, 0.66, 0.69, 0.70], [0, 1, 1, 0]);
  const line3Y = useTransform(scrollYProgress, [0.62, 0.66, 0.69, 0.70], [50, 0, 0, -50]);

  // Section 4: Bento Grid Entrance
  const bentoOpacity = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);
  const bentoY = useTransform(scrollYProgress, [0.75, 0.8], [100, 0]);

  return (
    <div className="bg-white dark:bg-[#030712] transition-colors duration-500 selection:bg-primary selection:text-white" ref={containerRef}>
      
      {/* 
        We use a massive height container to enable "scrollytelling".
        The actual content is pinned to the screen using `fixed` or `sticky`.
      */}
      <div className="h-[600vh] relative w-full">
        
        {/* Section 1: Cinematic Hero */}
        <motion.div 
          className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
          style={{ opacity: heroOpacity }}
        >
          <motion.h1 
            style={{ scale: heroScale, y: heroY }}
            className="text-6xl md:text-8xl lg:text-[12rem] font-black tracking-tighter text-black dark:text-white leading-none text-center whitespace-nowrap origin-center"
          >
            MEET <span className="text-primary italic">SUSMITA.</span>
          </motion.h1>
        </motion.div>

        {/* Section 2: Pinned Hook */}
        <motion.div 
          className="fixed inset-0 pointer-events-none flex items-center justify-center"
          style={{ opacity: hookOpacity }}
        >
          <div className="flex flex-col items-center justify-center gap-4 text-center px-4">
            <motion.h2 style={{ opacity: word1Opacity, y: word1Y }} className="text-4xl md:text-7xl font-black text-black/40 dark:text-white/50 tracking-tighter absolute">
              I don't just write code.
            </motion.h2>
            <motion.h2 style={{ opacity: word2Opacity, y: word2Y }} className="text-4xl md:text-7xl font-black text-black/70 dark:text-white/80 tracking-tighter absolute">
              I build digital experiences.
            </motion.h2>
            <motion.h2 style={{ opacity: word3Opacity, y: word3Y }} className="text-5xl md:text-9xl font-black text-primary italic tracking-tighter absolute">
              That convert.
            </motion.h2>
          </div>
        </motion.div>

        {/* Section 3: Parallax Story */}
        <motion.div 
          className="fixed inset-0 pointer-events-none flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-4 md:px-12 max-w-7xl mx-auto"
          style={{ opacity: storyOpacity }}
        >
          {/* Floating Image */}
          <motion.div 
            style={{ y: imageY }}
            className="w-full md:w-1/2 relative h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10"
          >
            <Image
              src="/jacket-photo.jpeg"
              alt="Susmita Dey"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>

          {/* Punchy Facts */}
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center h-[40vh] md:h-[60vh] relative">
            <motion.div style={{ opacity: line1Opacity, y: line1Y }} className="absolute w-full">
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-black dark:text-white tracking-tighter leading-tight">
                Based in <br/><span className="text-primary italic">India.</span>
              </h3>
              <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 font-light">
                Bringing global standards to local roots.
              </p>
            </motion.div>

            <motion.div style={{ opacity: line2Opacity, y: line2Y }} className="absolute w-full">
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-black dark:text-white tracking-tighter leading-tight">
                Fueled by <br/><span className="text-primary italic">Coffee & Code.</span>
              </h3>
              <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 font-light">
                Late nights crafting pixel-perfect interfaces.
              </p>
            </motion.div>

            <motion.div style={{ opacity: line3Opacity, y: line3Y }} className="absolute w-full">
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-black dark:text-white tracking-tighter leading-tight">
                Open Source <br/><span className="text-primary italic">Advocate.</span>
              </h3>
              <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400 font-light">
                Building in public. Giving back to the community.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Section 4: Bento Grid (Normal Document Flow) */}
      <motion.div 
        style={{ opacity: bentoOpacity, y: bentoY }}
        className="max-w-7xl mx-auto px-4 md:px-8 pb-32 pt-20 relative z-10 bg-white dark:bg-[#030712] transition-colors duration-500"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter">
            The Details.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education Box */}
          <div className="md:col-span-2 bg-neutral-100/50 dark:bg-neutral-900/30 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[2rem] p-8 md:p-12 hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-300 group">
            <h3 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-8 group-hover:text-primary transition-colors">Education</h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-700 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group/timeline is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary bg-white dark:bg-black group-hover/timeline:scale-125 transition-transform shrink-0 md:order-1 md:group-odd/timeline:-translate-x-1/2 md:group-even/timeline:translate-x-1/2 shadow-[0_0_10px_rgba(var(--primary),0.5)] z-10"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800/40 shadow-sm group-hover/timeline:shadow-md dark:group-hover/timeline:bg-neutral-700/40 group-hover/timeline:border-black/20 dark:group-hover/timeline:border-white/20 transition-all">
                  <h4 className="font-bold text-black dark:text-white">Techno Main Salt Lake</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Masters College (2023-2025)</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group/timeline is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-blue-500 bg-white dark:bg-black group-hover/timeline:scale-125 transition-transform shrink-0 md:order-1 md:group-odd/timeline:-translate-x-1/2 md:group-even/timeline:translate-x-1/2 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800/40 shadow-sm group-hover/timeline:shadow-md dark:group-hover/timeline:bg-neutral-700/40 group-hover/timeline:border-black/20 dark:group-hover/timeline:border-white/20 transition-all">
                  <h4 className="font-bold text-black dark:text-white">Kalyani Mahavidyalaya</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Graduation College (2020-2023)</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group/timeline is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-neutral-500 bg-white dark:bg-black group-hover/timeline:scale-125 transition-transform shrink-0 md:order-1 md:group-odd/timeline:-translate-x-1/2 md:group-even/timeline:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-800/40 shadow-sm group-hover/timeline:shadow-md dark:group-hover/timeline:bg-neutral-700/40 group-hover/timeline:border-black/20 dark:group-hover/timeline:border-white/20 transition-all">
                  <h4 className="font-bold text-black dark:text-white">Convent of Jesus and Mary</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Class KG - XII</p>
                </div>
              </div>

            </div>
          </div>

          {/* Hobbies Box */}
          <div className="md:col-span-1 bg-gradient-to-br from-primary/90 to-blue-700/90 rounded-[2rem] p-8 md:p-12 text-white flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_40px_rgba(99,102,241,0.2)]">
            <h3 className="text-2xl md:text-4xl font-bold mb-8">Hobbies</h3>
            <div className="flex flex-wrap gap-3">
              {["Watching Movies", "Reading Books", "Writing Poems", "Landscape Photography", "Hiking"].map((hobby, i) => (
                <span key={i} className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full font-medium text-sm hover:bg-white hover:text-black transition-colors cursor-default">
                  {hobby}
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
