"use client";

import React, { useRef } from "react";
import { skillsStack } from "@/lib/data";
import { motion, useInView } from "framer-motion";

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

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <h2 className="text-3xl font-bold mb-10">My Skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsStack.map((skill, index) => (
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
