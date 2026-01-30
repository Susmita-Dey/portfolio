"use client";

import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData, fonts } from "@/lib/data";
import { useTheme } from "next-themes";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function ExperienceSection() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <h2 className="text-3xl text-center font-bold my-10">My Experiences</h2>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            visible
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={animationVariants}
              transition={{ duration: 1, delay: index * 1 }}
            >
              <div className="flex flex-row justify-between w-full">
                <div>
                  <h3 className="font-semibold capitalize">{item.title}</h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                </div>
                <div>
                  <Link
                    href={item.companyPage}
                    className="font-medium capitalize hover:underline hover:underline-offset-2"
                  >
                    {item.company}
                  </Link>
                  <p className="font-normal text-gray-800 text-base dark:text-white/50 !mt-0">
                    {item.type}
                  </p>
                </div>
              </div>
              <p className="!mt-2 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <p
        className={`text-xl italic text-center font-medium my-10 ${fonts.robotoSlab.className}`}
      >
        .....and many more volunteer/freelance experiences
      </p>
    </section>
  );
}
