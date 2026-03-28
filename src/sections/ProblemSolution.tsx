"use client";

import React, { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

const cards = [
  {
    titleLarge: "Design",
    titleSmall: "(Impact)",
    problem: "Looks outdated and feels forgettable.",
    solution: "I redesign it into something clean, modern, and built to convert.",
    button: "SOLVE IT",
  },
  {
    titleLarge: "Results",
    titleSmall: "(Most Imp)",
    problem: "You have a website, but it brings no business.",
    solution: "I build systems that turn visitors into real leads.",
    button: "SOLVE IT",
  },
  {
    titleLarge: "Visibility",
    titleSmall: "(SEO)",
    problem: "Doesn’t show up when it matters.",
    solution: "I structure it for visibility — so your business actually gets found.",
    button: "SOLVE IT",
  },
];

const SquigglyArrow = () => (
  <svg width="26" height="12" viewBox="0 0 26 12" fill="none" className="ml-1 shrink-0">
    <path d="M1 6C3 6 4 2 6.5 2C9 2 10 10 12.5 10C15 10 16 2 18.5 2C21 2 22 6 25 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 2L25 6L21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BackgroundArt = ({ index }: { index: number }) => {
  return (
    <svg 
      className="absolute bottom-6 right-6 w-[220px] h-[220px] z-0 pointer-events-none opacity-[0.03] stroke-black text-black fill-transparent" 
      viewBox="0 0 200 200" 
      fill="none"
    >
      {index === 0 && (
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Faint UI Mockup: Chart & Trends */}
          <rect x="20" y="80" width="160" height="100" rx="8" />
          <path d="M20 110 H180" />
          <path d="M40 150 L80 120 L120 140 L160 100" />
          <path d="M160 100 V130" />
          <circle cx="160" cy="100" r="4" fill="currentColor" />
          <path d="M90 40 L110 20 L130 40" />
          <path d="M110 20 V60" />
        </g>
      )}
      {index === 1 && (
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Faint UI Mockup: Hearts & Social */}
          <path d="M100 80 C100 60 130 60 130 80 C130 100 100 130 100 130 C100 130 70 100 70 80 C70 60 100 60 100 80 Z" />
          <rect x="40" y="140" width="120" height="40" rx="6" />
          <path d="M60 160 H140" />
          <circle cx="160" cy="50" r="10" />
          <path d="M160 30 V40 M160 60 V70 M140 50 H150 M170 50 H180" />
          <path d="M30 90 L50 70 L70 90" />
          <path d="M50 70 V110" />
        </g>
      )}
      {index === 2 && (
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Faint UI Mockup: Conversion & Target */}
          <circle cx="100" cy="100" r="60" strokeDasharray="8 8" />
          <circle cx="100" cy="100" r="30" />
          <circle cx="100" cy="100" r="10" fill="currentColor" />
          <path d="M100 10 V30 M100 170 V190 M10 100 H30 M170 100 H190" />
          <path d="M140 40 L160 20 M140 160 L160 180 M40 40 L20 20 M40 160 L20 180" />
        </g>
      )}
    </svg>
  );
};

export default function ProblemSolution() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative z-10 w-full bg-[#FAFAFA] py-24 md:py-32 overflow-hidden px-6 lg:px-8 border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-24 w-full">
          <div className="text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f07b1a] mb-4">
              Insight
            </p>
            <h2 className="text-4xl md:text-[52px] font-bold text-[#111111] tracking-tight leading-none">
              What most websites <span className="text-[#f07b1a]">get wrong</span>
            </h2>
          </div>
          <p className="text-[#777] text-base md:text-lg max-w-sm leading-relaxed md:text-right">
            Identifying the common pitfalls that kill conversions and how I engineer systems to avoid them.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full flex flex-col md:flex-row justify-center gap-6 xl:gap-8 max-w-[1200px]">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="relative w-full md:w-1/3 rounded-[20px] bg-[#FFFFFF] border border-black/[0.04] p-8 md:p-10 flex flex-col overflow-hidden min-h-[440px] shadow-sm transition-all duration-500 hover:border-[#f07b1a]/40 hover:shadow-[0_20px_40px_rgba(240,123,26,0.06)] hover:-translate-y-2 group"
            >
              {/* Background Faint Art */}
              <BackgroundArt index={i} />

              {/* Title Area */}
              <div className="relative z-10 mb-8">
                <h3 className="text-[#111111] text-[36px] md:text-[40px] font-extrabold tracking-tight flex items-baseline gap-2 group-hover:text-[#f07b1a] transition-colors duration-300">
                  {card.titleLarge}
                  <span className="text-[#f07b1a] text-[18px] md:text-[20px] font-bold tracking-normal">{card.titleSmall}</span>
                </h3>
              </div>
              
              {/* Text Area */}
              <div className="relative z-10 flex-grow max-w-[90%] md:max-w-[280px]">
                <p className="text-[#111111] text-[22px] md:text-[24px] font-bold leading-[1.2] mb-6">
                  {card.problem}
                </p>
                <div className="flex gap-3">
                  <div className="w-1 bg-[#f07b1a]/20 group-hover:bg-[#f07b1a] transition-colors duration-500 rounded-full h-auto"></div>
                  <p className="text-[#555555] text-[16px] md:text-[17px] leading-[1.6] font-medium">
                    {card.solution}
                  </p>
                </div>
              </div>

              {/* Button Area */}
              <div className="relative z-10 mt-10">
                <button 
                  onClick={() => setIsOpen(true)}
                  className="bg-[#111111] hover:bg-[#f07b1a] transition-colors text-[#FFFFFF] font-extrabold uppercase tracking-wide text-[13px] px-6 py-3 rounded-[100px] inline-flex items-center gap-2 group-hover:scale-105 duration-300"
                >
                  {card.button}
                  <SquigglyArrow />
                </button>
              </div>
            </div>
          ))}
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
