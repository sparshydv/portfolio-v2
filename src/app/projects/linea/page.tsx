"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

// ─── Section Fade-in Wrapper ──────────────────────────────────────────────────
function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section Label ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="block w-8 h-[2px] bg-[#F97316]" />
      <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F97316]">
        {children}
      </span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function LineaCaseStudy() {
  return (
    <main className="bg-[#FAFAFA] text-[#111] min-h-screen font-sans overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-black/[0.04]">
        <Link
          href="/#projects"
          className="flex items-center gap-2 text-[#555] hover:text-[#111] text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> All Projects
        </Link>
        <span className="text-xs font-bold tracking-widest uppercase text-[#999]">
          Case Study
        </span>
        <a
          href="https://linea-ecommerce.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-[#111] hover:text-[#F97316] transition-colors"
        >
          Visit Site <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-20 max-w-[1100px] mx-auto">
        <FadeSection>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Full-Stack Architecture", "Payment Systems", "REST APIs"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-black/10 text-[11px] font-semibold tracking-widest uppercase text-[#666] bg-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] font-bold tracking-tighter text-[#111] leading-[0.9] mb-8">
            Modern<br />
            <span className="font-serif italic text-[#F97316]">Commerce</span><br />
            Platform
          </h1>

          <p className="max-w-2xl text-[18px] md:text-[20px] text-[#666] leading-[1.6] mb-12 font-light">
            A full-stack e-commerce system engineered with real-world business logic,
            scalable backend services, and a seamless checkout experience.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://linea-ecommerce.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#333] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-black/10"
            >
              Visit Site <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/sparshydv/Linea-Ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black/15 hover:border-[#F97316] hover:text-[#F97316] text-[#333] px-7 py-3.5 rounded-full text-sm font-semibold transition-all"
            >
              View Code <Github className="w-4 h-4" />
            </a>
          </div>
        </FadeSection>

        {/* Divider */}
        <div className="mt-24 border-t border-black/[0.06]" />
      </section>

      {/* ── SECTION 1: PROBLEM ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 max-w-[1100px] mx-auto">
        <FadeSection>
          <SectionLabel>01 — The Problem</SectionLabel>
          <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#111] leading-[1.1] mb-8 max-w-2xl">
            Most e-commerce apps live in the shallow end.
          </h2>
          <p className="text-[17px] md:text-[19px] text-[#666] leading-[1.7] max-w-2xl font-light">
            Beginner e-commerce apps typically display products and call it done.
            They skip the hard parts — proper checkout validation, real payment workflows,
            protected routes, order consistency, and a backend architecture that
            doesn't collapse under real usage.
          </p>
          <p className="text-[17px] md:text-[19px] text-[#666] leading-[1.7] max-w-2xl font-light mt-5">
            The gap between a demo project and a production-grade system is where
            most developers stop. LINEA was built to close that gap.
          </p>
        </FadeSection>
      </section>

      {/* ── SECTION 2: SOLUTION ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#FFFFFF] border-y border-black/[0.04]">
        <div className="max-w-[1100px] mx-auto">
          <FadeSection>
            <SectionLabel>02 — The Solution</SectionLabel>
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#111] leading-[1.1] mb-12 max-w-2xl">
              A complete commerce system, engineered end-to-end.
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.06]">
            {[
              { title: "Auth System", desc: "JWT + Google OAuth for secure session management and protected user flows." },
              { title: "Cart & Wishlist", desc: "Full state management with persistent cart and user-specific wishlist functionality." },
              { title: "Checkout Logic", desc: "Multi-step checkout with shipping options, address validation, and total calculation." },
              { title: "Order Pipeline", desc: "Order creation tied directly to payment intent — no orphaned records." },
              { title: "Payment Handling", desc: "Mock Stripe intent + webhook confirmation for real-world payment lifecycle simulation." },
              { title: "Modular Backend", desc: "Controller → Service → Model architecture ensuring clean separation of concerns." },
            ].map((item, i) => (
              <FadeSection key={i} className="bg-[#FAFAFA] p-8 md:p-10">
                <span className="text-[11px] font-bold tracking-widest text-[#F97316] mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="text-[18px] font-bold text-[#111] mb-3">{item.title}</h3>
                <p className="text-[14px] text-[#777] leading-[1.6]">{item.desc}</p>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: ARCHITECTURE ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 max-w-[1100px] mx-auto">
        <FadeSection>
          <SectionLabel>03 — Architecture</SectionLabel>
          <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#111] leading-[1.1] mb-16 max-w-xl">
            Built for clarity and scale.
          </h2>
        </FadeSection>

        <FadeSection className="max-w-lg mx-auto">
          <div className="relative">
            {[
              { label: "React Frontend", sublabel: "Vite + TypeScript", accent: true },
              { label: "Express API Layer", sublabel: "RESTful endpoints" },
              { label: "Controllers → Services → Models", sublabel: "Separation of concerns" },
              { label: "MongoDB Database", sublabel: "Document-based storage" },
              { label: "Payment System", sublabel: "Mock Intent + Webhook", accent: true },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div
                  className={`flex flex-col p-5 rounded-xl border ${
                    item.accent
                      ? "border-[#F97316]/30 bg-[#FFF4EE]"
                      : "border-black/[0.06] bg-white"
                  }`}
                >
                  <span className={`text-[15px] font-bold ${item.accent ? "text-[#F97316]" : "text-[#111]"}`}>
                    {item.label}
                  </span>
                  <span className="text-[12px] text-[#999] mt-0.5">{item.sublabel}</span>
                </div>
                {i < 4 && (
                  <div className="flex justify-center my-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-[1px] h-4 bg-[#ddd]" />
                      <span className="text-[#bbb] text-xs">↓</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── SECTION 4: ENGINEERING DECISIONS ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#111] text-white">
        <div className="max-w-[1100px] mx-auto">
          <FadeSection>
            <SectionLabel>04 — Engineering Decisions</SectionLabel>
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight leading-[1.1] mb-16 max-w-2xl">
              Every decision had a reason.
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                decision: "Snapshot-based pricing",
                reason: "Order prices are captured at checkout time, not fetched dynamically — preventing inconsistencies if products change after an order is placed.",
              },
              {
                decision: "Protected API routes",
                reason: "Cart, wishlist, and orders are gated behind JWT middleware — ensuring user data is never exposed without authentication.",
              },
              {
                decision: "Service layer abstraction",
                reason: "All business logic lives in a service layer, making controllers thin and the system easy to test, extend, or replace.",
              },
              {
                decision: "Webhook-based confirmation",
                reason: "Payment status is confirmed via webhook events, not frontend callbacks — preventing race conditions and fake payments.",
              },
            ].map((item, i) => (
              <FadeSection key={i}>
                <div className="border border-white/10 rounded-xl p-8 hover:border-[#F97316]/40 transition-colors">
                  <span className="text-[11px] font-bold tracking-widest text-[#F97316] mb-4 block uppercase">
                    Decision 0{i + 1}
                  </span>
                  <h3 className="text-[18px] font-bold text-white mb-3">{item.decision}</h3>
                  <p className="text-[14px] text-[#888] leading-[1.7]">{item.reason}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PERFORMANCE ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 max-w-[1100px] mx-auto">
        <FadeSection>
          <SectionLabel>05 — Performance & Optimization</SectionLabel>
          <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#111] leading-[1.1] mb-12 max-w-xl">
            Fast where it matters.
          </h2>
        </FadeSection>

        <div className="space-y-4 max-w-2xl">
          {[
            "Reduced redundant API calls through efficient client-side state management",
            "Improved checkout reliability with strict server-side validation rules",
            "Optimized product queries with indexing and filtering at the database layer",
            "Modular API clients for clean separation and easier maintainability",
          ].map((point, i) => (
            <FadeSection key={i}>
              <div className="flex items-start gap-4 py-5 border-b border-black/[0.06]">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFF4EE] border border-[#F97316]/20 flex items-center justify-center mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                </span>
                <p className="text-[16px] text-[#444] leading-[1.65]">{point}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: PRODUCT THINKING ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#FFFFFF] border-y border-black/[0.04]">
        <div className="max-w-[1100px] mx-auto">
          <FadeSection>
            <SectionLabel>06 — Product Thinking</SectionLabel>
            <blockquote className="text-[28px] md:text-[36px] lg:text-[44px] font-bold text-[#111] leading-[1.25] tracking-tight max-w-3xl mb-10">
              "The goal wasn't to display products.{" "}
              <span className="text-[#F97316] font-serif italic">
                It was to simulate the full commerce reality.
              </span>"
            </blockquote>
            <p className="text-[17px] md:text-[19px] text-[#666] leading-[1.7] max-w-2xl font-light">
              Real commerce is messy — users abandon checkouts, payments fail, orders need
              consistency guarantees. LINEA was built with that full complexity in mind.
              The focus was always on user journey, data consistency, and the
              backend architecture that holds it together silently.
            </p>
            <p className="text-[17px] md:text-[19px] text-[#666] leading-[1.7] max-w-2xl font-light mt-5">
              Not just another portfolio demo. A system that could run in production.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* ── SECTION 7: IMPACT ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 max-w-[1100px] mx-auto">
        <FadeSection>
          <SectionLabel>07 — Impact</SectionLabel>
          <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#111] leading-[1.1] mb-16 max-w-xl">
            What this project demonstrates.
          </h2>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { stat: "Full-Stack", label: "System Design Capability", desc: "From auth to payment confirmation — every layer designed and implemented." },
            { stat: "Production", label: "Ready Architecture", desc: "Patterns and practices that transfer directly into real-world engineering roles." },
            { stat: "End-to-End", label: "Commerce Flow", desc: "Complete user journey simulation from browsing to order confirmation." },
          ].map((item, i) => (
            <FadeSection key={i}>
              <div className="p-8 rounded-2xl border border-black/[0.07] bg-white hover:border-[#F97316]/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all">
                <span className="text-[32px] font-black text-[#F97316] tracking-tight block mb-1">
                  {item.stat}
                </span>
                <span className="text-[13px] font-bold text-[#111] block mb-3 uppercase tracking-wide">
                  {item.label}
                </span>
                <p className="text-[13px] text-[#888] leading-[1.6]">{item.desc}</p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#111] text-white text-center">
        <FadeSection>
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F97316] mb-4">
            Interested in working together?
          </p>
          <h2 className="text-[40px] md:text-[60px] font-bold tracking-tight leading-[1.05] mb-10">
            Let's build something<br />
            <span className="font-serif italic text-[#F97316]">that actually works.</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-orange-500/20"
            >
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> All Projects
            </Link>
          </div>
        </FadeSection>
      </section>

    </main>
  );
}
