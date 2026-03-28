"use client";

import Image from "next/image";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const beforeStats = [
  { label: "Interface", value: "Poor UI", trend: "down" },
  { label: "Load Speed", value: "3.4s", trend: "down" },
  { label: "Visibility", value: "Poor SEO", trend: "down" },
];

const afterStats = [
  { label: "Interface", value: "Better UI", trend: "up" },
  { label: "Load Speed", value: "1.2s", trend: "up" },
  { label: "Visibility", value: "Best SEO", trend: "up" },
];

export default function BeforeAfter() {
  return (
    <section id="before-after" className="w-full bg-[#FFFFFF] py-24 md:py-32 border-t border-black/[0.04] overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f07b1a] mb-4">
              Transformation
            </p>
            <h2 className="section-heading text-4xl md:text-[52px] font-bold text-[#111111] tracking-tight leading-none">
              The Results
            </h2>
          </div>
          <p className="text-[#777] text-base max-w-xs leading-relaxed">
            Turning slow, outdated legacy systems into high-performance, modern web experiences.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-8 relative">
          
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full bg-[#FAFAFA] rounded-[32px] border border-black/[0.06] overflow-hidden group"
          >
            {/* Card Header */}
            <div className="px-8 pt-8 pb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#111] uppercase tracking-[0.15em]">
                Before
              </h3>
              <div className="flex items-center gap-2 bg-[#fee2e2] text-[#dc2626] px-3 py-1.5 rounded-full">
                <TrendingDown className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Legacy</span>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[16/10] bg-[#f0f0f0] overflow-hidden mx-auto">
              <Image 
                src="/images/legacy-website-before-transformation.png" 
                alt="Before Transformation" 
                fill 
                className="object-contain transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Stats Row — integrated into card */}
            <div className="px-6 py-5 flex items-center justify-around border-t border-black/[0.04]">
              {beforeStats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <p className="text-[15px] font-bold text-[#111]">{stat.value}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#999] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Desktop Arrow */}
          <div className="hidden lg:flex flex-col justify-center items-center self-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-14 h-14 bg-[#111111] rounded-full flex items-center justify-center shadow-[0_12px_30px_rgba(0,0,0,0.15)] text-white hover:scale-110 transition-transform duration-300"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Mobile Arrow */}
          <div className="flex lg:hidden justify-center -my-3">
            <div className="w-12 h-12 bg-[#111111] rounded-full flex items-center justify-center shadow-lg text-white rotate-90">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex-1 w-full bg-[#FAFAFA] rounded-[32px] border border-[#f07b1a]/10 overflow-hidden group relative"
          >
            {/* Subtle accent glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#f07b1a]/[0.04] rounded-full blur-[80px] pointer-events-none" />

            {/* Card Header */}
            <div className="px-8 pt-8 pb-5 flex items-center justify-between relative z-10">
              <h3 className="text-xl font-bold text-[#f07b1a] uppercase tracking-[0.15em]">
                After
              </h3>
              <div className="flex items-center gap-2 bg-[#f07b1a]/10 text-[#f07b1a] px-3 py-1.5 rounded-full">
                <TrendingUp className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Modern</span>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[16/10] bg-[#f0f0f0] overflow-hidden mx-auto">
              <Image 
                src="/images/modern-high-performance-web-after.png" 
                alt="After Transformation" 
                fill 
                className="object-contain transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Stats Row — integrated into card */}
            <div className="px-6 py-5 flex items-center justify-around border-t border-[#f07b1a]/[0.06] relative z-10">
              {afterStats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <p className="text-[15px] font-bold text-[#f07b1a]">{stat.value}</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#999] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>


      </div>
    </section>
  );
}
