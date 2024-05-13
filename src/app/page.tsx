import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";

const HomePage = () => {
  return (
    <section className="mx-6 my-10 space-y-4 flex flex-col items-center">
      <HeroSection />
      <section className="flex flex-col">
        <LogoSlider />
      </section>
    </section>
  );
};

export default HomePage;
