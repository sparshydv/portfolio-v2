"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { PopupModal } from "react-calendly";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { appReady, introFinished } = useLoading();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Sync the reveal with the site intro
  useEffect(() => {
    if (appReady && introFinished) {
      const timer = setTimeout(() => setShowNav(true), 400); // Slight delay for nice staggering
      return () => clearTimeout(timer);
    }
  }, [appReady, introFinished]);

  // Hide the navbar on project case study pages
  if (pathname?.startsWith("/projects/")) {
    return null;
  }

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={showNav ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-black/5" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#111111]">
        
        {/* Logo */}
        <Link href="/" className="hover:opacity-70 transition-opacity whitespace-nowrap text-[12px] md:text-[14px] font-bold tracking-widest flex-shrink-0 z-50">
          SPARSH YADAV
        </Link>
        
        {/* Desktop Navigation Links (HIDDEN on tablet/mobile via Tailwind's hidden lg:flex) */}
        <div className="hidden lg:flex items-center gap-6 md:gap-10">
          <nav className="flex gap-8">
            <Link href="#services" className="hover:text-black/60 transition-colors">SERVICES</Link>
            <Link href="#projects" className="hover:text-black/60 transition-colors">WORK</Link>
            <Link href="#how-i-build" className="hover:text-black/60 transition-colors">How I Build</Link>
            <Link href="#about" className="hover:text-black/60 transition-colors">ABOUT ME</Link>
          </nav>
          
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-[#f07b1a] hover:bg-[#e06b0a] text-white px-6 md:px-8 py-3 rounded-full transition-colors shadow-md tracking-wider flex-shrink-0 ml-2"
          >
            BOOK A CALL
          </button>
        </div>

        {/* Mobile Navbar Controls (Visible only below 1024px) */}
        <div className="flex lg:hidden items-center gap-4 z-50">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111] hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden h-screen overflow-y-auto",
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pt-24 pb-12">
            {[
              { label: "Services", href: "#services" },
              { label: "Work", href: "#projects" },
              { label: "How I Build", href: "#how-i-build" },
              { label: "About Me", href: "#about" }
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-[#111] hover:text-[#f07b1a] transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
            
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setIsOpen(true);
              }}
              className="mt-4 bg-[#f07b1a] hover:bg-[#e06b0a] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest shadow-lg"
            >
              BOOK A CALL
            </button>

            <div className="mt-auto pt-10 flex flex-col items-center gap-4 text-[#999] text-[10px] font-bold tracking-[0.3em] uppercase">
              <span>Sparsh Yadav / Portfolio</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#f07b1a]" />
            </div>
          </div>
        </div>

      </div>

      {mounted && typeof document !== "undefined" && (
        <PopupModal
          url="https://calendly.com/sparsh-yadav-work/new-meeting"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.body}
        />
      )}
    </motion.header>
  );
}
