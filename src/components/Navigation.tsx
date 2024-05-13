import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import TransitionLink from "./TransitionLink";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="w-full p-5 flex flex-row place-items-center justify-between">
      <h1 className="text-3xl tracking-tight font-bold light:text-neutral-900">
        susmita.
      </h1>
      <div className="flex gap-5">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/about" label="About" />
        <TransitionLink href="/work" label="Work" />
        <TransitionLink href="/services" label="Services" />
        <TransitionLink href="/blog" label="Blogs" />
        {/* <TransitionLink href="/products" label="Freebies" /> */}
        <TransitionLink href="/contact" label="Contact" />
        <ModeToggle />
        <Link
          href="https://docs.google.com/document/d/1dotmSNGjDiDVcK5gkoQY1PHGUHHEHqCPBppbVg6CF70/edit?usp=sharing"
          replace
        >
          <Button>View Resume</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
