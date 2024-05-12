"use client"; // for nextjs

import { motion, type HTMLMotionProps } from "framer-motion";

type ExtendedMotionProps = HTMLMotionProps<"button"> & {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
};

type ShinyButtonProps = ExtendedMotionProps & {
  children: React.ReactNode;
};

export default function ShinyButton({
  children,
  type = "button", // Default to "button" type
  ...rest
}: ShinyButtonProps) {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="radial-gradient relative rounded-md px-6 py-2"
      {...rest}
    >
      <span className="text-neutral-900 font-light linear-mask relative block h-full w-full tracking-wide">
        {children}
      </span>
      <span className="linear-overlay absolute inset-0 block rounded-md p-px" />
    </motion.button>
  );
}
