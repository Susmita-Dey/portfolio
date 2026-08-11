import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";
import SkillsSection from "@/components/SkillsSection";
import { skillsStack } from "@/lib/data";
import dynamic from "next/dynamic";

const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
const TestimonialSection = dynamic(() => import("@/components/TestimonialSection"));
const Process = dynamic(() => import("@/components/Process"));
const HomePageContact = dynamic(() => import("@/components/HomePageContact"));

const HomePage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 md:pt-36 pb-10 space-y-4 flex flex-col items-center min-h-screen">
      <HeroSection />
      <LogoSlider />
      <SkillsSection data={skillsStack} />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialSection />
      <Process />
      <HomePageContact />
    </main>
  );
};

export default HomePage;
