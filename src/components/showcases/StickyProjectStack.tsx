"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectsCard } from "@/lib/types";

export const StickyProjectStack = ({ projects }: { projects: ProjectsCard[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // For 4 projects, we want the container to be 400vh tall to allow scrolling through all of them.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full pb-20" style={{ height: `${projects.length * 100}vh` }}>
      <div className="absolute top-0 left-0 w-full h-full">
        {projects.map((project, i) => {
          // Define when this specific card starts and stops its entrance/exit animations
          const targetScale = 1 - (projects.length - i) * 0.05; 
          
          return (
            <Card 
              key={project._id} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * (1 / projects.length), 1]} 
              targetScale={targetScale}
              total={projects.length}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ 
  i, 
  project, 
  progress, 
  range, 
  targetScale,
  total
}: { 
  i: number; 
  project: ProjectsCard; 
  progress: any; 
  range: number[]; 
  targetScale: number;
  total: number;
}) => {
  const containerRef = useRef(null);
  
  const scale = useTransform(progress, range, [1, targetScale]);
  // The first card starts further down, subsequent cards slide up from offscreen
  const y = useTransform(progress, [range[0] - (1/total), range[0]], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center sticky top-0 px-4 py-20 z-10">
      <motion.div 
        style={{ scale, top: `calc(-10vh + ${i * 25}px)` }} 
        className="relative w-full max-w-6xl h-[70vh] md:h-[80vh] rounded-[3rem] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 group bg-white dark:bg-[#0a0a0a]"
      >
        {/* Project Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
          />
          {/* Heavy gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-8 md:p-16 z-20 overflow-y-auto overflow-x-hidden no-scrollbar">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-auto pt-20">
            <div className="max-w-2xl">
              <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm bg-black/50 backdrop-blur-md px-4 py-2 w-fit rounded-full border border-white/10">
                {project.purpose}
              </p>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                {project.title}
              </h3>
              <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed line-clamp-2 md:line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col gap-6 shrink-0">
              <div className="flex -space-x-4">
                {project.icons.map((icon, idx) => (
                  <div key={idx} className="w-12 h-12 relative bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center p-2 shadow-xl hover:-translate-y-2 transition-transform">
                    <Image src={icon.iconUrl} alt="Tech Icon" fill className="object-contain p-2" />
                  </div>
                ))}
              </div>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="w-full md:w-auto px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-colors rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                  Launch Live Site
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
