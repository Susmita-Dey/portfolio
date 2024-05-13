import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";

const HomePage = () => {
  return (
    <section className="mx-6 my-10 flex flex-col items-center">
      <HeroSection />
      <section className="flex flex-col space-y-4">
        <div className="my-4">
          <h2 className="text-2xl font-bold">Companies I have worked for</h2>
        </div>
        <LogoSlider />
      </section>
    </section>
  );
};

export default HomePage;
