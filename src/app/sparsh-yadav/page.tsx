import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Sparsh Yadav — Full Stack Developer",
  description:
    "Sparsh Yadav is a Full Stack Developer specializing in Next.js, React, MERN stack, GSAP animations, and high-performance web applications. Explore his skills, projects, and experience.",
  alternates: {
    canonical: "https://sparshyadav.dev/sparsh-yadav",
  },
};

export default function SparshYadavPage() {
  return (
    <main className="min-h-screen bg-background text-primary">
      <article className="max-w-3xl mx-auto px-8 py-24">
        <header className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Sparsh Yadav
          </h1>
          <p className="text-xl text-secondary">
            Full Stack Developer · Next.js · React · MERN · GSAP
          </p>
        </header>

        <section className="mb-16" aria-label="About Sparsh Yadav">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-6 text-secondary">
            ABOUT
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Sparsh Yadav is a Full Stack Developer who builds high-performance
            web applications and premium digital experiences. With deep
            expertise in the modern JavaScript ecosystem, Sparsh delivers
            production-grade solutions that combine engineering excellence with
            striking visual design.
          </p>
          <p className="text-lg leading-relaxed">
            From scalable SaaS platforms to conversion-optimized landing pages,
            Sparsh Yadav brings a meticulous approach to every project —
            focusing on clean architecture, performance, and user experience.
          </p>
        </section>

        <section className="mb-16" aria-label="Technical Skills">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-6 text-secondary">
            SKILLS & TECHNOLOGIES
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-3">Frontend</h3>
              <ul className="space-y-2 text-secondary">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>GSAP / Framer Motion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Backend</h3>
              <ul className="space-y-2 text-secondary">
                <li>Node.js / Express</li>
                <li>MongoDB / PostgreSQL</li>
                <li>REST APIs / GraphQL</li>
                <li>Authentication & Security</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16" aria-label="What Sparsh Yadav Does">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-6 text-secondary">
            SERVICES
          </h2>
          <ul className="space-y-3 text-lg">
            <li>Full Stack Web Application Development</li>
            <li>Premium Landing Page Design & Development</li>
            <li>SaaS Product Engineering</li>
            <li>Performance Optimization & SEO</li>
          </ul>
        </section>

        <nav className="flex gap-6 border-t border-border-subtle pt-8">
          <Link
            href="/"
            className="text-secondary hover:text-primary transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <Link
            href="/#projects"
            className="text-secondary hover:text-primary transition-colors"
          >
            View Projects
          </Link>
        </nav>
      </article>
    </main>
  );
}
