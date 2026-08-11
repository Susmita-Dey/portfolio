"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { ProjectsCard } from "@/lib/types";

export const HeroParallax = ({ projects }: { projects: ProjectsCard[] }) => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="lg:h-[380vh] md:h-[240vh] h-[380vh] py-40 overflow-hidden lg:px-96 antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20">
          {firstRow.map((project: ProjectsCard) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-10">
          {secondRow.map((project: ProjectsCard) => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((project: ProjectsCard) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-3xl md:text-7xl font-black text-black dark:text-white tracking-tighter">
        Crafting World-Class <br /> Digital Experiences
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-600 dark:text-neutral-200 leading-relaxed font-light">
        I build scalable, high-performance applications that drive global conversions. 
        Explore a curated gallery of products I've engineered from the ground up, blending 
        cutting-edge technology with award-winning design.
      </p>
      <Link href="/work">
        <Button size="lg" className="text-base font-bold mt-8 shadow-xl">
          View All Case Studies
        </Button>
      </Link>
    </div>
  );
};

export const ProjectCard = ({
  project,
  translate,
}: {
  project: ProjectsCard;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="group/project relative h-96 min-w-full lg:w-1/2 flex-shrink-0"
    >
      <Link
        href={project.link}
        className="block group-hover/project:shadow-2xl"
        target="_blank" rel="noopener noreferrer"
      >
        <Image
          src={project.thumbnailUrl}
          fill
          className="object-fill absolute h-full w-full inset-0 rounded-sm"
          alt={project.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/project:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/project:opacity-100 text-white">
        {project.title}
      </h2>
    </motion.div>
  );
};
