import React from "react";
import { ProjectsCard } from "@/lib/types";
import { getProjectsData } from "@/lib/sanity";
import { StickyProjectStack } from "./showcases/StickyProjectStack";
import Link from "next/link";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const ProjectsSection = async () => {
  const data: ProjectsCard[] = await getProjectsData();
  
  // Use top 5 projects for the sticky stack
  const topProjects = data.slice(0, 5);

  return (
    <section id="work" className="w-full flex flex-col items-center pt-20">
      
      <div className="flex flex-col items-center mb-10 z-10 px-4">
        <h2 className="text-4xl md:text-6xl font-black text-center text-black dark:text-white tracking-tighter mb-4">
          Selected Work
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-full mb-6"></div>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-center text-lg md:text-xl">
          Scroll down to explore hand-crafted digital experiences that drive real business value.
        </p>
      </div>

      <StickyProjectStack projects={topProjects} />
      
      {/* Global View All Button */}
      <div className="mt-8 mb-24 relative z-20">
        <Link href="/work">
          <MagicButton 
            title="View All Case Studies" 
            icon={<FaLocationArrow />} 
            position="right" 
            otherClasses="bg-neutral-900 hover:bg-neutral-800 dark:bg-black dark:hover:bg-neutral-900 transition-colors"
          />
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
