"use client";

import { animatePageIn } from "@/utils/animations";
import React, { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div className="">
      <div
        id="banner-1"
        className="min-h-screen dark:bg-purple-400 bg-neutral-950 hidden md:block z-10 fixed top-0 left-0 w-1/4"
      ></div>
      <div
        id="banner-2"
        className="min-h-screen dark:bg-purple-400 bg-neutral-950 hidden md:block z-10 fixed top-0 left-1/4 w-1/4"
      ></div>
      <div
        id="banner-3"
        className="min-h-screen dark:bg-purple-400 bg-neutral-950 hidden md:block z-10 fixed top-0 left-2/4 w-1/4"
      ></div>
      <div
        id="banner-4"
        className="min-h-screen dark:bg-purple-400 bg-neutral-950 hidden md:block z-10 fixed top-0 left-3/4 w-1/4"
      ></div>
      {children}
    </div>
  );
}
