"use client";
import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Roboto_Slab } from "next/font/google";
import { Separator } from "./ui/separator";
import { ArrowDownIcon, RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import CountUp from "react-countup";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <div className="border-2 rounded-md w-full">
      <div className="my-6 flex flex-row justify-between gap-6 px-12 py-4">
        {/* image */}
        <div className="border-4 rounded-md order-2">
          <Image
            src="/pic-purple-bg.jpg"
            className="h-96 w-full"
            alt="profile-photo"
            width={500}
            height={500}
            priority
          />
        </div>
        {/* my name and little about with CTA */}
        <div className="flex flex-col space-y-4">
          <Badge className="w-[9.5rem]">💼 Available for work</Badge>
          <h2 className="text-5xl font-bold">Hello, I&apos;m Susmita Dey.</h2>
          <p className={`text-xl w-[42rem] ${robotoSlab.className}`}>
            A software developer and designer passionate about building web
            apps, Open Source and communities; based in <strong>India!</strong>
          </p>
          <div className="py-12">
            <div className="flex h-5 items-center space-x-4 text-base">
              <div className="flex flex-col items-center space-y-2">
                <span>Completed</span>
                <span className="text-xl">
                  <CountUp
                    duration={0}
                    className="counter"
                    end={5}
                    delay={0.5}
                  />
                </span>
                <span>internships</span>
              </div>
              <Separator orientation="vertical" className="h-24" />
              <div className="flex flex-col items-center space-y-2">
                <span>Served</span>
                <span className="text-xl">
                  <CountUp
                    duration={0}
                    className="counter"
                    end={10}
                    delay={0.5}
                  />
                </span>
                <span>clients</span>
              </div>
              <Separator orientation="vertical" className="h-24" />
              <div className="flex flex-col items-center space-y-2">
                <span>Mentored</span>
                <span className="text-xl">
                  <CountUp
                    duration={0}
                    className="counter"
                    end={25}
                    delay={0.5}
                  />
                </span>
                <span>people</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="mailto:susmitadeywork@gmail.com">
              <Button size="lg" className="text-base gap-2">
                Hire Me! <RocketIcon className="text-xl animate-bounce" />
              </Button>
            </Link>
            <Link href="#work">
              <Button
                variant="secondary"
                size="lg"
                className="border text-base gap-2 px-5"
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
