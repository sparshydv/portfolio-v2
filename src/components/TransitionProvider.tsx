"use client";

import { useState, useEffect } from "react";
import IntroLoader from "./IntroLoader";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const { appReady } = useLoading();
  const [introFinished, setIntroFinished] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallel double-check condition: reveal only when both are ready
  // This ensures the intro plays its full atmospheric sequence AND the 
  // background hero section is mounted and ready.
  useEffect(() => {
    if (introFinished && appReady) {
      // Minimal timeout to let the GSAP "container fadeout" breathe
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [introFinished, appReady]);

  // Prevent hydration mismatch by only rendering after client-side mount
  if (!mounted) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {!introFinished && (
          <IntroLoader key="loader" onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      <div className={`relative min-h-screen ${!showContent ? "h-screen overflow-hidden" : ""}`}>
        <motion.div
           initial={{ opacity: 0, scale: 1.05, filter: "blur(25px)" }}
           animate={showContent ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 1.05, filter: "blur(25px)" }}
           transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col min-h-screen"
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
