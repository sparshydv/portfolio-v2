import type { Metadata } from "next";
import Link from "next/link";

type ProjectData = {
  title: string;
  description: string;
  role: string;
  stack: string[];
};

const projects: Record<string, ProjectData> = {
  "ai-interview-platform": {
    title: "AI Interview Platform",
    description:
      "An intelligent interview preparation platform built with Next.js and AI APIs. Features real-time feedback, adaptive questioning, and performance analytics.",
    role: "Full Stack Developer",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "MongoDB"],
  },
  "ecommerce-dashboard": {
    title: "E-Commerce Dashboard",
    description:
      "A high-performance analytics dashboard for e-commerce businesses. Real-time sales tracking, inventory management, and customer insights.",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Chart.js"],
  },
  "saas-landing-page": {
    title: "SaaS Landing Page",
    description:
      "A conversion-optimized landing page for a SaaS product. Scored 98+ on Lighthouse with premium GSAP animations and micro-interactions.",
    role: "Frontend Developer & Designer",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Sparsh Yadav`,
    description: project.description,
    alternates: {
      canonical: `https://sparshyadav.dev/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background text-primary">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-secondary hover:text-primary transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-primary">
      <article className="max-w-3xl mx-auto px-8 py-24">
        <header className="mb-16">
          <p className="text-sm font-bold tracking-widest uppercase mb-4 text-secondary">
            CASE STUDY
          </p>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-secondary">
            by <strong className="text-primary">Sparsh Yadav</strong> · {project.role}
          </p>
        </header>

        <section className="mb-12" aria-label="Project overview">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-secondary">
            OVERVIEW
          </h2>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </section>

        <section className="mb-12" aria-label="Tech stack">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-secondary">
            TECH STACK
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-border-subtle text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
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
            All Projects
          </Link>
        </nav>
      </article>
    </main>
  );
}
