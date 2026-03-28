import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import "./responsive.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sparshyadav.dev"),
  title: {
    default: "Sparsh Yadav | Full Stack Developer",
    template: "%s | Sparsh Yadav",
  },
  description:
    "Sparsh Yadav is a Full Stack Developer specializing in Next.js, React, MERN stack, and GSAP animations. Building high-performance web applications and premium landing pages.",
  keywords: [
    "Sparsh Yadav",
    "Full Stack Developer",
    "Next.js Developer",
    "MERN Developer",
    "React Developer",
    "GSAP Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Sparsh Yadav", url: "https://sparshyadav.dev" }],
  creator: "Sparsh Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sparshyadav.dev",
    siteName: "Sparsh Yadav — Portfolio",
    title: "Sparsh Yadav | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, MERN stack, and GSAP animations. Building high-performance web applications and premium landing pages.",
    images: [
      {
        url: "/images/sparsh-yadav-full-stack-developer.jpg",
        width: 1200,
        height: 630,
        alt: "Sparsh Yadav Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sparsh Yadav | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, MERN stack, and GSAP animations.",
    creator: "@Sparsh__Yadav",
    images: ["/images/sparsh-yadav-full-stack-developer.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sparshyadav.dev",
  },
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-background text-primary">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
