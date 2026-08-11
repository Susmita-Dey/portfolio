"use client";

import dynamic from "next/dynamic";
import { fonts } from "@/lib/data";

const WobbleCardDemo = dynamic(
  () => import("@/components/WobbleCardDemo").then((mod) => mod.WobbleCardDemo),
  { ssr: false, loading: () => <div style={{ height: 350 }} /> }
);
const Grid = dynamic(
  () => import("@/components/bento/Grid").then((mod) => mod.default),
  { ssr: false, loading: () => <div style={{ height: 350 }} /> }
);

const ServicesPage = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center pt-32 pb-20">
      {/* <BoxHeroSection /> */}
      <div className="flex flex-col justify-center items-center mb-10 w-full">
        <h2 className=" text-center font-bold md:text-5xl text-3xl mb-10">
          Assisting You With{" "}
          <span className={`text-primary ${fonts.robotoSlab.className}`}>
            My Services
          </span>
        </h2>
        <WobbleCardDemo />
      </div>
      <Grid />
    </section>
  );
};

export default ServicesPage;
