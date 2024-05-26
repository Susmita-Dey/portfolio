import { fonts, socialMedia } from "@/lib/data";
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
      {/* <div className="flex flex-col gap-2 border rounded-lg p-8 w-full">
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
      </div> */}
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
