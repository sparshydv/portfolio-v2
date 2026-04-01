"use client";
import React from "react";
import { Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AboutPortrait from "../../public/images/sparsh-yadav-software-engineer-portrait.jpeg";

const LeetCodeIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img 
    src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png" 
    alt="LeetCode"
    {...props}
    className={cn("w-5 h-5 filter grayscale brightness-0 opacity-60 group-hover:opacity-100 group-hover:brightness-100 transition-all", props.className)}
  />
);

const socials = [
  { icon: <Github className="w-4 h-4" />, link: "https://github.com/sparshydv", label: "GitHub" },
  { icon: <Linkedin className="w-4 h-4" />, link: "https://linkedin.com/in/sparshydv/", label: "LinkedIn" },
  { icon: <LeetCodeIcon className="w-4 h-4" />, link: "https://leetcode.com/u/Sparsh_Yadav/", label: "LeetCode" },
  { icon: <Twitter className="w-4 h-4" />, link: "https://x.com/Sparsh__Yadav", label: "Twitter" },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center bg-[#FFFFFF] px-6 lg:px-16 py-20 lg:py-0 overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* LEFT: Content */}
        <div className="flex flex-col">

          {/* Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-[#F97316] rounded-full" />
            <Link href="/sparsh-yadav" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F97316] hover:underline transition-all">
              About Sparsh Yadav
            </Link>
          </div>

          {/* Heading */}
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold text-[#111] tracking-tight leading-[1.1] mb-3">
            I build systems that{" "}
            <span className="font-serif italic text-[#F97316]">actually work.</span>
          </h2>

          {/* Sub-line */}
          <p className="text-sm text-[#888] font-medium mb-5 tracking-widest uppercase">
            Developer · Problem-solver · Product thinker
          </p>

          {/* Body */}
          <div className="text-[13.5px] text-[#666] leading-[1.65] space-y-2.5 mb-5 max-w-lg">
            <p>
              I focus on building fast, scalable web applications that solve real problems —
              not just clean code, but{" "}
              <span className="text-[#111] font-medium">clear thinking behind every decision.</span>
            </p>
            <p>
              Most websites are slow, confusing, and built without purpose. I design systems
              that are{" "}
              <span className="text-[#111] font-medium">simple, performant, and built to convert.</span>
            </p>
            <p>
              Behind this is a strong problem-solving foundation:{" "}
              <a 
                href="https://leetcode.com/u/Sparsh_Yadav/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#F97316] font-semibold hover:underline decoration-[#F97316]/30 underline-offset-4 transition-all"
              >
                550+ LeetCode problems solved
              </a> —
              shaping how I think about efficiency, trade-offs, and scalability.
            </p>
          </div>

          {/* Closing line */}
          <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#bbb] mb-6 border-l-2 border-[#F97316] pl-3">
            Clarity over complexity · Performance over noise
          </p>

          {/* CTAs */}
          <div className="flex flex-row items-center gap-3 mb-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-all shadow-lg shadow-orange-500/20"
            >
              Book a Call <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 border border-black/15 hover:border-[#F97316] hover:text-[#F97316] text-[#333] px-6 py-2.5 rounded-full text-xs font-semibold transition-all"
            >
              View Work
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-black/[0.04] hover:bg-[#FFF4EE] hover:text-[#F97316] text-[#555] transition-all duration-200"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: Image + Stats */}
        <div className="flex flex-col items-center lg:items-end gap-5">

          {/* Portrait */}
          <div className="relative w-full max-w-[300px] lg:max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-black/10">
            <Image
              src={AboutPortrait}
              alt="Sparsh Yadav Full Stack Developer Portfolio"
              fill
              sizes="(max-width: 768px) 100vw, 640px"
              className="w-full h-full object-cover object-[center_top]"
              loading="lazy"
              placeholder="blur"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            {/* Orange accent bar at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F97316] to-[#FB923C]" />
          </div>
        </div>

      </div>
    </section>
  );
}
