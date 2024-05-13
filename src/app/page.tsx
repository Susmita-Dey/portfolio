import ShinyButton from "@/components/ShinyButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <section className="flex flex-col space-y-6 items-center">
      <h1 className="text-7xl font-extrabold text-center mt-10">Welcome</h1>
      <p className="text-3xl font-medium">Portfolio rebuilding is in progress!</p>
      <Button variant="default" className="italic"><Link href="https://susmita-portfolio-v1.vercel.app">Old Portfolio!</Link></Button>
    </section>
  );
};

export default HomePage;
