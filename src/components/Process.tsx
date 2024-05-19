"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { fonts } from "@/lib/data";

export function Process() {
  return (
    <section className="flex flex-col py-20 w-full justify-center items-center">
      <h2 className="font-bold md:text-5xl text-3xl">
        My{" "}
        <span className={`text-purple-600 ${fonts.robotoSlab.className}`}>
          Style
        </span>{" "}
        of Working on{" "}
        <span className={`text-purple-600 ${fonts.robotoSlab.className}`}>
          Projects
        </span>
      </h2>
      <div className="mt-20 mb-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Planning and Strategy"
          subtitle="We'll collaborate to map out your project goals, target audiences, and key functionalities. We'll discuss things like site structure, navigation, and content requirements over a quick call."
          icon={<OverlayButton order="Step 1" />}
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          subtitle="Once we agree on the plan, I cue my lofi playlist and dive into coding/designing. From initial sketches to polished code/designs, I keep you updated every step of the way."
          icon={<OverlayButton order="Step 2" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-rose-900 overflow-hidden"
            colors={[
              // change the colors of the
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-rose-900" /> */}
        </Card>
        <Card
          title="Development & Launch"
          subtitle="This is where the magic happens! Based on the approved design, I'll translate into functional and beautiful, building your project from the ground up."
          icon={<OverlayButton order="Step 3" />}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-purple-800"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
      dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col space-y-3">
          <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
          <p
            className="text-base opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

const OverlayButton = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple-100 backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
