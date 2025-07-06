import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { Person } from "@/lib/types";
import { getTestimonialsData } from "@/lib/sanity";

export async function People() {
  const person: Person[] = await getTestimonialsData();
  console.log(person.slice(1, 6));
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={person.slice(1, 6)} />
    </div>
  );
}
