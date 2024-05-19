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
  // a better footer with highlighted social links -> Get from Chandra Prakash Darji
  return (
    <footer className="flex flex-col items-center mt-auto">
      <span
        className={`text-base italic text-center font-bold my-10 ${fonts.robotoSlab.className}`}
      >
        Built with 💖 using NextJS and Tailwind
        <br />
        &copy; {new Date().getFullYear()} Susmita Dey. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
