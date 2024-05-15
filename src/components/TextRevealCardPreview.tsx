"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
import { MovingBorderDemo } from "./MovingBorderButton";
import Link from "next/link";

export function TextRevealCardPreview() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-[#010116] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry."
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover to see it; maybe you&apos;d like to connect with me for your
          next project!
        </TextRevealCardDescription>
      </TextRevealCard>
      <Link href={"/contact"}>
        <MovingBorderDemo />
      </Link>
    </div>
  );
}
