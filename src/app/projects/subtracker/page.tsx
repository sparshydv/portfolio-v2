"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Terminal } from "lucide-react";
import { motion } from "motion/react";

// ─── Section Fade-in Wrapper ────────────────────────────────────────────────
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="block w-8 h-[2px] bg-[#F97316]" />
      <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F97316]">{children}</span>
    </div>
  );
}

// ─── Inline Code Chip ────────────────────────────────────────────────────────
function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F3F4F6] border border-black/[0.07] text-[12px] font-mono text-[#333]">
      {children}
    </code>
  );
}

export default function SubTrackerCaseStudy() {
  return (
    <main className="bg-[#FAFAFA] text-[#111] min-h-screen font-sans overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-black/[0.05]">
        <Link href="/#projects" className="flex items-center gap-2 text-[#555] hover:text-[#111] text-sm font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> All Projects
        </Link>
        <span className="text-xs font-bold tracking-widest uppercase text-[#999]">Case Study</span>
        <a href="https://subtracker-self.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-[#111] hover:text-[#F97316] transition-colors">
          View Site <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-20 max-w-[1100px] mx-auto">
        <FadeSection>
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Scalable Backend", "Async Workflows", "JWT Auth"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full border border-black/10 text-[11px] font-semibold tracking-widest uppercase text-[#666] bg-white">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] font-bold tracking-tighter text-[#111] leading-[0.9] mb-8">
            Subscription<br />
            <span className="font-serif italic text-[#F97316]">Intelligence</span><br />
            Platform
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-[18px] md:text-[20px] text-[#666] leading-[1.6] mb-12 font-light">
            A production-grade backend system for managing subscriptions, automating reminders,
            and optimizing recurring expenses through intelligent automation.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="https://subtracker-self.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#111] hover:bg-[#333] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-black/10">
              View Site <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="https://github.com/sparshydv/SubscriptionTrackerAPI" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-black/15 hover:border-[#F97316] hover:text-[#F97316] text-[#333] px-7 py-3.5 rounded-full text-sm font-semibold transition-all">
              View Code <Github className="w-4 h-4" />
            </a>
          </div>
        </FadeSection>

        {/* Stack pills */}
        <FadeSection className="mt-20 border-t border-black/[0.06] pt-8">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#bbb] mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {["Node.js", "Express.js", "MongoDB", "Upstash (Redis + Workflows)", "Arcjet", "JWT", "Nodemailer"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-md bg-white border border-black/[0.07] text-[12px] font-mono text-[#555]">
                {t}
              </span>
            ))}
          </div>
        </FadeSection>
      </section>

      {/* ── SECTION 1: PROBLEM ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#FFFFFF] border-y border-black/[0.05]">
        <div className="max-w-[1100px] mx-auto">
          <FadeSection>
            <SectionLabel>01 — The Problem</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight text-[#111] leading-[1.1] mb-8 max-w-2xl">
              Money leaves quietly, one forgotten subscription at a time.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
              <div>
                <p className="text-[17px] text-[#666] leading-[1.7] font-light">
                  Users subscribe to services, forget about them, and keep getting charged.
                  Without a centralized tracking system, there's no visibility into what's
                  being spent or when renewals are due.
                </p>
              </div>
              <div>
                <p className="text-[17px] text-[#666] leading-[1.7] font-light">
                  Existing solutions are either too simple (spreadsheets) or too expensive
                  (third-party SaaS tools).  The gap is a backend system anyone can self-host,
                  own, and extend.
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── SECTION 2: SOLUTION ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 max-w-[1100px] mx-auto">
        <FadeSection>
          <SectionLabel>02 — The Solution</SectionLabel>
          <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight text-[#111] leading-[1.1] mb-12 max-w-xl">
            A backend system that works while you don't.
          </h2>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { num: "01", title: "Subscription Tracking", desc: "Full CRUD for subscription records — name, amount, renewal date, category, and status.", code: "POST /api/subscriptions" },
            { num: "02", title: "Automated Reminders", desc: "Upstash workflows trigger email reminders at 7, 5, 3, 1, and 0 days before renewal.", code: "workflow.trigger()" },
            { num: "03", title: "JWT Authentication", desc: "Stateless, secure authentication with access tokens. No session state on the server.", code: "Authorization: Bearer <token>" },
            { num: "04", title: "Rate Limiting", desc: "Arcjet protects all endpoints from abuse, bots, and brute-force attacks.", code: "arcjet.protect()" },
          ].map((item) => (
            <FadeSection key={item.num}>
              <div className="bg-white border border-black/[0.07] rounded-xl p-8 hover:border-[#F97316]/30 hover:shadow-md transition-all">
                <span className="text-[11px] font-bold tracking-widest text-[#F97316] mb-4 block">{item.num}</span>
                <h3 className="text-[17px] font-bold text-[#111] mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#777] leading-[1.6] mb-4">{item.desc}</p>
                <code className="text-[12px] font-mono text-[#888] bg-[#F7F7F7] px-3 py-1.5 rounded-md border border-black/[0.05] block">
                  {item.code}
                </code>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: ARCHITECTURE ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#111] text-white">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeSection>
            <SectionLabel>03 — Architecture</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight leading-[1.1] mb-6">
              Layered for<br /><span className="font-serif italic text-[#F97316]">clarity.</span>
            </h2>
            <p className="text-[16px] text-[#888] leading-[1.7] max-w-sm">
              Each layer has a single responsibility. The client never touches the database.
              The database never knows about business logic.
            </p>
          </FadeSection>

          <FadeSection>
            <div className="space-y-2">
              {[
                { label: "Client / API Consumer", sublabel: "REST requests", top: true },
                { label: "Express API Layer", sublabel: "Routes + Middleware" },
                { label: "Service Layer", sublabel: "Business Logic" },
                { label: "MongoDB", sublabel: "Persistent storage" },
                { label: "Upstash", sublabel: "Async job queue + workflows" },
                { label: "Email Service", sublabel: "Nodemailer reminders", top: true },
              ].map((item, i) => (
                <div key={i}>
                  <div className={`px-5 py-4 rounded-xl border flex justify-between items-center ${item.top ? "border-[#F97316]/30 bg-[#F97316]/5" : "border-white/10 bg-white/5"}`}>
                    <span className={`text-[14px] font-semibold ${item.top ? "text-[#F97316]" : "text-white"}`}>{item.label}</span>
                    <span className="text-[11px] text-[#666] font-mono">{item.sublabel}</span>
                  </div>
                  {i < 5 && (
                    <div className="flex justify-center my-1">
                      <span className="text-[#444] text-sm">↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── SECTION 4: ENGINEERING DECISIONS ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 max-w-[1100px] mx-auto">
        <FadeSection>
          <SectionLabel>04 — Engineering Decisions</SectionLabel>
          <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight text-[#111] leading-[1.1] mb-12">
            Decisions made with intent.
          </h2>
        </FadeSection>

        <div className="space-y-4">
          {[
            {
              choice: "JWT over sessions",
              why: "Stateless auth means any service or instance can validate a token without shared session state — ready for horizontal scaling.",
              pkg: "jsonwebtoken",
            },
            {
              choice: "Arcjet for protection",
              why: "Built-in rate limiting, bot detection, and shield rules applied at the middleware level without manual implementation.",
              pkg: "arcjet/node",
            },
            {
              choice: "Upstash Workflows for async jobs",
              why: "Durable, serverless-friendly async execution. If the server restarts, pending jobs are not lost.",
              pkg: "@upstash/workflow",
            },
            {
              choice: "Centralized error middleware",
              why: "A single error handler catches all thrown errors, formats the response, and logs appropriately — no try/catch sprawl.",
              pkg: "errorHandler.middleware.js",
            },
            {
              choice: "Clean service-layer separation",
              why: "Controllers only handle HTTP concerns. Services own the logic. Models own the data shape. Each layer is independently testable.",
              pkg: "MVC + Service pattern",
            },
          ].map((item, i) => (
            <FadeSection key={i}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-4 items-start py-6 border-b border-black/[0.06]">
                <div>
                  <span className="text-[11px] text-[#bbb] font-mono block mb-1">Decision 0{i + 1}</span>
                  <h3 className="text-[15px] font-bold text-[#111]">{item.choice}</h3>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.65]">{item.why}</p>
                <code className="text-[11px] font-mono text-[#F97316] bg-[#FFF4EE] px-3 py-1.5 rounded-md border border-[#F97316]/10 whitespace-nowrap self-start mt-1">
                  {item.pkg}
                </code>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: PERFORMANCE & RELIABILITY ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#FFFFFF] border-y border-black/[0.05]">
        <div className="max-w-[1100px] mx-auto">
          <FadeSection>
            <SectionLabel>05 — Performance & Reliability</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight text-[#111] leading-[1.1] mb-12 max-w-xl">
              Built to stay up.
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🛡️", title: "Abuse Prevention", desc: "Rate limiting via Arcjet blocks brute-force and bot traffic before it reaches any business logic." },
              { icon: "⚡", title: "Async Automation", desc: "Upstash workflows run entirely outside the request cycle, keeping API response times fast." },
              { icon: "🗄️", title: "Optimized DB Schema", desc: "MongoDB indexes on userId and renewalDate for fast subscription lookups and filtering." },
              { icon: "📋", title: "Request Logging", desc: "Middleware-level logging tracks every incoming request for observability and debugging." },
            ].map((item, i) => (
              <FadeSection key={i}>
                <div className="flex gap-5 p-7 rounded-xl border border-black/[0.07] bg-[#FAFAFA] hover:border-[#F97316]/20 transition-colors">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#111] mb-2">{item.title}</h3>
                    <p className="text-[14px] text-[#777] leading-[1.6]">{item.desc}</p>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PRODUCT THINKING ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 max-w-[1100px] mx-auto">
        <FadeSection>
          <SectionLabel>06 — Product Thinking</SectionLabel>
          <blockquote className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#111] leading-[1.25] tracking-tight max-w-3xl mb-10">
            "Not just a tracker.{" "}
            <span className="font-serif italic text-[#F97316]">
              A system that actively saves you money.
            </span>"
          </blockquote>
          <p className="text-[17px] text-[#666] leading-[1.7] max-w-2xl font-light">
            Tracking alone is passive. The product thinking behind SubTracker was about
            intelligent automation — the system should surface the right information at
            the right time, without the user having to ask.
          </p>
          <p className="text-[17px] text-[#666] leading-[1.7] max-w-2xl font-light mt-5">
            Reminders at 7, 5, 3, 1, and 0 days. Not because best practice says so —
            because user testing shows people need multiple nudges to act on financial decisions.
          </p>
        </FadeSection>
      </section>

      {/* ── SECTION 7: IMPACT ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#111] text-white">
        <div className="max-w-[1100px] mx-auto">
          <FadeSection>
            <SectionLabel>07 — Impact</SectionLabel>
            <h2 className="text-[40px] md:text-[52px] font-bold tracking-tight leading-[1.1] mb-16">
              What this demonstrates.
            </h2>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "SaaS-Ready", label: "Scalable Backend", desc: "Architecture patterns directly applicable to real SaaS infrastructure and microservice environments." },
              { stat: "Zero Trust", label: "Security Model", desc: "JWT stateless auth + Arcjet protection shows understanding of layered, production-grade security." },
              { stat: "Automated", label: "Reliability System", desc: "Async workflows via Upstash demonstrate mastery of event-driven and background job architectures." },
            ].map((item, i) => (
              <FadeSection key={i}>
                <div className="p-8 rounded-2xl border border-white/10 hover:border-[#F97316]/30 transition-colors">
                  <span className="text-[28px] font-black text-[#F97316] tracking-tight block mb-1">{item.stat}</span>
                  <span className="text-[12px] font-bold text-white/60 block mb-4 uppercase tracking-wide">{item.label}</span>
                  <p className="text-[13px] text-[#777] leading-[1.65]">{item.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Code block style callout */}
          <FadeSection className="mt-16">
            <div className="bg-[#0D0D0D] rounded-2xl border border-white/[0.06] overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
                <Terminal className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="text-[11px] font-mono text-[#666]">system design summary</span>
              </div>
              <div className="px-6 py-5 font-mono text-[13px] space-y-1">
                <p><span className="text-[#F97316]">const</span> <span className="text-[#7DD3FC]">stack</span> = <span className="text-[#86EFAC]">"Node.js + Express + MongoDB"</span>;</p>
                <p><span className="text-[#F97316]">const</span> <span className="text-[#7DD3FC]">auth</span> = <span className="text-[#86EFAC]">"JWT stateless"</span>;</p>
                <p><span className="text-[#F97316]">const</span> <span className="text-[#7DD3FC]">jobs</span> = <span className="text-[#86EFAC]">"Upstash async workflows"</span>;</p>
                <p><span className="text-[#F97316]">const</span> <span className="text-[#7DD3FC]">security</span> = <span className="text-[#86EFAC]">"Arcjet rate limiting"</span>;</p>
                <p className="text-[#444] mt-2">// production-grade. self-hostable. scalable.</p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="py-28 px-6 md:px-16 lg:px-24 bg-[#FAFAFA] text-center border-t border-black/[0.05]">
        <FadeSection>
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F97316] mb-4">Want to see more?</p>
          <h2 className="text-[36px] md:text-[52px] font-bold tracking-tight text-[#111] leading-[1.05] mb-10">
            Let's build something<br />
            <span className="font-serif italic text-[#F97316]">production-ready.</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-orange-500/20">
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/#projects" className="inline-flex items-center gap-2 border border-black/15 hover:border-[#F97316] hover:text-[#F97316] text-[#333] px-8 py-3.5 rounded-full text-sm font-semibold transition-all">
              <ArrowLeft className="w-4 h-4" /> All Projects
            </Link>
          </div>
        </FadeSection>
      </section>

    </main>
  );
}
