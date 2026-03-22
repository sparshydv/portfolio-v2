import Link from "next/link";

const projectSlugs = [
  { slug: "ai-interview-platform", title: "AI Interview Platform" },
  { slug: "ecommerce-dashboard", title: "E-Commerce Dashboard" },
  { slug: "saas-landing-page", title: "SaaS Landing Page" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-border-subtle p-8">
      <div className="max-w-5xl w-full mx-auto">
        <p className="text-sm font-bold tracking-widest uppercase mb-4 text-secondary">CASE STUDIES</p>
        <h2 className="text-4xl font-bold mb-12">Selected Work</h2>
        <div className="space-y-6">
          {projectSlugs.map(({ slug, title }) => (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="block border border-border-subtle p-6 hover:bg-primary hover:text-background transition-colors group"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-secondary group-hover:text-background/70 mt-1">
                by Sparsh Yadav · View Case Study →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
