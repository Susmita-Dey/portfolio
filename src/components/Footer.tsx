import { fonts } from "@/lib/data";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mt-auto">
      <div className="flex gap-1 -mb-6">
        <Link href={"mailto:susmitadeywork@gmail.com"}>
          <MdEmail className="text-lg cursor-pointer" />
        </Link>
        <Link href={"https://github.com/Susmita-Dey"}>
          <GitHubLogoIcon className="text-2xl cursor-pointer" />
        </Link>
        <Link href={"https://twitter.com/its_SusmitaDey"}>
          <TwitterLogoIcon className="text-2xl cursor-pointer" />
        </Link>
        <Link href={"/"}>
          <LinkedInLogoIcon className="text-2xl cursor-pointer" />
        </Link>
        <Link href={"/"}>
          <DiscordLogoIcon className="text-2xl cursor-pointer" />
        </Link>
        <Link href={"/"}>
          <InstagramLogoIcon className="text-2xl cursor-pointer" />
        </Link>
      </div>
      <div className="flex">
        <p
          className={`text-base italic text-center font-bold my-10 ${fonts.robotoSlab.className}`}
        >
          Built with 💖 using NextJS and Tailwind
          <br />
          &copy; 2024 Susmita Dey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
