import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TestimonialSection from "@/components/TestimonialSection";
import { TextRevealCardPreview } from "@/components/TextRevealCardPreview";

const HomePage = () => {
  return (
    <section className="mx-6 my-10 space-y-4 flex flex-col items-center min-h-screen">
      <HeroSection />
      <section className="flex flex-col">
        <LogoSlider />
      </section>
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialSection />
      <TextRevealCardPreview />
    </section>
  );
};

export default HomePage;
