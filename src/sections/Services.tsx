"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Globe, Zap, BarChart3, Layers } from "lucide-react";
import { PopupModal } from "react-calendly";

const services = [
  {
    number: "01",
    icon: Layers,
    title: "UI/UX Transformations",
    description:
      "Modern, responsive, high-performance interfaces. Pixel-precise implementations that work across every device and feel premium at every breakpoint.",
    tags: ["React", "Tailwind", "Framer Motion", "GSAP"],
  },
  {
    number: "02",
    icon: Globe,
    title: "Web Application Development",
    description:
      "Custom full-stack apps built for scalability and performance. From architecture decisions to deployment, every layer is built with intent.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    number: "03",
    icon: Zap,
    title: "Startup MVP Development",
    description:
      "Turn your idea into a working product quickly. I cut unnecessary complexity and build only what you need to get to market and start learning.",
    tags: ["Rapid Build", "Lean Stack", "Ship Fast", "Lovable"],
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Performance Optimization",
    description:
      "Improve speed, reduce server load, and optimize API usage. Real performance gains measured in Core Web Vitals — not just impressions.",
    tags: ["Core Web Vitals", "Caching", "API Tuning"],
  },
];

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="services" className="w-full min-h-[100dvh] flex flex-col justify-center bg-[#FFFFFF] border-t border-black/[0.04] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f07b1a] mb-4">
              Services
            </p>
            <h2 className="section-heading text-4xl md:text-[52px] font-bold text-[#111111] tracking-tight leading-none">
              What I do
            </h2>
          </div>
          <p className="text-[#666] text-base max-w-sm leading-relaxed">
            Four focused disciplines. Each one refined through real client work to deliver measurable business impact.
          </p>
        </div>

        {/* Service Rows */}
        <div className="flex flex-col border-t border-black/[0.06]">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 py-12 md:py-16 border-b border-black/[0.06] transition-all duration-500 hover:bg-[#FAFAFA] px-6 -mx-6 rounded-[40px]"
              >
                {/* Left side: Number + Icon + Title */}
                <div className="flex items-center gap-6 lg:w-[45%] flex-shrink-0">
                  <span className="hidden md:block text-[14px] font-black tracking-widest text-[#ccc] group-hover:text-[#f07b1a] transition-colors duration-300 w-10">
                    {svc.number}
                  </span>
                  
                  <div className="w-16 h-16 rounded-[24px] bg-[#f5f5f5] text-[#999] group-hover:bg-[#f07b1a] group-hover:text-white flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_12px_32px_rgba(240,123,26,0.3)] group-hover:scale-110">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#111] tracking-tight group-hover:text-[#f07b1a] transition-colors duration-300">
                    {svc.title}
                  </h3>
                </div>

                {/* Middle/Right side: Description (Revealed on hover) OR Tags (Default) */}
                <div className="flex-1 relative min-h-[60px] flex items-center pl-10 md:pl-0">
                  {/* Tags (Visible by default, fades out on hover) */}
                  <div className="flex flex-wrap gap-2 transition-all duration-500 group-hover:opacity-0 group-hover:translate-x-4">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#999] bg-white border border-black/[0.05] rounded-full px-4 py-1.5 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description (Fades in on hover) */}
                  <div className="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto">
                    <p className="text-[#333] text-[16px] md:text-[18px] leading-relaxed max-w-2xl font-medium">
                      {svc.description}
                    </p>
                  </div>
                </div>

                {/* Far Right: Arrow Button */}
                <div className="absolute right-6 lg:relative lg:right-0">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 rounded-full border border-black/[0.08] text-[#ccc] group-hover:border-[#f07b1a]/30 group-hover:bg-[#f07b1a]/5 group-hover:text-[#f07b1a] hover:!bg-[#f07b1a] hover:!text-[#FFFFFF] hover:!border-[#f07b1a] flex items-center justify-center transition-all duration-300 group-hover:scale-105 hover:scale-110 z-20"
                  >
                    <ArrowRight className="w-6 h-6 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {mounted && (
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
