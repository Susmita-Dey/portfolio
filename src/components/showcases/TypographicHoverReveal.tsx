"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectsCard } from "@/lib/types";

export const TypographicHoverReveal = ({ projects }: { projects: ProjectsCard[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full min-h-screen py-32 flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      
      {/* Background Images Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={projects[hoveredIndex].thumbnailUrl}
                alt="Background"
                fill
                className="object-cover blur-[2px]"
                priority
              />
              <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Default noise/dark background */}
        <div className="absolute inset-0 bg-[#050505] -z-10" />
      </div>

      {/* Typographic List */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-4">
        {projects.map((project, idx) => {
          const isHovered = hoveredIndex === idx;
          const isFaded = hoveredIndex !== null && hoveredIndex !== idx;

          return (
            <Link href={project.link} target="_blank" rel="noopener noreferrer" key={project._id} className="block group">
              <div
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="w-full flex flex-col md:flex-row md:items-end justify-between py-6 md:py-10 border-b border-white/10 cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="text-white/30 text-sm md:text-base font-mono mb-2 md:mb-4">
                    0{idx + 1} // {project.purpose}
                  </span>
                  <motion.h2
                    animate={{
                      x: isHovered ? 40 : 0,
                      opacity: isFaded ? 0.3 : 1,
                      color: isHovered ? "#ffffff" : "#a3a3a3",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
                  >
                    {project.title}
                  </motion.h2>
                </div>
                
                {/* Tech Stack (Only appears on hover on desktop) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0, 
                    y: isHovered ? 0 : 20 
                  }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:flex gap-4 mt-8 md:mt-0"
                >
                  {project.icons.map((icon, iconIdx) => (
                    <div key={iconIdx} className="w-12 h-12 relative bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center p-2.5">
                      <Image src={icon.iconUrl} alt="Tech Icon" fill className="object-contain p-2.5" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
};
