"use client";
import React from "react";
import { Boxes } from "./ui/BackgroundBoxes";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { People } from "./People";

export function BoxHeroSection() {
  return (
    <div className="h-full relative w-full overflow-hidden mb-10 py-10 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full z-5 [mask-image:radial-gradient(transparent,transparent)] pointer-events-none" />

      <Boxes className="-z-2" />
      <div className="flex flex-col space-y-6 items-center text-center justify-center w-full">
        <h1 className={cn("md:text-6xl text-3xl relative z-5 w-10/12")}>
          Building modern high-quality websites and designs for startups and
          entrepreneurs
        </h1>
        <p className="text-center mt-2 text-neutral-500 relative z-5">
          Services that help you generate 10x leads
        </p>
        <People />
        <Link href="/contact" className="relative z-5">
          <Button size="lg">Get a Quote Now</Button>
        </Link>
      </div>
    </div>
  );
}
