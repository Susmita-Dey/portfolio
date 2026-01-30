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
    <div className="border-2 rounded-md w-full md:mt-auto -mt-4 -mx-2">
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
          <h2 className="text-2xl sm:text-5xl font-bold">
            Hello, I&apos;m Susmita Dey.
          </h2>
          <p
            className={`text-xl sm:max-w-auto max-w-auto sm:text-wrap text-balance ${fonts.robotoSlab.className}`}
          >
            A software developer and designer passionate about building web & mobile
            apps,
            <br /> Open Source and communities; based in <strong>India!</strong>
          </p>
          {/* <p
            className={`text-xl sm:max-w-auto max-w-auto sm:text-wrap text-balance ${fonts.robotoSlab.className}`}
          >
            Pririotizing client work and building side projects while studying
            MCA
          </p> */}
          <div className="py-4">
            <div className="flex max-w-auto items-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 text-base gap-1">
              <div className="flex flex-col items-center space-y-2 mt-4 sm:mt-0">
                <span className="text-lg font-normal">Completed</span>
                <span className="text-xl font-semibold">
                  <CountUp
                    duration={0}
                    className="counter"
                    end={5}
                    delay={0.5}
                  />
                </span>
                <span className="text-lg font-normal">internships</span>
              </div>
              <Separator orientation="vertical" className="block h-24" />
              <div className="flex flex-col items-center space-y-2">
                <span className="text-lg font-normal">Served</span>
                <span className="text-xl font-semibold">
                  <CountUp
                    duration={0}
                    className="counter"
                    end={10}
                    delay={0.5}
                  />
                </span>
                <span className="text-lg font-normal">clients</span>
              </div>
              <Separator orientation="vertical" className="block h-24" />
              <div className="flex flex-col items-center space-y-2">
                <span className="text-lg font-normal">Mentored</span>
                <span className="text-xl font-semibold">
                  <CountUp
                    duration={0}
                    className="counter"
                    end={25}
                    delay={0.5}
                  />
                </span>
                <span className="text-lg font-normal">people</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="mailto:susmitadeywork@gmail.com">
              <Button size="lg" className="md:px-5 px-14 text-base gap-2">
                Hire Me! <RocketIcon className="text-xl animate-bounce" />
              </Button>
            </Link>
            <Link href="#work">
              <Button
                variant="secondary"
                size="lg"
                className="border text-base gap-2 md:px-5 px-auto py-5"
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
