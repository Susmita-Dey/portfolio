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
    <section className="flex flex-col justify-center items-center my-20">
      {/* <BoxHeroSection /> */}
      <div className="flex flex-col justify-center items-center mb-10">
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
