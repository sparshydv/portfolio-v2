"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface IntroLoaderProps {
  onComplete: () => void;
}

const words = [
  "Hello",
  "नमस्ते", 
  "Hola",
  "I am Sparsh Yadav",
  "I build products.",
  "That grow businesses."
];

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Final fade out of the entire loader
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "expo.inOut",
          onComplete: onComplete
        });
      }
    });

    // We process each word in the sequence
    words.forEach((_, i) => {
      const isLanguage = i < 3;
      const isName = i === 3;
      
      // Calculate timings: Faster, snappy feel targeting ~3 seconds total
      const animDuration = isLanguage ? 0.2 : isName ? 0.4 : 0.6;
      const stayDuration = isLanguage ? 0.05 : isName ? 0.4 : 0.8;

      // We use the position parameter "-=0.2" to overlap the next animation
      // with the previous one, creating a much more fluid "parallel" feel.
      tl.to({}, {
        duration: 0.01,
        onStart: () => setIndex(i),
      }, i === 0 ? 0 : "-=0.2") 
      .fromTo(textRef.current, 
        { y: 50, opacity: 0, filter: "blur(18px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: animDuration, ease: "power3.out" }
      )
      .to(textRef.current, 
        { y: -50, opacity: 0, filter: "blur(18px)", duration: animDuration, ease: "power3.in", delay: stayDuration }
      );
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden pointer-events-none"
    >
      <div className="relative overflow-hidden px-10">
        <h1 
          ref={textRef}
          className="text-white text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-center leading-tight selection:bg-white selection:text-black [will-change:transform]"
        >
          {words[index]}
        </h1>
      </div>
    </div>
  );
}
