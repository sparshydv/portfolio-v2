"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLoading } from "@/context/LoadingContext";

// Import images for automatic Blur-to-HD placeholders
import LineaImg from "../../public/images/linea-ecommerce-case-study-sparsh-yadav.png";
import SubTrackerImg from "../../public/images/subtracker-subscription-management-backend.png";
import AppleImg from "../../public/images/apple-style-gsap-animation-showcase.png";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "LINEA E-Commerce",
      subtitle: "Modern Commerce Platform",
      tags: ["[ MERN ]", "[ AWS ]", "[ Google OAuth ]"],
      description: "A full-stack e-commerce system engineered with real-world business logic, including authentication, cart management, and order processing. Designed to handle end-to-end user journeys with seamless checkout flows and scalable backend services.",
      link: "https://linea-ecommerce.vercel.app",
      caseStudyLink: "/projects/linea",
      image: LineaImg
    },
    {
      id: "02",
      title: "SubTracker",
      subtitle: "Backend Infrastructure",
      tags: ["[ NODE.JS ]", "[ ARCJET ]", "[ UPSTASH ]"],
      description: "A production-grade subscription management system designed to track, analyze, and optimize recurring expenses. Built with scalable backend architecture, automated workflows, and intelligent alerts to reduce unnecessary spending.",
      link: "https://subtracker-self.vercel.app",
      caseStudyLink: "/projects/subtracker",
      image: SubTrackerImg
    },
    {
      id: "03",
      title: "Apple-Style Website",
      subtitle: "Interactive Product Experience",
      tags: ["[ THREE.JS ]", "[ GSAP ]", "[ TAILWIND CSS ]"],
      description: "A high-performance, animation-driven web experience built using GSAP and Three.js. Focused on immersive storytelling through scroll-based animations, 3D rendering, and premium UI interactions.",
      link: "https://applestyle-gsap.vercel.app/",
      caseStudyLink: "/projects/gsap-experience",
      image: AppleImg
    }
  ];

  return (
    <section id="projects" className="w-full bg-[#FAFAFA]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 md:py-32 bg-[#FAFAFA]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#f07b1a] mb-4">
              Projects
            </p>
            <h2 className="section-heading text-4xl md:text-[52px] font-bold text-[#111111] tracking-tight leading-none">
              Work Showcase
            </h2>
          </div>
          <p className="text-[#777] text-base max-w-xs leading-relaxed">
            A collection of high-impact digital products, engineered for scale and designed for conversion.
          </p>
        </div>
      </div>

      {projects.map((proj, i) => (
        <React.Fragment key={i}>
          <ProjectBlock project={proj} index={i} />
          {i < projects.length - 1 && (
            <div className="md:hidden h-[1px] bg-black/[0.05] mx-8 my-4" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
}

const ProjectBlock = ({ project, index }: { project: any, index: number }) => {
  const isEven = index % 2 === 0;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { introFinished } = useLoading();
  const [useHighRes, setUseHighRes] = useState(false);

  // Silent Upgrade: Once the intro is fully revealed, we swap to 100% quality
  useEffect(() => {
    if (introFinished) {
      // 1.5s delay after the reveal starts to give the user time to settle
      const timer = setTimeout(() => {
        setUseHighRes(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [introFinished]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const overlayY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

  const imgWidth = useTransform(scrollYProgress, [0.1, 0.45], ["100%", "58%"]);
  const leftY = useTransform(scrollYProgress, [0.15, 0.45], [40, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div ref={containerRef} className="project-block-container relative h-[200vh] w-full bg-[#FAFAFA]">
      <div className="project-sticky-inner sticky top-[80px] h-[calc(100dvh-80px)] w-full overflow-hidden flex">
        
        {/* Text Content Area */}
        <motion.div 
          className={`absolute top-0 w-full md:w-[42%] h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10 ${
            isEven ? "left-0" : "right-0"
          }`}
          style={{ y: leftY }}
        >
          <div className="flex gap-4 mb-4 text-[10px] md:text-xs font-mono tracking-widest text-[#555]">
            {project.tags.map((tag: string) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#111] mb-2 leading-[1.1] tracking-tight">
            {project.title}
          </h2>

          {project.subtitle && (
            <p className="text-sm md:text-base font-medium text-[#F97316] mb-6 uppercase tracking-widest font-sans">
              {project.subtitle}
            </p>
          )}
          
          <p className="text-[#666] text-sm md:text-base leading-relaxed mb-8 max-w-sm font-sans">
            {project.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 font-sans mt-4 md:mt-0">
            <a 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#111] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#333] transition-colors flex items-center justify-center gap-2 group"
            >
              Visit Site 
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            
            <Link 
              href={project.caseStudyLink}
              className="text-xs font-bold uppercase tracking-widest text-[#111] border-b-2 border-transparent hover:border-[#111] pb-1 transition-all duration-300"
            >
              Case Study
            </Link>
          </div>
        </motion.div>

        {/* Image Container */}
        <motion.div 
          className={`absolute top-0 h-full z-20 shadow-2xl overflow-hidden cursor-none flex items-center justify-center ${
            isEven ? "right-0 origin-right" : "left-0 origin-left"
          }`}
          style={{ width: imgWidth }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
        >
          {/* Card wrapper for mobile image */}
          <div className="md:hidden absolute inset-0 bg-white/50 backdrop-blur-sm z-[-1]" />
          <div className="w-full h-full md:h-full relative group md:p-0 p-4">
            <div className="w-full h-full relative rounded-none md:rounded-0 overflow-hidden border border-black/[0.05] md:border-0 bg-[#FAFAFA] shadow-sm md:shadow-none">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image 
                  src={project.image} 
                  alt={`${project.title} - Sparsh Yadav Full Stack Developer`} 
                  fill
                  sizes={useHighRes ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"}
                  quality={useHighRes ? 100 : 75}
                  className={`w-full h-full object-contain md:object-cover object-top transition-all duration-1000 group-hover:scale-105 ${
                    useHighRes ? "opacity-100" : "opacity-95 contrast-[1.02]"
                  }`}
                  loading="lazy"
                  placeholder="blur"
                />
              </a>
            </div>
            
            {/* Custom Cursor Pill (Desktop Only) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="hidden md:block absolute pointer-events-none z-[100] px-6 py-2.5 bg-[#f07b1a] text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_10px_30px_rgba(240,123,26,0.4)] whitespace-nowrap"
                  style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  Visit Site
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
