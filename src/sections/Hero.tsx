import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#0A0A0A] text-[#E8E8E8]">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/hello.png"
          alt="Sparsh Yadav Portrait"
          fill
          className="object-cover object-[center_35%] relative z-10"
          style={{ 
            filter: "grayscale(100%) contrast(1.4) brightness(0.6)",
            mixBlendMode: "lighten"
          }}
          priority
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/40 z-20 mix-blend-multiply pointer-events-none"></div>
      </div>

      <header className="relative z-30 w-full p-6 md:p-12 flex justify-between items-start text-[11px] font-semibold tracking-[0.2em] uppercase mix-blend-screen text-white/90">
        <Link href="/" className="hover:opacity-70 transition-opacity whitespace-nowrap">
          SPARSH YADAV
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8 items-end md:items-center">
          <nav className="hidden md:flex gap-8">
            <Link href="#services" className="hover:text-white transition-colors text-white/80">SERVICES</Link>
            <Link href="#projects" className="hover:text-white transition-colors text-white/80">WORK</Link>
            <Link href="#how-i-build" className="hover:text-white transition-colors text-white/80">PROCESS</Link>
            <Link href="#about" className="hover:text-white transition-colors text-white/80">ABOUT ME</Link>
            <Link href="#contact" className="hover:text-white transition-colors text-white/80">CONTACT</Link>
          </nav>
        </div>
      </header>

      <div className="absolute top-[48%] w-full -translate-y-1/2 flex items-center z-20 pointer-events-none mix-blend-overlay overflow-hidden">
        <div className="flex w-fit animate-marquee-scroll whitespace-nowrap shrink-0">
          {[...Array(4)].map((_, i) => (
             <h1 key={i} className="text-[38vw] md:text-[30vw] leading-none font-bold tracking-[-0.04em] text-white select-none pr-[8vw] shrink-0">
               Sparsh Yadav .
             </h1>
          ))}
        </div>
      </div>

      <div className="absolute top-[48%] w-full -translate-y-1/2 flex items-center z-20 pointer-events-none mix-blend-screen opacity-90 overflow-hidden">
        <div className="flex w-fit animate-marquee-scroll whitespace-nowrap shrink-0">
          {[...Array(4)].map((_, i) => (
             <h1 key={`overlay-${i}`} className="text-[38vw] md:text-[30vw] leading-none font-bold tracking-[-0.04em] text-white select-none pr-[8vw] shrink-0">
               Sparsh Yadav .  
             </h1>
          ))}
        </div>
      </div>

      {/* Bottom Text Elements */}
      <div className="relative z-30 w-full p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mix-blend-screen">
        <div className="text-[11px] tracking-[0.2em] uppercase font-semibold text-white/90 mb-2 md:mb-4">
          BASED IN INDIA
        </div>
        <div className="text-left md:text-right">
          <h2 className="text-[2rem] md:text-[3.25rem] font-normal tracking-[-0.02em] leading-[1.05] text-white/95">
            Full Stack Developer<br/>
          </h2>
        </div>
      </div>
    </section>
  );
}
