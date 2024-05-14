"use client";

import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "next-themes";
import { useInView } from "framer-motion";

export default function ExperienceSection() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 my-28 sm:mb-40">
      <h2 className="text-3xl text-center font-bold my-10">My Experience</h2>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement date={item.date} icon={item.icon}>
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
