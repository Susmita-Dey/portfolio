"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import TransitionLink from "./TransitionLink";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
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
      className={`w-full p-5 sticky top-0 z-30 hidden lg:block ${
        scrolling ? "bg-inherit" : "bg-transparent"
      } `}
    >
      <div className="flex flex-row place-items-center justify-between">
        <h1 className="text-3xl tracking-tight font-bold light:text-neutral-900 mb-4 sm:mb-0">
          <Link href="/">susmita.</Link>
        </h1>
        <div className="flex flex-row gap-5">
          <TransitionLink href="/" label="Home" />
          <TransitionLink href="/about" label="About" />
          <TransitionLink href="/work" label="Work" />
          <TransitionLink href="/services" label="Services" />
          <TransitionLink
            href="https://susmitadey.hashnode.dev/"
            label="Blogs"
          />
          {/* <TransitionLink href="/blogs" label="Blogs" /> */}
          {/* <TransitionLink href="/products" label="Freebies" /> */}
          <TransitionLink href="/contact" label="Contact" />
          <ModeToggle />
          <Link
            href="https://drive.google.com/file/d/1YrD_ykD38trfqwm8La2F_x-0Rw_m-P4g/view?usp=sharing"
            target="_blank"
          >
            <Button>View Resume</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
