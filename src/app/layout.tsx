import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import { MobileNav } from "@/components/MobileNav";
// import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Susmita Dey",
  description: "Software Developer, Designer & Freelancer",
  keywords: [
    "Susmita Dey",
    "Software Developer",
    "Web Developer",
    "Designer",
    "Freelancer",
    "Portfolio",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Susmita Dey",
    description: "Software Developer, Designer & Freelancer",
    url: "https://susmitadey.vercel.app/",
    siteName: "Susmita Dey Portfolio",
    images: [
      {
        url: "/ui-designs.png",
        width: 1200,
        height: 630,
        alt: "Susmita Dey Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Susmita Dey",
    description: "Software Developer, Designer & Freelancer",
    images: ["/ui-designs.png"],
    creator: "@its_Susmita_Dey",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`mx-6 ${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            <MobileNav />
            {children}
            <Footer />
            {/* <Analytics /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
