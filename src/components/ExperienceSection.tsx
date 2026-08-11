"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { experiencesData } from "@/lib/data";
import Link from "next/link";

const ExperienceItem = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row justify-between w-full mb-16 md:mb-32">
      {/* Timeline Node & Line */}
      <div className="absolute left-[15px] md:left-1/2 top-0 h-full w-px bg-black/10 dark:bg-white/10 hidden md:block">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full bg-primary"
        />
      </div>

      {/* Date & Company (Left Side on Desktop) */}
      <div className={`w-full md:w-[45%] flex flex-col ${index % 2 === 0 ? "md:items-end md:text-right" : "md:order-2 md:items-start"}`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          {/* Mobile Node */}
          <div className="md:hidden absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-[#0a0a0a] shadow-sm" />
          
          <h3 className="text-xl md:text-3xl font-black text-black dark:text-white tracking-tight mb-2">
            {item.title}
          </h3>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium uppercase tracking-widest mb-4">
            <Link href={item.companyPage} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              {item.company}
            </Link>
            <span className="hidden sm:block">•</span>
            <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs font-bold w-fit">
              {item.type}
            </span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 font-mono tracking-widest mb-6 md:mb-0">
            {item.date}
          </p>
        </motion.div>
      </div>

      {/* Center Node (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-white dark:bg-[#0a0a0a] border border-black/10 dark:border-white/10 items-center justify-center z-10">
        <div className="w-3 h-3 rounded-full bg-primary" />
      </div>

      {/* Description (Right Side on Desktop) */}
      <div className={`w-full md:w-[45%] flex flex-col ${index % 2 === 0 ? "md:order-2" : "md:items-end md:text-right"}`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="bg-neutral-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 md:p-8 rounded-3xl shadow-xl dark:shadow-none hover:shadow-2xl transition-shadow"
        >
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-light text-base md:text-lg">
            {item.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="experience" ref={containerRef} className="py-20 md:py-40 relative px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-center text-black dark:text-white mb-6 tracking-tighter"
        >
          The Journey
        </motion.h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"></div>
      </div>

      <div className="relative w-full">
        {/* Mobile vertical line */}
        <div className="md:hidden absolute left-[7px] top-0 h-full w-px bg-black/10 dark:bg-white/10" />

        <div className="pl-8 md:pl-0">
          {experiencesData.map((item, index) => (
            <ExperienceItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-lg text-center text-neutral-500 dark:text-neutral-400 font-medium mt-20"
      >
        ...and countless late-night open source contributions.
      </motion.p>
    </section>
  );
}
