"use client";

import React, { useState } from "react";
import { ProjectsCard } from "@/lib/types";
import { HeroParallax } from "./ui/hero-parallax";
import { StickyProjectStack } from "./showcases/StickyProjectStack";
import { HorizontalProjectScroll } from "./showcases/HorizontalProjectScroll";
import { TypographicHoverReveal } from "./showcases/TypographicHoverReveal";

export default function ShowcaseToggle({ 
  topProjects, 
  extendedProjects 
}: { 
  topProjects: ProjectsCard[],
  extendedProjects: ProjectsCard[]
}) {
  const [variant, setVariant] = useState<"parallax" | "stack" | "horizontal" | "typography">("stack");

  return (
    <div className="w-full relative flex flex-col items-center">
      
      {/* Dev Toggle Bar */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 flex flex-wrap justify-center gap-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl p-4 rounded-full border border-black/10 dark:border-white/10 shadow-2xl w-[90%] md:w-auto">
        <button 
          onClick={() => setVariant("stack")}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${variant === "stack" ? "bg-primary text-white" : "bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"}`}
        >
          V1: Sticky Stack
        </button>
        <button 
          onClick={() => setVariant("horizontal")}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${variant === "horizontal" ? "bg-primary text-white" : "bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"}`}
        >
          V2: Horizontal
        </button>
        <button 
          onClick={() => setVariant("typography")}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${variant === "typography" ? "bg-primary text-white" : "bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"}`}
        >
          V3: Typography
        </button>
        <button 
          onClick={() => setVariant("parallax")}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${variant === "parallax" ? "bg-primary text-white" : "bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"}`}
        >
          V4: 3D Parallax
        </button>
      </div>

      <div className="w-full">
        {variant === "stack" && <StickyProjectStack projects={topProjects} />}
        {variant === "horizontal" && <HorizontalProjectScroll projects={topProjects} />}
        {variant === "typography" && <TypographicHoverReveal projects={topProjects} />}
        {variant === "parallax" && <HeroParallax projects={extendedProjects} />}
      </div>
      
    </div>
  );
}
