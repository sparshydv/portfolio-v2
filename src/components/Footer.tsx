import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle py-12 px-8">
      <div className="max-w-5xl w-full mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-secondary text-sm">
          © {new Date().getFullYear()} Sparsh Yadav. All rights reserved.
        </p>
        <nav className="flex gap-6 text-sm text-secondary" aria-label="Footer navigation">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/sparsh-yadav" className="hover:text-primary transition-colors">
            About Sparsh Yadav
          </Link>
          <a href="https://github.com/sparshydv" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/sparshydv/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/Sparsh__Yadav" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Twitter
          </a>
        </nav>
      </div>
    </footer>
  );
}
