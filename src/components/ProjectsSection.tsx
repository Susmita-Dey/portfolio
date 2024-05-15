"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { projects } from "@/lib/data";

const ProjectsSection = () => {
  return <HeroParallax projects={projects} />;
};

export default ProjectsSection;
