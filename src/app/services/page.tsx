import { GlobeDemo } from "@/components/GlobeDemo";
import { fonts } from "@/lib/data";
import Image from "next/image";
import React from "react";

const ServicesPage = () => {
  return (
    <section className="flex flex-col items-center my-20">
      <div className="flex flex-col items-center">
        <h2 className="font-bold md:text-5xl text-3xl">
          My{" "}
          <span className={`text-purple-600 ${fonts.robotoSlab.className}`}>
            Freelance
          </span>{" "}
          Space 🛸
        </h2>
        <div className="grid grid-cols-4 gap-6 max-w-7xl w-full p-4 mx-auto my-10">
          <div
            className={
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 rounded-md border-2 grid-flow-dense col-span-2 row-span-1"
            }
          >
            {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
            {/* <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div> */}
            {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
            {/* remove mb-2 mt-2 */}
            <div
              className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
            >
              I prioritize client collaboration, fostering open communication
            </div>
          </div>
          <div className="rounded-md border-2 p-5 relative min-h-36 grid-flow-dense col-span-2 row-span-1">
            <GlobeDemo />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-10">
        <h2 className="font-bold md:text-5xl text-3xl">
          Assisting You With{" "}
          <span className={`text-purple-600 ${fonts.robotoSlab.className}`}>
            My Services
          </span>
        </h2>
        <div className="grid grid-cols-8 gap-6 max-w-7xl w-full mx-auto p-4 rounded-md my-12 grid-flow-dense">
          <div className="rounded-md border-2 p-5 bg-grid-small-purple-600 text-center relative min-h-36 grid-flow-dense col-span-4 row-span-1">
            Hello
          </div>
          <div className="rounded-md border-2 p-5 bg-grid-small-purple-600 text-center relative min-h-36 grid-flow-dense col-span-4 row-span-2">
            Hello
          </div>
          <div className="rounded-md border-2 p-5 bg-grid-small-purple-600 text-center relative min-h-36 grid-flow-dense col-span-2 row-span-3">
            Hello
            <Image
              src={"/WebDev.png"}
              alt="WebDev"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          <div className="rounded-md border-2 p-5 bg-grid-small-purple-600 text-center relative min-h-36 grid-flow-dense col-span-2 row-span-1">
            Hello
          </div>
          <div className="rounded-md border-2 p-5 bg-grid-small-purple-600 text-center relative min-h-36 grid-flow-dense col-span-2 row-span-2">
            Hello
          </div>
          <div className="rounded-md border-2 p-5 bg-grid-small-purple-600 text-center relative min-h-36 grid-flow-dense col-span-4 row-span-2">
            Hello
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
