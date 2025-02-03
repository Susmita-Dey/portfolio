"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import TransitionLink from "./TransitionLink";
import { ModeToggle } from "./ModeToggle";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <nav
      className={`w-full p-3 flex sticky top-0 z-30 flex-row lg:hidden place-items-center justify-between ${
        scrolling ? "bg-inherit" : "bg-transparent"
      }`}
    >
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
          >
            <svg
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => {
              setOpen(true);
            }}
          >
            <span className="text-base tracking-tight font-semibold light:text-neutral-900 mb-4 sm:mb-0">
              susmita.
            </span>
          </Link>
          <div className="my-4 h-[calc(100vh-8rem)] pb-10">
            <div className="flex flex-col space-y-2 justify-start items-start text-left">
              <TransitionLink href="/" label="Home" />
              <TransitionLink href="/about" label="About" />
              <TransitionLink href="/work" label="Work" />
              <TransitionLink href="/services" label="Services" />
              <TransitionLink href="/blogs" label="Blogs" />
              {/* <TransitionLink href="/products" label="Freebies" /> */}
              <TransitionLink href="/contact" label="Contact" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex flex-row justify-between items-center gap-4 w-full">
        <h1 className="text-xl tracking-tight font-semibold light:text-neutral-900 sm:mb-0">
          <Link href="/">susmita.</Link>
        </h1>
        <div className="flex flex-row justify-end space-x-2">
          <ModeToggle />
          <Link
            href="https://drive.google.com/file/d/1iNvC2tndfx8yw8pS8G6XDrAVlbe7uCLZ/view?usp=sharing"
            target="_blank"
          >
            <Button size="default">View Resume</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
