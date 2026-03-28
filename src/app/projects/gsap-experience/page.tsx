"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

// ─── Fade-in wrapper ─────────────────────────────────────────────────────────
function FadeSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="block w-8 h-[2px] bg-[#F97316]" />
      <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F97316]">{children}</span>
    </div>
  );
}

export default function GSAPCaseStudy() {
  return (
    <main className="bg-[#FFFFFF] text-[#111111] min-h-screen font-sans overflow-x-hidden selection:bg-[#F97316]/10 selection:text-[#F97316]">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-white/80 backdrop-blur-md border-b border-black/[0.05]">
        <Link href="/#projects" className="flex items-center gap-2 text-[#666] hover:text-[#111111] text-sm font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> All Projects
        </Link>
        <span className="text-xs font-bold tracking-widest uppercase text-[#999]">Case Study</span>
        <a href="https://macbook-gsap-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-[#111111] hover:text-[#F97316] transition-colors">
          View Experience <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-20 max-w-[1200px] mx-auto relative">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F97316]/5 rounded-full blur-[120px] pointer-events-none" />

        <FadeSection>
          <div className="flex flex-wrap gap-3 mb-8">
            {["UI Engineering", "GSAP", "Three.js", "Performance"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full border border-black/10 text-[11px] font-semibold tracking-widest uppercase text-[#555] bg-black/[0.03]">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5vw] font-bold tracking-tighter text-[#111111] leading-[0.88] mb-8">
            Interactive<br />
            <span className="font-serif italic text-[#F97316]">Product</span><br />
            Experience
          </h1>

          <p className="max-w-2xl text-[18px] md:text-[20px] text-[#555] leading-[1.6] mb-12 font-light">
            A high-performance, animation-driven web experience built with scroll-based
            storytelling, 3D product rendering, and cinematic transitions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="https://macbook-gsap-phi.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-orange-500/10">
              View Experience <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="https://github.com/sparshydv/macbook-gsap" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-black/15 hover:border-[#F97316] hover:text-[#F97316] text-[#111111] px-7 py-3.5 rounded-full text-sm font-semibold transition-all">
              View Code <Github className="w-4 h-4" />
            </a>
          </div>
        </FadeSection>

        <FadeSection className="mt-20 pt-8 border-t border-black/[0.05]" delay={100}>
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#999] mb-4">Built With</p>
          <div className="flex flex-wrap gap-2">
            {["React", "GSAP", "ScrollTrigger", "Three.js", "Zustand", "TypeScript", "Vite"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-md bg-black/[0.02] border border-black/[0.05] text-[12px] font-mono text-[#666]">{t}</span>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── SECTION 1: PROBLEM ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#F9F9F9] border-y border-black/[0.05]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeSection>
            <SectionLabel>01 — The Problem</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-8">
              The web stopped<br />
              <span className="font-serif italic text-[#F97316]">telling stories.</span>
            </h2>
          </FadeSection>
          <FadeSection delay={100}>
            <p className="text-[17px] text-[#555] leading-[1.7] font-light mb-6">
              Traditional websites scroll through static content without emotion or engagement.
              Product pages list features but fail to make users <em className="text-[#111111] not-italic font-medium">feel</em> the product.
            </p>
            <p className="text-[17px] text-[#555] leading-[1.7] font-light">
              Apple changed the game with cinematic scroll experiences. That pattern — immersive
              storytelling through motion — is what this project explores and implements from scratch.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ── SECTION 2: SOLUTION ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 max-w-[1100px] mx-auto">
        <FadeSection>
          <SectionLabel>02 — The Solution</SectionLabel>
          <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-16 max-w-xl">
            An experience engineered from first principles.
          </h2>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.05] border border-black/[0.05] rounded-[24px] overflow-hidden">
          {[
            {
              num: "01", title: "Scroll-Based Animations",
              desc: "GSAP ScrollTrigger maps every pixel of scroll progress to precise animation states — no jank, no guessing.",
              detail: "ScrollTrigger.create()"
            },
            {
              num: "02", title: "3D Product Rendering",
              desc: "Three.js renders a 3D product model directly in the browser, responding to scroll position and user interaction.",
              detail: "THREE.WebGLRenderer"
            },
            {
              num: "03", title: "Timeline Control",
              desc: "GSAP timelines orchestrate complex multi-element sequences with precise control over easing, delay, and duration.",
              detail: "gsap.timeline()"
            },
            {
              num: "04", title: "Pinned Sections",
              desc: "Key storytelling moments pin the viewport while content animates through — mimicking Apple's signature scroll behavior.",
              detail: "pin: true"
            },
          ].map((item) => (
            <FadeSection key={item.num} className="bg-white p-8 md:p-10 hover:bg-[#F9F9F9] transition-all">
              <span className="text-[11px] font-bold tracking-widest text-[#F97316] mb-4 block">{item.num}</span>
              <h3 className="text-[17px] font-bold text-[#111111] mb-3">{item.title}</h3>
              <p className="text-[14px] text-[#666] leading-[1.65] mb-5">{item.desc}</p>
              <code className="text-[12px] font-mono text-[#F97316] bg-[#F97316]/5 border border-[#F97316]/10 px-3 py-1.5 rounded-md block">{item.detail}</code>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: ARCHITECTURE ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#F9F9F9] border-y border-black/[0.05]">
        <div className="max-w-[1100px] mx-auto">
          <FadeSection>
            <SectionLabel>03 — Architecture</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-16 max-w-xl">
              Layers of motion,<br /><span className="font-serif italic text-[#F97316]">in perfect sequence.</span>
            </h2>
          </FadeSection>

          <div className="max-w-md mx-auto space-y-2">
            {[
              { label: "React UI Layer", sublabel: "Component structure + event handling", highlight: false },
              { label: "GSAP", sublabel: "ScrollTrigger + Timeline orchestration", highlight: true },
              { label: "Three.js", sublabel: "3D rendering + scene management", highlight: true },
              { label: "Zustand", sublabel: "Lightweight global animation state", highlight: false },
              { label: "Browser GPU Pipeline", sublabel: "RequestAnimationFrame + compositing", highlight: false },
            ].map((item, i) => (
              <div key={i}>
                <FadeSection delay={i * 80}>
                  <div className={`px-5 py-4 rounded-xl flex justify-between items-center border transition-all ${item.highlight ? "bg-white border-[#F97316]/25 shadow-sm" : "bg-white/50 border-black/[0.05]"}`}>
                    <span className={`text-[14px] font-semibold ${item.highlight ? "text-[#F97316]" : "text-[#111111]"}`}>{item.label}</span>
                    <span className="text-[11px] text-[#999] font-mono text-right max-w-[180px]">{item.sublabel}</span>
                  </div>
                </FadeSection>
                {i < 4 && <div className="flex justify-center my-1.5"><span className="text-[#CCC] text-base">↓</span></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ENGINEERING DECISIONS ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 max-w-[1100px] mx-auto">
        <FadeSection>
          <SectionLabel>04 — Engineering Decisions</SectionLabel>
          <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-12">
            Chosen carefully.<br /><span className="font-serif italic text-[#F97316]">For a reason.</span>
          </h2>
        </FadeSection>

        <div className="space-y-5">
          {[
            { tool: "GSAP ScrollTrigger", reason: "The gold standard for scroll-linked animations. Declarative, composable, and battle-tested for 60fps delivery on all devices." },
            { tool: "Three.js for 3D", reason: "Native WebGL abstraction that gives full control over the scene graph, lighting, materials, and camera — without a heavy game engine overhead." },
            { tool: "Zustand state", reason: "Animation systems need global state without re-render overhead. Zustand provides reactive stores with zero boilerplate and excellent performance." },
            { tool: "GSAP Timelines", reason: "Sequential control over complex multi-step animation choreography with pausing, reversing, and label-based seeking." },
            { tool: "Pinned sections", reason: "Viewport pinning keeps users in a controlled storytelling zone — the motion happens, they stay still. It's how immersion is engineered." },
          ].map((item, i) => (
            <FadeSection key={i} delay={i * 60}>
              <div className="flex gap-6 py-6 border-b border-black/[0.08] group hover:border-[#F97316]/20 transition-all cursor-default">
                <span className="text-[11px] text-[#BBB] font-mono pt-1 flex-shrink-0 w-6">0{i + 1}</span>
                <div className="flex-1 flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
                  <h3 className="text-[15px] font-bold text-[#111111] md:w-52 flex-shrink-0 group-hover:text-[#F97316] transition-colors">{item.tool}</h3>
                  <p className="text-[14px] text-[#666] leading-[1.65]">{item.reason}</p>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: PERFORMANCE ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#F9F9F9] border-y border-black/[0.05]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <FadeSection>
            <SectionLabel>05 — Performance</SectionLabel>
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-[#111111] leading-[1.1]">
              60fps.<br />
              <span className="font-serif italic text-[#F97316]">No exceptions.</span>
            </h2>
          </FadeSection>

          <div className="space-y-4">
            {[
              { label: "60fps target", desc: "Animation loop driven by GSAP's ticker, synchronized with requestAnimationFrame — never dropping frames on GPU-composited layers." },
              { label: "Minimal re-renders", desc: "Zustand subscriptions are scoped to animated values only. React never re-renders during animation ticks." },
              { label: "Efficient asset loading", desc: "3D models and textures are loaded asynchronously with progress feedback before the experience begins." },
              { label: "Timeline pooling", desc: "GSAP timelines are created once and scrubbed via ScrollTrigger — no new animation objects per scroll event." },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 70}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-black/[0.05] hover:border-[#F97316]/20 transition-all shadow-sm">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#F97316] mt-2" />
                  <div>
                    <span className="text-[13px] font-bold text-[#111111] block mb-1">{item.label}</span>
                    <p className="text-[13px] text-[#666] leading-[1.6]">{item.desc}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PRODUCT THINKING ── */}
      <section className="py-32 px-6 md:px-16 lg:px-24 max-w-[1100px] mx-auto text-center">
        <FadeSection>
          <SectionLabel>06 — Product Thinking</SectionLabel>
          <blockquote className="text-[28px] md:text-[40px] lg:text-[52px] font-bold text-[#111111] leading-[1.2] tracking-tight max-w-4xl mx-auto mb-10">
            "A website should make you{" "}
            <span className="font-serif italic text-[#F97316]">feel something</span>{" "}
            — not just inform you."
          </blockquote>
          <p className="text-[17px] text-[#555] leading-[1.7] max-w-2xl mx-auto font-light">
            The core question throughout was: <em className="text-[#111111] not-italic font-medium">what does it feel like to experience this product?</em> Not what features does it have.
            That shift in thinking is what separates an Apple product page from a spec sheet.
          </p>
          <p className="text-[17px] text-[#555] leading-[1.7] max-w-2xl mx-auto font-light mt-5">
            Storytelling through motion isn't decoration. It's the product.
          </p>
        </FadeSection>
      </section>

      {/* ── SECTION 7: IMPACT ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#F9F9F9] border-t border-black/[0.05]">
        <div className="max-w-[1100px] mx-auto">
          <FadeSection>
            <SectionLabel>07 — Impact</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-16">
              What this proves.
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { stat: "Advanced", label: "Frontend Engineering", desc: "GSAP ScrollTrigger and Three.js are the tools of world-class frontend engineers — not beginners." },
              { stat: "Distinct", label: "Portfolio Differentiation", desc: "Immersive interactive experiences are rare. Most portfolios show dashboards and CRUD. This shows something different." },
              { stat: "Premium", label: "User Experience", desc: "Users spend 3x longer on scroll-animated pages. Engagement is the only metric that matters." },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div className="p-8 rounded-2xl bg-white border border-black/[0.05] hover:border-[#F97316]/30 hover:shadow-[0_10px_30px_rgba(240,123,26,0.05)] transition-all">
                  <span className="text-[28px] font-black text-[#F97316] tracking-tight block mb-1">{item.stat}</span>
                  <span className="text-[12px] font-bold text-black/40 block mb-4 uppercase tracking-wide">{item.label}</span>
                  <p className="text-[13px] text-[#666] leading-[1.65]">{item.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Cinematic closing line */}
          <FadeSection>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-50 to-white border border-orange-100 px-8 py-10 md:px-14 md:py-14">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F97316] rounded-full" />
              <p className="text-[20px] md:text-[26px] font-bold text-[#111111] leading-[1.3] max-w-2xl">
                Scroll. Watch it move. <span className="text-[#F97316] font-serif italic">That's the engineering.</span>
              </p>
              <p className="text-[14px] text-[#555] mt-4 max-w-lg leading-[1.65]">
                Every pixel of scroll triggers a calculated animation state. The result feels effortless because the work underneath it wasn't.
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#FFFFFF] text-center border-t border-black/[0.05]">
        <FadeSection>
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F97316] mb-4">Want something like this?</p>
          <h2 className="text-[36px] md:text-[52px] font-bold text-[#111111] tracking-tight leading-[1.05] mb-10">
            Let's build an experience<br />
            <span className="font-serif italic text-[#F97316]">worth remembering.</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-orange-500/10">
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/#projects" className="inline-flex items-center gap-2 border border-black/15 hover:border-[#F97316] hover:text-[#F97316] text-[#111111] px-8 py-3.5 rounded-full text-sm font-semibold transition-all">
              <ArrowLeft className="w-4 h-4" /> All Projects
            </Link>
          </div>
        </FadeSection>
      </section>

    </main>
  );
}
