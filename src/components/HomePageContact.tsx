"use client";
import React, { useState } from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
import { MovingBorderDemo } from "./MovingBorderButton";
import Link from "next/link";
import { fonts, socialMedia } from "@/lib/data";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import animationData from "@/lib/confetti.json";
import Lottie from "react-lottie";

export default function HomePageContact() {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "susmitadeywork@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full">
      <h2 className="font-bold md:text-5xl text-3xl py-10">
        Need a{" "}
        <span className={`text-primary ${fonts.robotoSlab.className}`}>
          Developer
        </span>{" "}
        or a{" "}
        <span className={`text-primary ${fonts.robotoSlab.className}`}>
          Designer?
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center my-5 gap-4">
        <div className="flex flex-col relative border-2 rounded-lg p-8 w-full">
          <p className="text-xl font-medium">Shoot me an email</p>
          <div
            className={`absolute -bottom-5 right-0 ${
              copied ? "block" : "block"
            }`}
          >
            <Lottie options={defaultOptions} height={200} width={400} />
          </div>

          <MagicButton
            className="mt-10"
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleCopy}
            otherClasses="!bg-[#161A31]"
          />
        </div>
        <div className="flex flex-col gap-2 border rounded-lg p-8 w-full">
          <p className="text-xl font-medium">Connect With Me On Socials</p>
          <div className="flex flex-row justify-between items-center mt-2">
            <div className="flex-col gap-2">
              {socialMedia.slice(0, 3).map((item, index) => (
                <div className="flex space-x-2" key={index}>
                  <Link
                    className="px-1 cursor-pointer inline-flex items-center font-medium border-b border-dotted hover:border-black/0"
                    href={item.url}
                    target="_blank"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex-col gap-2">
              {socialMedia.slice(3, 6).map((item, index) => (
                <div className="flex space-x-2 gap-4" key={index}>
                  <Link
                    className="px-1 cursor-pointer inline-flex items-center font-medium border-b border-dotted hover:border-black/0"
                    href={item.url}
                    target="_blank"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex-col gap-2">
              {socialMedia.slice(6, 9).map((item, index) => (
                <div className="flex space-x-2 gap-4" key={index}>
                  <Link
                    className="px-1 cursor-pointer inline-flex items-center font-medium border-b border-dotted hover:border-black/0"
                    href={item.url}
                    target="_blank"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
    </section>
  );
}
