"use client";
import { useState, useEffect } from "react";
import { Github, Linkedin, Twitter, ArrowUpRight, Zap } from "lucide-react";
import { PopupModal } from "react-calendly";
import { cn } from "@/lib/utils";

const LeetCodeIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png"
    alt="LeetCode"
    {...props}
    className={cn("w-5 h-5 filter grayscale brightness-0 opacity-60 group-hover:opacity-100 group-hover:brightness-100 transition-all", props.className)}
  />
);

const socials = [
  { icon: <Github className="w-[18px] h-[18px]" />, link: "https://github.com/sparshydv", label: "GitHub" },
  { icon: <Linkedin className="w-[18px] h-[18px]" />, link: "https://linkedin.com/in/sparshydv/", label: "LinkedIn" },
  { icon: <LeetCodeIcon className="w-[18px] h-[18px]" />, link: "https://leetcode.com/u/Sparsh_Yadav/", label: "LeetCode" },
  { icon: <Twitter className="w-[18px] h-[18px]" />, link: "https://x.com/Sparsh__Yadav", label: "Twitter" },
];

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center bg-[#111111] text-white py-16 px-6 font-sans overflow-hidden relative"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#f07b1a]/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#f07b1a]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">

        {/* Eyebrow label */}
        <div className="flex items-center gap-2 mb-8">
          <Zap className="w-3.5 h-3.5 text-[#f07b1a] fill-[#f07b1a]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f07b1a]">Open for Projects</span>
        </div>

        {/* Big Headline */}
        <h2 className="contact-headline text-[40px] sm:text-[56px] md:text-[72px] font-black tracking-tighter leading-[0.9] mb-8 max-w-4xl">
          Let&apos;s build something{" "}
          <span className="text-[#f07b1a] font-serif italic font-bold">worth</span>{" "}
          remembering.
        </h2>

        {/* Sub-text */}
        <p className="text-[#888] text-[17px] md:text-[19px] font-light leading-relaxed max-w-xl mb-14">
          Whether it&apos;s a product redesign, a new web app, or something bigger —{" "}
          <span className="text-white font-medium">let&apos;s talk.</span>
        </p>

        {/* Primary CTA */}
        <button
          onClick={() => setIsOpen(true)}
          className="group relative inline-flex items-center gap-3 bg-[#f07b1a] hover:bg-[#e06a0f] text-white text-[16px] md:text-[17px] font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-[0_0_60px_rgba(240,123,26,0.4)] hover:shadow-[0_0_80px_rgba(240,123,26,0.6)] hover:scale-105 mb-6"
        >
          <span>Book a free 15-min call</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </button>

        {/* Secondary email option */}
        <p className="text-[#666] text-[15px] mb-16">
          or email me at{" "}
          <a
            href="mailto:sparsh.yadav.work@gmail.com"
            className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-[#f07b1a] hover:text-[#f07b1a] transition-all"
          >
            sparsh.yadav.work@gmail.com
          </a>
        </p>

        {/* Divider */}
        <div className="w-full max-w-md h-[1px] bg-white/[0.06] mb-12" />

        {/* Trust badge + Socials row */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse inline-block" />
            <span className="text-[#666] text-[13px] font-medium">Usually responds within 24 hours</span>
          </div>

          <div className="flex gap-3">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.07] text-[#888] hover:bg-[#f07b1a]/10 hover:border-[#f07b1a]/30 hover:text-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {mounted && typeof document !== "undefined" && (
        <PopupModal
          url="https://calendly.com/sparsh-yadav-work/new-meeting"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.body}
        />
      )}
    </section>
  );
}
