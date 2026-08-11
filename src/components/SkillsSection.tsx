"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const SkillsSection = ({
  data,
  parentClassName,
  headingClassName,
}: {
  data: Array<String>;
  parentClassName?: string;
  headingClassName?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split data into 3 chunks for 3 rows
  const chunkSize = Math.ceil(data.length / 3);
  const row1 = data.slice(0, chunkSize);
  const row2 = data.slice(chunkSize, chunkSize * 2);
  const row3 = data.slice(chunkSize * 2);

  const renderMarqueeRow = (items: String[], direction: "left" | "right", speed: number = 30) => {
    // duplicate items for seamless loop
    const duplicatedItems = [...items, ...items, ...items];
    
    return (
      <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mb-4">
        <motion.div
          className="flex flex-nowrap gap-4 w-max"
          animate={{
            x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
          }}
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
          }}
        >
          {duplicatedItems.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-5 bg-white/60 dark:bg-black/40 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-2xl hover:scale-110 hover:bg-white dark:hover:bg-white/10 hover:shadow-[0_0_40px_rgba(var(--primary),0.2)] hover:border-primary/50 transition-all duration-300 cursor-default group"
            >
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-black to-neutral-500 dark:from-white dark:to-neutral-500 group-hover:from-primary group-hover:to-blue-500 transition-all">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className={cn(
        "mb-28 w-full max-w-[100vw] overflow-hidden py-20 bg-transparent relative",
        parentClassName
      )}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" /> */}

      <div className="flex flex-col items-center mb-24 px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className={cn("text-4xl md:text-6xl font-black text-center text-black dark:text-white tracking-tighter mb-6", headingClassName)}
        >
          My Arsenal
        </motion.h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"></div>
      </div>

      <div className="flex flex-col rotate-[-2deg] scale-[1.05] relative z-10">
        {renderMarqueeRow(row1, "left", 40)}
        {renderMarqueeRow(row2, "right", 35)}
        {renderMarqueeRow(row3, "left", 45)}
      </div>
    </section>
  );
};

export default React.memo(SkillsSection);
