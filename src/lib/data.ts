import React from "react";
import { MdWork, MdVolunteerActivism } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { Inter, Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const fonts = { inter, robotoSlab };

export const skillsStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Java",
  "C",
  "Python",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "React Native",
  "Flutter",
  "Redux",
  "Git",
  "GitHub",
  "GraphQL",
  "GSAP",
  "Framer Motion",
  "Django",
  "Flask",
  "MongoDB",
  "Appwrite",
  "Supabase",
  "Firebase",
  "MySQL",
  "Prisma",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Figma",
  "Canva",
  "Adobe Illustrator",
];

export const experiencesData = [
  {
    title: "Software Development Engineer",
    type: "Internship",
    company: "Digistay",
    companyPage: "https://digistay.ai/",
    location: "Dehradun, India",
    description:
      "Developed Booking Engine frontend and Recipe/Inventory Management System using Next.js, TailwindCSS, Nest.js. Built key hotel-operation features improving platform performance and workflow efficiency.",
    icon: React.createElement(MdWork),
    date: "Sep 2025 - Jan 2026",
  },
  {
    title: "Full-Stack Developer",
    type: "Freelance",
    company: "EducateUsGPT",
    companyPage: "https://educateusgpt.vercel.app/",
    location: "Remote, USA",
    description:
    "Developed EduacateUsGPT web application - a doc-based tutorial website for Data Mining and Analytics learning.",
    icon: React.createElement(GiTakeMyMoney),
    date: "March 2024 - Apr 2024",
  },
  {
    title: "Graphic Designer",
    type: "Freelance",
    company: "HappyTurtleYoga",
    companyPage: "https://www.instagram.com/happy_turtle_yoga",
    location: "Remote, India",
    description:
    "Designed social media content including posters, carousels, and infographics using Figma and Canva. Edited yoga videos for Instagram.",
    icon: React.createElement(MdWork),
    date: "Feb 2024 - Apr 2024",
  },
  {
    title: "Software Development Engineer",
    type: "Internship",
    company: "Fountane Inc.",
    companyPage: "https://fountane.com/",
    location: "Remote, India",
    description:
      "Developed Scirque's mobile and web application using React Native. Fixed critical bugs and optimized features with technical solutions.",
    icon: React.createElement(MdWork),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "Frontend Web Developer",
    type: "Internship",
    company: "Digitea",
    companyPage: "https://digitea.in/",
    location: "Remote, India",
    description:
      "Built 2 responsive e-commerce websites. Enhanced performance by 50% using Next.js and JavaScript frameworks.",
    icon: React.createElement(MdWork),
    date: "Feb 2023 - May 2023",
  },
  {
    title: "Frontend Web Developer",
    type: "Internship",
    company: "Fueler",
    companyPage: "https://fueler.io",
    location: "Remote, India",
    description:
      "Built image gallery website using Next.js, Tailwind CSS and AWS S3. Used by 1000+ users in the Fueler community.",
    icon: React.createElement(MdWork),
    date: "Jan 2023 - Feb 2023",
  },
  {
    title: "Core Team Member",
    type: "Volunteer",
    company: "WeMakeDevs",
    companyPage: "https://www.wemakedevs.org/",
    location: "Remote, India",
    description:
      "Designed thumbnails and posters, wrote technical blogs, and managed website maintenance as part of the core team.",
    icon: React.createElement(MdVolunteerActivism),
    date: "Aug 2022 - Jan 2024",
  },
  {
    title: "Technical Editor",
    type: "Internship",
    company: "Codedamn",
    companyPage: "https://codedamn.com/",
    location: "Remote, India",
    description:
      "Edited tech blogs and managed content SEO using WordPress for company publication.",
    icon: React.createElement(MdWork),
    date: "May 2022 - June 2022",
  },
];

export const socialMedia = [
  {
    name: "GitHub",
    url: "https://github.com/Susmita-Dey",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/its_Susmita_Dey",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/susmitacodes/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/SusmitaDeyOfficial/",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/susmitadey475",
  },
  {
    name: "behance",
    url: "https://behance.net/susmitadey475",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCsuzc8lqAbgUYo4yzpjtfSw",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~010d0c1e617eedd8cf",
  },
  {
    name: "Discord",
    url: "https://discord.gg/g7FmxB9uZp",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech enthusiast with a passion for development and design.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 4,
    title: "Currently building a CaseCover Printing SaaS Application",
    description: "The Inside Club",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 5,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const generalSkills = [
  "Web Development",
  "Programming",
  "Community Management",
  "App Development",
  "Web Design",
  "UI/UX Design",
  "Product Design",
  "Graphic Design",
  "Video Editing",
  "Technical Writing",
  "Talks & Shows",
];

export const certificates = [
  "/certificates/Susmita Dey_Cert_Top Contributor_GSSoC2022.png",
  "/certificates/SSOC Mentor Certificate.png",
  "/certificates/AutumnHacks.jpg",
  "/certificates/Susmita certificate(CSI Robots, Bristol Robotics Lab, UK).png",
  "/certificates/Holiday Hacks Certificate.png",
  "/certificates/Hackofiesta Participation Certificate.png",
  "/certificates/CodingNinjasPythonCertificate.png",
];
