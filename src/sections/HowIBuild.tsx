"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Understand before everything",
    description:
      "I start by learning your business — your goals, your audience, your competitors, and what success actually looks like. Most developers skip this. I don't.",
  },
  {
    number: "02",
    title: "Structure before pixels",
    description:
      "Wireframes, sitemap, content hierarchy. You approve the layout before I touch a line of code. This shared clarity saves weeks of back-and-forth.",
  },
  {
    number: "03",
    title: "Design with intent",
    description:
      "Visual design that earns trust. Every choice in typography, spacing, and color is made to serve your users and convert visitors into clients.",
  },
  {
    number: "04",
    title: "Build clean, build fast",
    description:
      "Clean, semantic code built for performance. Responsive across every device. Optimized from the first commit, not patched at the end.",
  },
  {
    number: "05",
    title: "Refine together",
    description:
      "One dedicated revision round, built into every project. Your feedback is expected — this phase exists for it. No surprise charges.",
  },
  {
    number: "06",
    title: "Launch with confidence",
    description:
      "Cross-browser testing, performance checks, SEO basics, and a clean handoff with everything you need to move forward.",
  },
];

export default function HowIBuild() {
  return (
    <section
      id="how-i-build"
      className="w-full min-h-[100dvh] flex flex-col justify-center bg-[#FAFAFA] py-20 px-6 lg:px-10 overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-[1400px] mx-auto w-full mb-16 md:mb-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f07b1a] mb-4">
          Methodology
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="section-heading text-4xl md:text-[52px] font-bold text-[#111111] tracking-tight leading-none">
            How I Build
          </h2>
          <p className="text-[#777] text-sm md:text-base font-medium">
            A battle-tested <span className="text-[#111111] font-bold">6-step process</span> for high-performing web applications.
          </p>
        </div>
        {/* Divider Line */}
        <div className="mt-8 w-full h-[1px] bg-black/10" />
      </div>

      {/* Steps */}
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Timeline connector line running through circles */}
        <div className="hidden lg:block relative pointer-events-none">
          <div className="absolute top-[28px] left-0 right-0 h-[1px] bg-black/10 z-0" />
          <div className="absolute top-[28px] left-0 w-[60%] h-[1px] bg-gradient-to-r from-[#f07b1a] to-transparent z-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative flex flex-col lg:pr-6"
            >
              {/* Step number bubble */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-black border z-10 flex-shrink-0 transition-all duration-300 ${
                    i < 4
                      ? "bg-[#f07b1a] border-[#f07b1a] text-white shadow-[0_0_20px_rgba(240,123,26,0.3)]"
                      : "bg-[#FAFAFA] border-black/10 text-black/20"
                  }`}
                >
                  {step.number}
                </div>
                {/* Mobile horizontal connector */}
                <div className="lg:hidden flex-1 h-[1px] bg-black/10" />
              </div>

              {/* Title */}
              <h3 className="text-[#111111] font-bold text-base md:text-lg leading-tight mb-3">
                {step.title}
              </h3>

              {/* Full Description — no clamp */}
              <p className="text-[#666] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer tagline */}
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#555] text-sm font-medium hidden sm:block">
            Standard site · 1 revision round included · Fast turnaround
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#f07b1a] animate-pulse" />
            <span className="text-[#555] text-xs font-bold uppercase tracking-[0.2em]">
              Currently Accepting Clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
