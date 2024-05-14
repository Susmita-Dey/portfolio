import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";
import SkillsSection from "@/components/SkillsSection";

const HomePage = () => {
  return (
    <section className="mx-6 my-10 space-y-4 flex flex-col items-center">
      <HeroSection />
      <section className="flex flex-col">
        <LogoSlider />
      </section>
      <SkillsSection />
      <ExperienceSection />
    </section>
  );
};

export default HomePage;
