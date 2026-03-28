import Hero from "@/sections/Hero";
import ProblemSolution from "@/sections/ProblemSolution";
import BeforeAfter from "@/sections/BeforeAfter";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import HowIBuild from "@/sections/HowIBuild";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sparsh Yadav",
  url: "https://sparshyadav.dev",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, MERN stack, and GSAP animations.",
  sameAs: [
    "https://www.linkedin.com/in/sparshydv/",
    "https://github.com/sparshydv",
    "https://x.com/Sparsh__Yadav",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "GSAP",
    "Tailwind CSS",
    "Full Stack Development",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col min-h-screen">
        <div className="relative w-full">
          <Hero />
          <ProblemSolution />
        </div>
        <BeforeAfter />
        <Projects />
        <Services />
        <HowIBuild />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
