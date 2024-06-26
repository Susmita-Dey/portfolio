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
    title: "Graphic Designer",
    type: "Freelance",
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
    title: "Elicia Capuccino Coffee Bag Packaging Design",
    des: "A fictional brand packaging design inspired by the rich flavors of the coffee blend",
    link: "https://www.figma.com/file/3sEww4TQrookAlG2I0kGMu/Elicia-Capuccino-Coffee-Bag-Packaging-Design?type=design&node-id=1%3A15&mode=design&t=hjggxTFGW4RisQfR-1",
    thumbnail: "/Elicia-Capuccino.png",
    iconLists: ["/figma.svg"],
  },
  {
    title: "A Collection of Thumbnail Projects",
    des: "Creating beautiful and engaging thumbnails for my YouTube channel.",
    link: "https://www.canva.com/design/DAF1RGnE8QI/ffirowgRKiY301ftUsAtWw/edit?utm_content=DAF1RGnE8QI",
    thumbnail:
      "https://fueler.io/storage/users/timeline_image/1701270117-vp78cmcikvikmcmnzzad.jpg",
    iconLists: ["/canva.svg", "/figma.svg"],
  },
  {
    title: "JetProtocol: Cryto Website",
    des: "A landing page developed as an internship home assignment for FuelEd",
    link: "https://jet-protocol-lovat.vercel.app/",
    thumbnail:
      "https://fueler.io/storage/users/timeline_image/1697203375-qegwaxm0ng50wxairffe.jpg",
    iconLists: ["/nextjs.svg", "/tail.svg", "/js.svg"],
  },

  {
    title: "ProManager",
    des: "A productivity tool designed to supercharge and streamline your project management.",
    link: "https://promanager.vercel.app/",
    thumbnail:
      "https://fueler.io/storage/users/timeline_image/1690558591-xla1f467ouo8dmytnu74.gif",
    iconLists: [
      "/nextjs.svg",
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/appwrite.svg",
    ],
  },
  {
    title: "VRooze Mark X Landing Page Design",
    des: "The web design of a single landing page for the particular product launch.",
    link: "https://teal-direction-816217.framer.app/",
    thumbnail:
      "https://fueler.io/storage/users/timeline_image/1695815595-ceucok81wc2g7bz32tan.jpg",
    iconLists: ["/figma.svg", "/framer.svg"],
  },
  {
    title: "CodeOpsEditor: Online Free Editor for the Cloud",
    des: "Online web-based code editor you need for programming languages.",
    link: "https://codeops-editor.vercel.app/",
    thumbnail:
      "https://fueler.io/storage/users/timeline_image/1695815802-wljsb8vasx9jsknycapw.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/mongodb.svg",
      "/docker.svg",
      "/nextjs.svg",
    ],
  },

  {
    title: "Calendar | Webflow University",
    des: "The scheduling tool to help you stay organized on Earth & beyond.",
    link: "https://space-travel-calendar.webflow.io/",
    thumbnail:
      "https://fueler.io/storage/users/timeline_image/1695810857-643d252cea3ee5cdc181f2be_Calendar-app.jpg",
    iconLists: ["/figma.svg", "/webflow.svg"],
  },
  {
    title: "EngimaPeak",
    des: "A beautifully crafted mountain-themed web design landing page project.",
    link: "https://chocolate-truly-970929.framer.app/",
    thumbnail:
      "https://fueler.io/storage/users/timeline_image/1695815841-pbnxtz7ryjidnlbbj2ms.jpg",
    iconLists: ["/figma.svg", "/framer.svg"],
  },
  {
    title: "Cool Yoga Themed T-Shirt Designs",
    des: "T-shirt designs based on the theme of Yoga and also on Rainbow colors.",
    link: "https://dribbble.com/shots/20888357-Cool-Yoga-Themed-T-Shirt-Designs",
    thumbnail:
      "https://fueler.io/storage/users/timeline_image/1695810066-e0rvcnpg15ekgd0wf85c.jpg",
    iconLists: ["/figma.svg", "/canva.svg"],
  },
  {
    title: "Fueler Wallpaper Collection [NextJS]",
    des: "A team project to build a wallpaper showcasing website and download them.",
    link: "https://fueler-wallpaper.netlify.app/",
    thumbnail:
      "https://fueler.io/storage/users/timeline_image/1676450226-fueler-wallpaper-meta-image.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/nextjs.svg"],
  },
  {
    title: "EducateUsGPT",
    des: "A client project based on AI tutorial docs-themed web application",
    link: "https://educateusai.vercel.app/",
    thumbnail: "/educateusgpt.png",
    iconLists: [
      "/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/clerk.svg",
      "/mongodb.svg",
    ],
  },
  {
    title: "PetMe",
    des: "MLH's WildHacks II hackathon-winning team project to help stray pets find home.",
    link: "https://susmita-dey.github.io/PetMe/",
    thumbnail: "/PetMe.webp",
    iconLists: [
      "/html.svg",
      "/tail.svg",
      "/css.svg",
      "/js.svg",
      "/mongodb.svg",
    ],
  },
  {
    title: "Sukoon",
    des: "A stress-relieving website designed to promote mental peace and well-being.",
    link: "https://sukoon-stress-free.netlify.app/",
    thumbnail: "/Sukoon.webp",
    iconLists: ["/html.svg", "/tail.svg", "/css.svg", "/js.svg"],
  },
  {
    title: "All Round Calculator",
    des: "My first npm package for all-encompassing wide range of calculations.",
    link: "https://www.npmjs.com/package/all-round-calculator",
    thumbnail: "/All-round-calculator.png",
    iconLists: ["/nodejs.svg", "/js.svg"],
  },
  {
    title: "ZyncaBiotics",
    des: "An e-commerce medicine shop project made as part of internship at Digites.",
    link: "https://zyncabiotics.com/",
    thumbnail: "/Zynca.webp",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/nextjs.svg",
      "/django.svg",
    ],
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
