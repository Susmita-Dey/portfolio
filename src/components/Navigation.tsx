"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import TransitionLink from "./TransitionLink";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolling(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full flex justify-center fixed top-0 z-[100] transition-all duration-500 ease-in-out ${scrolling ? "pt-4" : "pt-0"}`}>
      <nav
        className={`hidden lg:flex flex-row place-items-center justify-between transition-all duration-500 ease-in-out
          ${scrolling 
            ? "w-full lg:max-w-5xl px-8 py-4 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-full shadow-2xl scale-[0.98]" 
            : "w-full max-w-7xl mx-auto px-4 md:px-8 py-6 bg-transparent border-transparent scale-100"
          }
        `}
      >
        <h1 className="text-3xl tracking-tight font-extrabold text-black dark:text-white">
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
            target="_blank" rel="noopener noreferrer"
          >
            <Button>View Resume</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
