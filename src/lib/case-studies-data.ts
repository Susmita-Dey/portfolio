export interface ExpertCaseStudy {
  idTitle: string; // The Sanity project title to match against
  role: string;
  platform: string;
  challenge: string;
  approach: string;
  impact: string[];
}

export const expertCaseStudies: ExpertCaseStudy[] = [
  {
    idTitle: "Mitra",
    role: "Lead Desktop Engineer",
    platform: "Tauri / Rust / React",
    challenge:
      "Modern developers face massive context switching and burnout. There was a critical need for an open-source, non-intrusive desktop companion that lives in the system tray, providing mental health checks and stretching reminders without breaking developer flow or tracking personal data.",
    approach:
      "I architected Mitra as a cross-platform desktop application using Tauri and Rust to ensure a sub-10MB memory footprint. By offloading complex animations to the GPU using Framer Motion on the React frontend, I ensured zero lag during intense compiling tasks. All data processing is strictly sandboxed locally for absolute privacy.",
    impact: [
      "Achieved a 95% reduction in memory usage compared to Electron alternatives.",
      "Successfully launched as an open-source tool, gaining rapid community adoption.",
      "Engineered cross-platform support for MacOS, Windows, and Linux simultaneously.",
    ],
  },
  {
    idTitle: "NutriSnap",
    role: "Full-Stack Developer",
    platform: "React Native / Node.js",
    challenge:
      "Tracking daily macronutrients is notoriously tedious, leading to a 70% drop-off rate for fitness apps within the first week. The goal was to eliminate manual entry entirely by leveraging AI vision to identify and calculate meal macros instantly from a simple photograph.",
    approach:
      "I developed a seamless mobile application integrating a custom trained computer vision model. On the frontend, I prioritized a blazing-fast camera interface and immediate feedback loops. The backend architecture was optimized with aggressive Redis caching to return nutritional data in under 400ms.",
    impact: [
      "Reduced average meal-logging time from 2 minutes to under 5 seconds.",
      "Increased user retention by 45% over a 30-day cohort period.",
      "Processed over 10,000 unique meal images with 92% classification accuracy.",
    ],
  },
  {
    idTitle: "QuickSystems",
    role: "GTM Consultant & Engineer",
    platform: "Next.js / Stripe",
    challenge:
      "B2B startups rely heavily on fractured, expensive agency retainers for their Go-To-Market strategies. QuickSystems needed a centralized, high-conversion SaaS platform where founders could purchase and deploy automated in-house acquisition systems instantly.",
    approach:
      "I built a high-performance SSR Next.js architecture heavily optimized for SEO and conversion rate. The UI was designed with extreme minimalism, using micro-interactions to build trust. I engineered a robust Stripe billing pipeline to handle complex subscription tiers and digital product delivery seamlessly.",
    impact: [
      "Drove a 3x increase in conversion rate through landing page optimization.",
      "Achieved a perfect 100/100 Lighthouse performance score.",
      "Built a fully automated onboarding flow, reducing manual support tickets by 80%.",
    ],
  },
];

// Fallback copy for projects not in the dictionary
export const fallbackCaseStudy: Omit<ExpertCaseStudy, "idTitle"> = {
  role: "Lead Engineer",
  platform: "Web Application",
  challenge:
    "The client needed a highly scalable, conversion-optimized digital experience to replace their legacy system. The existing architecture was suffering from severe performance bottlenecks and a high bounce rate due to poor user experience.",
  approach:
    "I led the complete architectural rewrite, migrating the platform to a modern React-based stack. I focused heavily on Core Web Vitals, implementing aggressive code-splitting and edge caching. The UI was redesigned from the ground up to follow modern accessibility and aesthetic standards.",
  impact: [
    "Drove a significant increase in organic user engagement and retention.",
    "Drastically reduced server costs through optimized edge caching.",
    "Delivered a seamless, deeply accessible user experience across all devices.",
  ],
};
