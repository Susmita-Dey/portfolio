import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { ProjectsCard } from "@/lib/types";
import { getProjectsData } from "@/lib/sanity";

const ProjectsSection = async () => {
  const data: ProjectsCard[] = await getProjectsData();
  // console.log(data);

  return (
    <section id="work">
      <HeroParallax projects={data} />
    </section>
  );
};

export default ProjectsSection;
