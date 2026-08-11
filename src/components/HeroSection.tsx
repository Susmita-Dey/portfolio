"use client";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ArrowDownIcon, RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import CountUp from "react-countup";
import { fonts } from "@/lib/data";
import { Spotlight } from "./ui/Spotlight";

const HeroSection = () => {
  return (
    <div className="border-2 rounded-md w-full md:mt-auto -mt-4">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="mb-6 mt-2 md:my-6 flex flex-col sm:flex-row justify-between gap-6 px-4 sm:px-12 py-4">
        {/* image */}
        <div className="border-4 rounded-md w-full sm:w-96 order-2 sm:order-1 mt-4 sm:mt-0">
          <Image
            src="/white-jacket.jpeg"
            className="h-full w-full object-cover"
            alt="profile-photo"
            width={500}
            height={500}
            priority
          />
        </div>
        {/* my name and little about with CTA */}
        <div className="flex flex-col space-y-4 sm:w-full">
          <Badge className="w-[9.5rem]">💼 Available for work</Badge>
          <h2 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black tracking-tighter">
            Hi, I&apos;m Susmita.
          </h2>
          <p
            className={`text-lg sm:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl text-balance ${fonts.robotoSlab.className}`}
          >
            I engineer scalable, pixel-perfect digital experiences. <br className="hidden sm:block" /> Full-stack developer & Open Source advocate based in <strong>India.</strong>
          </p>
          <div className="py-8">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8 sm:gap-12">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-4xl md:text-5xl font-black text-black dark:text-white">
                  <CountUp
                    duration={2.5}
                    className="counter"
                    end={5}
                    suffix="+"
                    delay={0.2}
                  />
                </span>
                <span className="text-xs md:text-sm font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest text-center">
                  Internships
                </span>
              </div>
              
              <Separator orientation="vertical" className="hidden sm:block h-12 bg-neutral-200 dark:bg-neutral-800" />
              
              <div className="flex flex-col items-center space-y-1">
                <span className="text-4xl md:text-5xl font-black text-black dark:text-white">
                  <CountUp
                    duration={2.5}
                    className="counter"
                    end={10}
                    suffix="+"
                    delay={0.2}
                  />
                </span>
                <span className="text-xs md:text-sm font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest text-center">
                  Clients Served
                </span>
              </div>
              
              <Separator orientation="vertical" className="hidden sm:block h-12 bg-neutral-200 dark:bg-neutral-800" />
              
              <div className="flex flex-col items-center space-y-1">
                <span className="text-4xl md:text-5xl font-black text-black dark:text-white">
                  <CountUp
                    duration={2.5}
                    className="counter"
                    end={25}
                    suffix="+"
                    delay={0.2}
                  />
                </span>
                <span className="text-xs md:text-sm font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest text-center">
                  Mentored
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
            <Link href="mailto:susmitadeywork@gmail.com" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-8 text-base gap-2">
                Hire Me! <RocketIcon className="text-xl animate-bounce" />
              </Button>
            </Link>
            <Link href="#work" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto border text-base gap-2 px-8 py-5"
              >
                Check My Work{" "}
                <ArrowDownIcon className="text-xl font-bold animate-bounce" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
