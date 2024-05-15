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

export const projects = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export const testimonials = [
  {
    client: "Andi Darmali",
    clientImg: "",
    designation: "Director @PT Sumber Musi Jaya",
    social: "",
    quote:
      "Susmita is a very dedicated programmer. She is trustworthy, and very responsible to her job. Susmita also has high initiative, where she will ask questions in order to synchronize our wishes with the program she created. As a result, the program she created runs well, and really helps me in my daily tasks. I wish Susmita the best, and I hope she is always successful in her work.",
  },
  {
    client: "Xiaorui Zhu(Jeremy)",
    clientImg:
      "https://media.licdn.com/dms/image/D4E03AQEOaBK_oagk2w/profile-displayphoto-shrink_800_800/0/1666368583068?e=1721260800&v=beta&t=LkloDPKtM3BMepmjlz7IiU9roim6JexqvvapP6flQoU",
    designation: "Assistant Prof. @Towson University",
    social: "https://www.linkedin.com/in/jeremychu89/",
    quote:
      "Susmita's exceptional service in developing my website exceeded expectations. With meticulous attention to detail, they seamlessly integrated database and authentication systems, resulting in a visually appealing and user-friendly interface. Their expertise in full-stack web development and collaborative approach ensured a smooth process from start to finish.",
  },
  {
    client: "Shaun Neal",
    clientImg:
      "https://media.licdn.com/dms/image/C4D03AQFBgVgsLxyejg/profile-displayphoto-shrink_800_800/0/1576115001642?e=1721260800&v=beta&t=wszS0Px9Wrcn9jrwI6VJh7hXNkCRv7kbKUfCOgrKQCM",
    designation: "CTO @Qbuster Technologies",
    social: "https://www.linkedin.com/in/shaun-neal-90a682191/",
    quote:
      "Susmita's expertise with Next.js was evident throughout our project collaboration. Her adept use of Next.js features significantly improved our website's performance. She communicated effectively, addressing our needs with proactive solutions. Susmita's attention to detail ensured a polished and functional website. Working with her has set a high standard for future projects.",
  },
  {
    client: "Vaarun Sinha",
    clientImg:
      "https://media.licdn.com/dms/image/D4D35AQE7txegVz7kzg/profile-framedphoto-shrink_800_800/0/1714977409867?e=1716382800&v=beta&t=XCcKfUejwy_y7X3Q2Xv1SytO9HUlIruO0my5dBohdLM",
    designation: "Co-founder, CTO @Digitea",
    social: "https://www.linkedin.com/in/vaarun-sinha-674114230/",
    quote:
      "Susmita has a good knowledge of Frontend Development and has a fast learner ability which makes her different in all career horizons. During her whole internship, she was passionate and dedicated about her work and tasks, she completed almost every task within the time frame being one of the responsible people.",
  },
  {
    client: "Riten Debnath",
    clientImg:
      "https://media.licdn.com/dms/image/C5603AQG_2HfAFiFCeQ/profile-displayphoto-shrink_800_800/0/1626207540616?e=1721260800&v=beta&t=U2yEicdHGrrNqQqsKN11v_KaVE8FuJihpVoRU_-faL0",
    designation: "Founder, CEO @Fueler",
    social: "https://www.linkedin.com/in/ritendebnath/",
    quote:
      "I have been consistently impressed with Susmita's attitude and productivity throughout the tenure she worked with us. Susmita is both driven and self motivated. I am confident that she will devote herself to a position with any responsibility with a high degree of diligence. I recommend Susmita without reservation. I am confident that she will establish productive relationships with any organisation in the coming future.",
  },
  {
    client: "Swati Ajmani",
    clientImg:
      "https://media.licdn.com/dms/image/D5603AQH7rzR_HkfW0A/profile-displayphoto-shrink_800_800/0/1669624644996?e=1721260800&v=beta&t=1bDlZc6RZ_2fsMpA50cKHr-rWJJwkQJ653MkQ_CVmoU",
    designation: "HR Manager @Fountane Inc.",
    social: "https://linkedin.com/in/swati-ajmani-8a22095b/",
    quote:
      "As an SDE Intern, Susmita showcased remarkable diligence and dedication throughout her tenure. Her hardworking nature and commitment to learning were evident in her contributions to our projects. We are confident that Susmita will continue to excel in her future endeavors, and we wish her the very best.",
  },
];
