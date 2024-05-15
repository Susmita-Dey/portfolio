import React from "react";
import { MdWork, MdVolunteerActivism } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { Inter, Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const fonts = { inter, robotoSlab };

export const skillsStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "C",
  "C++",
  "Python",
  "React.js",
  "React Native",
  "Redux",
  "Git",
  "GitHub",
  "GraphQL",
  "GSAP",
  "Framer Motion",
  "Shadcn-UI",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "Kotlin",
  "Django",
  "Flask",
  "Selenium",
  "MongoDB",
  "Appwrite",
  "Supabase",
  "Prisma",
  "Node.js",
  "SQL",
  "Figma",
  "Canva",
  "Adobe Illustrator",
  "Framer",
  "Wix",
  "Webflow",
  "UI/UX",
];

export const experiencesData = [
  {
    title: "Technical Editor",
    type: "Internship",
    company: "Codedamn",
    companyPage: "https://codedamn.com/",
    location: "Remote, India",
    description:
      "Successfully edited some tech blogs and managed content SEO to make it ready to publish under the company's blog page. I used Wordpress to complete the tasks.",
    icon: React.createElement(MdWork),
    date: "May 2022 - June 2022",
  },
  {
    title: "Brand Ambassador",
    type: "Volunteer",
    company: "Sema",
    companyPage: "https://www.semasoftware.com/",
    location: "Remote, India",
    description:
      "Acted as a brand ambassador for their Open Source Project and help them in getting useful github repositories and resources so that they can help beginners to get started with Sema and Github.",
    icon: React.createElement(MdVolunteerActivism),
    date: "June 2022 - Sep 2022",
  },
  {
    title: "Core Team Member",
    type: "Volunteer",
    company: "WeMakeDevs",
    companyPage: "https://www.wemakedevs.org/",
    location: "Remote, India",
    description:
      "Played many different roles being part of the community core team under Kunal Kushwaha. Designed many thumbnails and posters, wrote few technical blogs and managed/maintained the website along with building some web pages.",
    icon: React.createElement(MdVolunteerActivism),
    date: "Aug 2022 - Jan 2024",
  },
  {
    title: "Frontend Web Developer",
    type: "Internship",
    company: "Fueler",
    companyPage: "https://fueler.io",
    location: "Remote, India",
    description:
      "Built an image gallery website using Next.js, Tailwind CSS and AWS S3 along with 3 more members in the team. Utilized by over 1000 individuals, both within and beyond the Fueler community.",
    icon: React.createElement(MdWork),
    date: "Jan 2023 - Feb 2023",
  },
  {
    title: "Frontend Web Developer",
    type: "Internship",
    company: "Digitea",
    companyPage: "https://digitea.in/",
    location: "Remote, India",
    description:
      "Constructed 2 responsive e-commerce websites, aligned with assigned tasks and ensuring optimal user experience. Enhanced website performance by 50% through the implementation of Next.js and various JavaScript frameworks and animation libraries.",
    icon: React.createElement(MdWork),
    date: "Feb 2023 - May 2023",
  },
  {
    title: "Software Development Engineer",
    type: "Internship",
    company: "Fountane Inc.",
    companyPage: "https://fountane.com/",
    location: "Remote, India",
    description:
      "Worked on developing Scirque's mobile and web application; learned React Native practically. Fixed some major bugs in the application and worked on optimizing some features with suitable technical solutions.",
    icon: React.createElement(MdWork),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "Graphic Designer & Video Editor",
    type: "Internship",
    company: "HappyTurtleYoga",
    companyPage: "https://www.instagram.com/happy_turtle_yoga",
    location: "Remote, India",
    description:
      "Designed social media posters, carousels, inforgraphics using Figma and Canva. Also, edited some yoga videos for their Instagram page.",
    icon: React.createElement(MdWork),
    date: "Feb 2024 - Apr 2024",
  },
  {
    title: "Full-Stack Developer",
    type: "Freelance",
    company: "EducateUsGPT",
    companyPage: "https://educateusgpt.vercel.app/",
    location: "Remote, USA",
    description:
      "Worked on developing EduacateUsGPT web application. It's a doc-based tutorial website used to learn Data Mining and Analytics",
    icon: React.createElement(GiTakeMyMoney),
    date: "March 2024 - Apr 2024",
  },
];
