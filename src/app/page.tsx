import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialSection from "@/components/TestimonialSection";
import HomePageContact from "@/components/HomePageContact";
import { skillsStack } from "@/lib/data";
import Process from "@/components/Process";

const HomePage = () => {
  return (
    <main className="mx-6 my-10 space-y-4 flex flex-col items-center min-h-screen">
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
