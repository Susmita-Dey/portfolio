"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const SkillsSection = ({
  data,
  parentClassName,
  headingClassName,
  itemsClassName,
}: {
  data: Array<String>;
  parentClassName?: string;
  headingClassName?: string;
  itemsClassName?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className={cn(
        "mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40",
        parentClassName
      )}
    >
      <h2 className={cn("text-3xl font-bold mb-10", headingClassName)}>
        My Skills
      </h2>
      <ul
        className={cn(
          "flex flex-wrap justify-center gap-2 text-lg text-gray-800",
          itemsClassName
        )}
      >
        {data.map((skill, index) => (
          <motion.li
            className="bg-white border-black border-[1.5px] rounded-lg px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
