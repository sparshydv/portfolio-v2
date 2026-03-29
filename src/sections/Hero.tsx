"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Code2, Palette, Globe, Zap, Layers, Server } from "lucide-react";
import { PopupModal } from "react-calendly";
import { useLoading } from "@/context/LoadingContext";

const leftSkills = [
  { icon: Palette, label: "UI/UX Design", mobileLabel: "UI/UX" },
  { icon: Code2, label: "Frontend Engineering", mobileLabel: "Frontend" },
  { icon: Layers, label: "System Architecture", mobileLabel: "Architecture" },
];

const rightSkills = [
  { icon: Globe, label: "Web Applications", mobileLabel: "Web" },
  { icon: Server, label: "API Development", mobileLabel: "API" },
  { icon: Zap, label: "Performance Optimization", mobileLabel: "Performance" },
];

// Floating particles config
const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 10,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.3 + 0.1,
}));

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [calOpen, setCalOpen] = useState(false);

  const { setAppReady } = useLoading();

  useEffect(() => {
    setMounted(true);
    // Signal to the TransitionProvider that the critical content (Hero) is ready
    setAppReady(true);
  }, [setAppReady]);

  if (!mounted) return <div className="h-screen bg-[#FAFAFA]" />;

  return (
    <section 
      id="hero" 
      className="relative h-[100dvh] w-full overflow-hidden bg-[#FAFAFA] text-[#111111] flex flex-col items-center justify-center px-6 pt-8 md:pt-12"
    >
      <h1 className="sr-only">Sparsh Yadav | Full Stack Developer</h1>
      {/* ===== BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Large ambient orange glow (center) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f07b1a]/[0.04] rounded-full blur-[120px]" />
        
        {/* Asymmetric warm glow — top right */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 right-[10%] w-[500px] h-[400px] bg-[#f07b1a] rounded-full blur-[140px] opacity-[0.04]"
        />
        
        {/* Cool accent glow — bottom left */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 left-[5%] w-[450px] h-[350px] bg-[#f0a54e] rounded-full blur-[130px] opacity-[0.03]"
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, p.opacity, 0],
              y: [0, -40, 0],
              x: [0, Math.random() > 0.5 ? 15 : -15, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-[#f07b1a]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
          />
        ))}
      </div>

      {/* ===== MAIN COMPOSITION ===== */}
      <div className="relative z-10 w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-28">
        
        {/* Mobile Skills - Top Row (Visible only on UI < md) */}
        <div className="flex md:hidden flex-wrap justify-center gap-4 mb-2">
          {[leftSkills[0], leftSkills[2], leftSkills[1]].map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-[#f07b1a]">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-[#777] uppercase tracking-wider text-center">
                  {skill.mobileLabel}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Left Skills (Desktop) */}
        <div className="hidden md:flex flex-col gap-8 items-end flex-1">
          {leftSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 group cursor-default"
              >
                <span className="text-[13px] lg:text-[14px] font-semibold text-[#777] group-hover:text-[#111] transition-colors duration-300">
                  {skill.label}
                </span>
                <div className="w-11 h-11 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-[#f07b1a] group-hover:text-[#f07b1a] group-hover:border-[#f07b1a]/20 group-hover:shadow-[0_4px_20px_rgba(240,123,26,0.15)] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Image with Glow Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex-shrink-0"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-8 md:-inset-12 rounded-[4rem] bg-gradient-to-br from-[#f07b1a]/20 via-[#ff9a44]/15 to-[#f07b1a]/10 blur-[25px] md:blur-[40px] z-0 [will-change:transform]"
          />
          
          <motion.div
            animate={{ 
              scale: [1.05, 1.15, 1.05],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -inset-16 md:-inset-20 rounded-[5rem] bg-gradient-to-tl from-[#f0a54e]/10 via-transparent to-[#f07b1a]/10 blur-[30px] md:blur-[50px] z-0 [will-change:transform]"
          />

          <div
            className="absolute -inset-5 z-0 pointer-events-none [will-change:transform] md:[animation:spin_20s_linear_infinite]"
          >
            <div className="w-full h-full rounded-[3.2rem] border-2 border-transparent" 
              style={{
                background: "linear-gradient(#FAFAFA, #FAFAFA) padding-box, linear-gradient(135deg, #f07b1a 0%, transparent 30%, transparent 70%, #f0a54e 100%) border-box",
              }}
            />
          </div>
          
          {/* Decorative static rings */}
          <div className="absolute -inset-3 rounded-[3rem] border border-[#f07b1a]/10 z-0 pointer-events-none" />
          <div className="absolute -inset-8 rounded-[3.5rem] border border-[#f07b1a]/[0.04] z-0 pointer-events-none" />
          
          {/* Image container */}
          <div className="relative w-[60vw] md:w-[240px] lg:w-[280px] xl:w-[320px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(240,123,26,0.15)] z-10 ring-1 ring-white/50 group/img cursor-pointer">
            <Image
              src="/images/sparsh-yadav-full-stack-developer.jpg"
              alt="Sparsh Yadav Full Stack Developer"
              fill
              sizes="(max-width: 768px) 60vw, 320px"
              className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
              priority
            />
            {/* Subtle bottom gradient overlay for image blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.08] via-transparent to-transparent" />
            
            {/* Hover CTA Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 opacity-0 group-hover/img:opacity-100 transition-all duration-400 flex flex-col items-center justify-center px-4 z-10">
              <p className="text-white font-bold text-[14px] md:text-[16px] text-center leading-tight mb-4 translate-y-4 group-hover/img:translate-y-0 transition-transform duration-400">
                Let&apos;s build something<br/>worth remembering.
              </p>
              <button
                onClick={() => setCalOpen(true)}
                className="bg-[#f07b1a] hover:bg-[#e06b0a] text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-lg translate-y-4 group-hover/img:translate-y-0 transition-all duration-400 delay-75 hover:shadow-[0_4px_20px_rgba(240,123,26,0.4)]"
              >
                Book a Call
              </button>
            </div>
          </div>

          {/* Small floating accent dots around image */}
          <motion.div
            animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-[#f07b1a]/30 blur-[1px] z-20"
          />
          <motion.div
            animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-4 w-2.5 h-2.5 rounded-full bg-[#f07b1a]/25 blur-[1px] z-20"
          />
          <motion.div
            animate={{ y: [-3, 4, -3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/3 -left-6 w-2 h-2 rounded-full bg-[#ff9a44]/20 blur-[1px] z-20"
          />

          {/* Tagline Pill (Overlapping image bottom) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 w-max max-w-[90vw] md:max-w-[500px] lg:max-w-[600px]"
          >
            <div className="bg-white/85 backdrop-blur-2xl border border-white/60 shadow-[0_12px_40px_rgba(240,123,26,0.1)] rounded-full px-6 md:px-10 py-3.5 md:py-4">
              <p className="font-semibold text-[#222] text-[12px] md:text-[15px] tracking-wide text-center">
                Crafting <span className="text-[#f07b1a] font-bold italic">high-performance digital experiences</span> for modern businesses
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Skills - Bottom Row (Visible only on UI < md) */}
        <div className="flex md:hidden flex-wrap justify-center gap-4 mt-12 mb-4">
          {[rightSkills[0], rightSkills[2], rightSkills[1]].map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-[#f07b1a]">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-[#777] uppercase tracking-wider text-center">
                  {skill.mobileLabel}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Right Skills */}
        <div className="hidden md:flex flex-col gap-8 items-start flex-1">
          {rightSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="w-11 h-11 rounded-full bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-[#f07b1a] group-hover:text-[#f07b1a] group-hover:border-[#f07b1a]/20 group-hover:shadow-[0_4px_20px_rgba(240,123,26,0.15)] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[13px] lg:text-[14px] font-semibold text-[#777] group-hover:text-[#111] transition-colors duration-300">
                  {skill.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ccc]">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <svg className="w-4 h-4 text-[#ccc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
      {/* Calendly Modal */}
      {mounted && typeof document !== "undefined" && (
        <PopupModal
          url="https://calendly.com/sparsh-yadav-work/new-meeting"
          onModalClose={() => setCalOpen(false)}
          open={calOpen}
          rootElement={document.body}
        />
      )}

    </section>
  );
}
