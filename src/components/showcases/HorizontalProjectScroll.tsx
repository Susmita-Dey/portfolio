"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectsCard } from "@/lib/types";

export const HorizontalProjectScroll = ({ projects }: { projects: ProjectsCard[] }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Create a tall container to allow vertical scrolling
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll progress to horizontal movement (0% to -X%)
  // The exact percentage depends on the number of projects.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100}vw`]);

  return (
    <div ref={targetRef} className="relative w-full" style={{ height: `${projects.length * 100}vh` }}>
      
      {/* Sticky container that holds the horizontal track */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-100 dark:bg-[#030303] flex items-center">
        
        {/* Massive Watermark Text Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 dark:opacity-10 z-0">
          <h1 className="text-[20vw] font-black text-black dark:text-white whitespace-nowrap tracking-tighter">
            SHOWCASE
          </h1>
        </div>

        {/* The horizontally sliding track */}
        <motion.div style={{ x }} className="flex w-fit relative z-10">
          {projects.map((project, i) => (
            <div key={project._id} className="w-screen h-screen flex items-center justify-center p-8 md:p-24 shrink-0">
              <div className="relative w-full h-full max-h-[800px] flex flex-col md:flex-row gap-12 items-center">
                
                {/* Image Section (Takes up most space) */}
                <div className="relative w-full md:w-2/3 h-64 md:h-full rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer border border-black/10 dark:border-white/10">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  <span className="text-[8rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-black/20 to-transparent dark:from-white/20 mb-[-3rem] select-none">
                    0{i + 1}
                  </span>
                  
                  <h3 className="text-4xl md:text-6xl font-black text-black dark:text-white mb-6 tracking-tighter relative z-10">
                    {project.title}
                  </h3>
                  
                  <p className="text-primary font-bold tracking-[0.2em] uppercase mb-6 text-sm">
                    {project.purpose}
                  </p>

                  <p className="text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-10">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex -space-x-3">
                      {project.icons.map((icon, idx) => (
                        <div key={idx} className="w-10 h-10 relative bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/20 rounded-full flex items-center justify-center p-2 shadow-sm">
                          <Image src={icon.iconUrl} alt="Tech Icon" fill className="object-contain p-2" />
                        </div>
                      ))}
                    </div>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                        Live Site
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
