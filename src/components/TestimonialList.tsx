"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { fonts } from "@/lib/data";
import { Testimonial } from "@/lib/types";

export default function TestimonialList({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          className="border rounded-lg border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-md w-full mx-auto p-4 h-full relative bg-white/50 dark:bg-transparent backdrop-blur-sm hover:shadow-xl transition-shadow"
        >
          <div className="flex flex-col px-2">
            <div className="py-4 border-b sm:h-fit border-black/60 dark:border-white/80">
              <p className={`text-sm ${fonts.robotoSlab.className}`}>
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
            <div
              className={`flex flex-row mt-2 md:mt-4 ${
                testimonial.social ? "justify-normal" : "justify-start"
              }`}
            >
              <div className="mx-2 mt-1.5">
                <Image
                  src={testimonial.clientImg}
                  alt={testimonial.client}
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-black/10 dark:border-white/10 p-1 object-cover bg-slate-100 dark:bg-gray-900 w-12 h-12"
                />
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-base font-medium">{testimonial.client}</p>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {testimonial.designation}
                </p>
              </div>
              {testimonial.social && (
                <div className="mx-2 items-end mt-1.5 ml-auto pr-2">
                  {testimonial.social.includes("linkedin") ? (
                    <Link
                      href={testimonial.social}
                      className="mx-2 text-2xl hover:text-primary transition-colors"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <LinkedInLogoIcon className="text-2xl" />
                    </Link>
                  ) : (
                    <Link
                      href={testimonial.social}
                      className="mx-2 text-2xl hover:text-primary transition-colors"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <TwitterLogoIcon className="text-2xl" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
