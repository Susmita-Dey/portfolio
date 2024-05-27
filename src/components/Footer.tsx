import { fonts } from "@/lib/data";
import Link from "next/link";
import React from "react";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  // a better footer with highlighted social links -> Get from Chandra Prakash Darji
  return (
    <footer className="flex flex-col items-center mt-auto">
      <div className="flex flex-row gap-2 justify-center items-center">
        <Link
          href="mailto:susmitadeybusiness@gmail.com"
          target="_blank"
          className="items-start"
        >
          <MdEmail className="text-2xl" />
        </Link>
        <Link
          href="https://linkedin.com/in/susmitacodes"
          target="_blank"
          className="items-start"
        >
          <IoLogoLinkedin className="text-xl" />
        </Link>
        <Link
          href="https://github.com/Susmita-Dey/"
          target="_blank"
          className="items-start"
        >
          <IoLogoGithub className="text-xl" />
        </Link>
        <Link
          href="https://www.instagram.com/susmitadeyofficial"
          target="_blank"
          className="items-start"
        >
          <IoLogoInstagram className="text-xl" />
        </Link>
        <Link
          href="https://x.com/its_SusmitaDey"
          target="_blank"
          className="items-start"
        >
          <IoLogoTwitter className="text-xl" />
        </Link>
      </div>
      <span
        className={`text-base italic text-center font-bold mt-2 mb-5 ${fonts.robotoSlab.className}`}
      >
        Built with 💖 using NextJS and Tailwind
        <br />
        &copy; {new Date().getFullYear()} Susmita Dey. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
