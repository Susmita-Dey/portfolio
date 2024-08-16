import React from "react";
import { fonts } from "@/lib/data";
import Link from "next/link";
import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { getTestimonialsData } from "@/lib/sanity";
import { Testimonial } from "@/lib/types";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            className="border rounded-lg border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-md w-full mx-auto p-4 h-full relative"
            key={index}
          >
            <div className="flex flex-col px-2">
              <div className="py-4 border-b sm:h-fit">
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
                    width={1000}
                    height={1000}
                    className="rounded-full border-2 p-1 object-cover bg-slate-300 dark:bg-gray-900 w-12 h-12"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-base font-medium">{testimonial.client}</p>
                  <p className="text-sm font-normal text-gray-600">
                    {testimonial.designation}
                  </p>
                </div>
                {testimonial.social && (
                  <div className="mx-2 items-end mt-1.5">
                    {testimonial.social.includes("linkedin") ? (
                      <Link
                        href={testimonial.social}
                        className="mx-2 text-2xl"
                        target="_blank"
                      >
                        <LinkedInLogoIcon className="text-2xl" />
                      </Link>
                    ) : (
                      <Link
                        href={testimonial.social}
                        className="mx-2 text-2xl"
                        target="_blank"
                      >
                        <TwitterLogoIcon className="text-2xl" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
