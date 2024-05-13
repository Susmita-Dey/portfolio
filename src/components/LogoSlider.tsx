"use client";
import LOGOS from "@/data/LOGOS";
import React from "react";

export default function LogoSlider() {
  return (
    <div className="relative m-auto mt-8 w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-96 before:bg-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0)_80%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-96 after:-scale-x-100 after:bg-[linear-gradient(to_right,transparent_0%,rgba(0,0,0,0)_50%)] after:content-['']">
      <div className="animate-infinite-slider gap-6 flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-96 space-x-4 items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-96 space-x-4 items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
