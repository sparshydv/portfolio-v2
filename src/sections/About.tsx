import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-border-subtle p-8">
      <div className="max-w-5xl w-full mx-auto">
        <p className="text-sm font-bold tracking-widest uppercase mb-4 text-secondary">ABOUT ENGINEER</p>
        <h2 className="text-4xl font-bold mb-6">Sparsh Yadav</h2>
        <p className="text-lg text-secondary leading-relaxed mb-8 max-w-2xl">
          Full Stack Developer specializing in Next.js, React, and the MERN stack. Focused on engineering excellence and premium digital experiences.
        </p>
        <div className="flex flex-wrap gap-6 mb-8 text-secondary">
          <a href="https://github.com/sparshydv" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sparshydv/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/Sparsh__Yadav" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Twitter
          </a>
        </div>
        <div className="flex gap-6">
          <Link href="/#projects" className="text-secondary hover:text-primary transition-colors">
            View Projects →
          </Link>
          <Link href="/sparsh-yadav" className="text-secondary hover:text-primary transition-colors">
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}
