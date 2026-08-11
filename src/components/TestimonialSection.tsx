import React from "react";
import { fonts } from "@/lib/data";
import { getTestimonialsData } from "@/lib/sanity";
import { Testimonial } from "@/lib/types";
import TestimonialList from "./TestimonialList";

const Skeleton = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2]">
    {children}
  </div>
);

const TestimonialSection = async () => {
  const testimonials: Testimonial[] = await getTestimonialsData();
  return (
    <section className="flex-col w-full my-10 dark:bg-dot-white/[0.1] bg-dot-black/[0.2] relative flex items-center justify-center">
      <h2 className="text-3xl sm:text-5xl font-bold py-4">
        What they are saying about me...
      </h2>
      <p className={`text-xl font-normal pb-8 ${fonts.robotoSlab.className}`}>
        Hear from real clients about my work 😇
      </p>
      <TestimonialList testimonials={testimonials} />
    </section>
  );
};

export default TestimonialSection;
