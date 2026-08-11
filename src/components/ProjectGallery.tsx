"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProjectsCard } from "@/lib/types";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { expertCaseStudies, fallbackCaseStudy } from "@/lib/case-studies-data";

const ProjectGallery = ({ 
  projects, 
  variant = "classic" 
}: { 
  projects: ProjectsCard[],
  variant?: "classic" | "awwwards"
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = useMemo(() => 
    projects.find((p) => p._id === selectedId), 
  [projects, selectedId]);
  
  // Find matching expert copy or use fallback
  const expertData = useMemo(() => 
    selectedProject 
      ? expertCaseStudies.find(c => c.idTitle === selectedProject.title) || fallbackCaseStudy
      : null, 
  [selectedProject]);

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8">
      
      {/* Header updates dynamically based on variant */}
      {variant === "awwwards" ? (
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-black dark:text-white mb-6">
            Selected Work
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"></div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl text-center text-lg">
            Explore case studies of products I&apos;ve built that drove significant business value.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-center md:text-5xl text-3xl font-extrabold mb-6 text-black dark:text-white">
            A curated gallery of{" "}
            <span className="text-primary">recent and past projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-full"></div>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl text-center text-lg">
            Explore detailed case studies of digital products I've built, featuring open source, freelance, and side projects that drove significant business value.
          </p>
        </div>
      )}

      {/* Grid rendering based on variant */}
      {variant === "awwwards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {projects.map((project, idx) => {
            const isLarge = idx % 3 === 0;
            return (
              <motion.div
                key={project._id}
                layoutId={`card-${project._id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                onClick={() => setSelectedId(project._id)}
                className={`group relative rounded-[2rem] overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a]
                  ${isLarge ? "md:col-span-2 h-[450px]" : "md:col-span-1 h-[350px] md:h-[450px]"}
                `}
              >
                <Image
                  src={project.thumbnailUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <motion.div
                  layoutId={`overlay-${project._id}`}
                  className="absolute inset-0 bg-gradient-to-t from-white via-white/20 dark:from-black dark:via-black/20 to-transparent transition-colors duration-300 flex flex-col justify-end p-8"
                >
                  <motion.h3
                    layoutId={`title-${project._id}`}
                    className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`purpose-${project._id}`}
                    className="text-black/70 dark:text-white/70 line-clamp-2 text-sm uppercase tracking-widest font-semibold"
                  >
                    {project.purpose}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl grid-cols-1 items-center justify-center p-4 gap-12 relative z-10">
          {projects.map((item, idx) => (
            <motion.div
              key={item._id}
              layoutId={`card-${item._id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 10) * 0.1, ease: "easeOut" }}
              className="h-full w-full sm:w-96 flex flex-col border border-black/10 dark:border-white/10 rounded-xl bg-white dark:bg-transparent shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image edge-to-edge at the top */}
              <div 
                className="relative w-full h-48 sm:h-56 cursor-pointer group shrink-0" 
                onClick={() => setSelectedId(item._id)}
              >
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <motion.div layoutId={`overlay-${item._id}`} className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <motion.p 
                  layoutId={`purpose-${item._id}`}
                  className="px-4 py-1.5 absolute text-sm font-semibold rounded-br-lg bg-primary top-0 left-0 text-white shadow-md"
                >
                  {item.purpose}
                </motion.p>
              </div>

              {/* Content area with padding */}
              <div className="flex flex-col px-6 py-6 tracking-tight justify-between flex-grow">
                <div>
                  <motion.h3 
                    layoutId={`title-${item._id}`}
                    className="!m-0 !pb-2 font-bold text-2xl text-black dark:text-white cursor-pointer hover:text-primary transition-colors" 
                    onClick={() => setSelectedId(item._id)}
                  >
                    {item.title}
                  </motion.h3>
                  
                  <div className="text-base !m-0 !p-0 font-normal">
                    <p className="lg:text-base font-light line-clamp-3 text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 gap-2">
                  <div className="flex items-center shrink min-w-0">
                    {item.icons.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-black/10 dark:border-white/20 rounded-full bg-black/5 dark:bg-white/10 w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center shadow-sm shrink-0"
                        style={{
                          transform: `translateX(-${8 * index}px)`,
                          zIndex: 10 - index
                        }}
                      >
                        <Image
                          src={icon?.iconUrl}
                          alt="icon"
                          className="p-2"
                          fill
                          unoptimized
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    ))}
                  </div>

                  <Link href={item.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                    <button className="py-2 px-3 lg:px-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-xs lg:text-sm flex items-center transition-colors whitespace-nowrap">
                      Check Live <span className="hidden sm:inline ml-1">Site</span>
                      <svg className="w-4 h-4 ml-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Deep-Dive Case Study Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && expertData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={`card-${selectedProject._id}`}
              className="relative w-full max-w-7xl h-full max-h-[90vh] rounded-[2rem] overflow-hidden z-10 shadow-2xl bg-white dark:bg-[#030303] border border-black/10 dark:border-white/10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/50 dark:bg-black/50 hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-xl border border-black/20 dark:border-white/20 rounded-full text-black dark:text-white transition-all duration-300 hover:scale-110 hover:rotate-90"
                aria-label="Close modal"
              >
                <MdClose size={24} />
              </motion.button>

              {/* Left Side: The Image Hero (Sticky on Desktop) */}
              <div className="w-full md:w-1/2 relative h-64 md:h-full shrink-0">
                <Image
                  src={selectedProject.thumbnailUrl}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                />
                <motion.div 
                  layoutId={`overlay-${selectedProject._id}`}
                  className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/60 dark:from-[#030303] dark:via-[#030303]/60 md:via-transparent to-transparent dark:md:to-[#030303]/10"
                />
                {/* Floating Tech Stack on Image (Desktop Only) */}
                <div className="hidden md:flex absolute bottom-8 left-8 right-8 flex-wrap gap-3">
                  {selectedProject.icons.map((icon, idx) => (
                    <div key={idx} className="w-12 h-12 relative bg-white/40 dark:bg-black/40 backdrop-blur-md border border-black/10 dark:border-white/20 rounded-xl flex items-center justify-center p-2.5 shadow-xl">
                      <Image src={icon.iconUrl} alt="Tech Icon" fill className="object-contain p-2.5" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Scrollable Case Study Content */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="w-full md:w-1/2 h-full overflow-y-auto scrollbar-hide relative z-20"
              >
                <div className="p-8 md:p-14 pb-24">
                  <motion.p
                    layoutId={`purpose-${selectedProject._id}`}
                    className="text-primary font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
                  >
                    {selectedProject.purpose}
                  </motion.p>
                  
                  <motion.h3
                    layoutId={`title-${selectedProject._id}`}
                    className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter mb-8 leading-[1.1]"
                  >
                    {selectedProject.title}
                  </motion.h3>

                  {/* Project Meta Info */}
                  <div className="grid grid-cols-2 gap-6 mb-12 border-y border-black/10 dark:border-white/10 py-6">
                    <div>
                      <h5 className="text-black/60 dark:text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Role</h5>
                      <p className="text-black dark:text-white text-sm font-medium">{expertData.role}</p>
                    </div>
                    <div>
                      <h5 className="text-black/60 dark:text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Platform</h5>
                      <p className="text-black dark:text-white text-sm font-medium">{expertData.platform}</p>
                    </div>
                  </div>

                  {/* The Story */}
                  <div className="prose prose-invert max-w-none">
                    <h4 className="text-xl font-bold text-black dark:text-white mb-4">The Challenge</h4>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light mb-10">
                      {expertData.challenge}
                    </p>

                    <h4 className="text-xl font-bold text-black dark:text-white mb-4">The Approach & Execution</h4>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light mb-10">
                      {expertData.approach}
                    </p>

                    <h4 className="text-xl font-bold text-black dark:text-white mb-4">The Impact</h4>
                    <ul className="space-y-4 mb-12">
                      {expertData.impact.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-3 mt-1">✦</span>
                          <span className="text-neutral-600 dark:text-neutral-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mobile Tech Stack (Visible only on mobile) */}
                  <div className="md:hidden mb-12">
                    <h4 className="text-sm font-semibold text-black/50 dark:text-white/50 uppercase tracking-widest mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.icons.map((icon, idx) => (
                        <div key={idx} className="w-10 h-10 relative bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg flex items-center justify-center p-2">
                          <Image src={icon.iconUrl} alt="Tech Icon" fill className="object-contain p-2" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="mt-12 sticky bottom-0 pt-8 pb-4 bg-gradient-to-t from-white via-white dark:from-[#030303] dark:via-[#030303] to-transparent">
                    <Link href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                      <button className="group relative w-full py-5 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                          Launch Live Project
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(ProjectGallery);
