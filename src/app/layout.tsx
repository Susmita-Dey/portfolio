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
