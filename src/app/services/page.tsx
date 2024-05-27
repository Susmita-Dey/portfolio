"use client";

import Grid from "@/components/bento/Grid";
import { Button } from "@/components/ui/button";
import { fonts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tile from "@/components/ui/Tile";
import { motion } from "framer-motion";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import { BoxHeroSection } from "@/components/BoxHeroSection";

const ServicesPage = () => {
  return (
    <section className="flex flex-col justify-center items-center my-20">
      {/* Hero section */}
      <BoxHeroSection />
      <div className="flex flex-col justify-center items-center my-10">
        <h2 className=" text-center font-bold md:text-5xl text-3xl mb-10">
          Assisting You With{" "}
          <span className={`text-primary ${fonts.robotoSlab.className}`}>
            My Services
          </span>
        </h2>
        <WobbleCardDemo />
      </div>
      <Grid />
    </section>
  );
};

export default ServicesPage;
