"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";
import Link from "next/link";
import { MovingBorder, MovingBorderDemo } from "./MovingBorderButton";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 h-full bg-pink-800 min-h-[300px] lg:min-h-[350px]"
        className=""
      >
        <div className="max-w-xs">
          <Link
            className="hover:underline hover:underline-offset-2"
            href="/work/web-dev"
          >
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Web Development
            </h2>
          </Link>
          <p className="mt-4 mb-2 text-left  text-base/6 text-neutral-200">
            Building high-quality websites using code(Nextjs specialized) and
            no-code web design tools!
          </p>
        </div>
        <Image
          src="/Sukoon.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 h-full bg-blue-900 min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <Link
            className="hover:underline hover:underline-offset-2"
            href="/work/ui-ux"
          >
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              UI/UX Designs
            </h2>
          </Link>
          <p className="mt-4 mb-2 text-left text-base/6 text-neutral-200">
            Leveraging my design skills in Figma to build some cool UI screens
            taking UX into considerations.
          </p>
        </div>
        <Image
          src="/ui-designs.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[30%] object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-purple-950">
        <Link
          className="hover:underline hover:underline-offset-2 cursor-pointer"
          href="/work/graphic-design"
        >
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Graphic Design
          </h2>
        </Link>
        <p className="mt-4 mb-2 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Beautifully crafting any social media poster or carousel or any type
          of graphic design item.
        </p>
        <Image
          src="/graphic-design.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[30%] object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <Link
            className="hover:underline hover:underline-offset-2"
            href="/work"
          >
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Software Development
            </h2>
          </Link>
          <p className="mt-4 mb-2 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Whether it&apos;s an web or mobile application or a small program or
            bot, I&apos;m here to help you out!
          </p>
        </div>
        <Link href={"/contact"}>
          <MovingBorderDemo />
        </Link>
        <Image
          src="/educateusgpt.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-rose-900">
        <Link
          className="hover:underline hover:underline-offset-2 cursor-pointer"
          href="/work/e-invites"
        >
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            E-Invitation Cards/Videos
          </h2>
        </Link>
        <p className="mt-4 mb-2 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Designing mesmerizing cards and videos for Wedding, Birthday and all
          occasions.
        </p>
        <Image
          src="/Wedding-Invites.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[30%] object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
