import { ModeToggle } from "./ModeToggle";
import TransitionLink from "./TransitionLink";

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
      </div>
    </nav>
  );
};

export default Navigation;
