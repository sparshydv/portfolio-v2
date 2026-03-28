import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] text-[#555555] pt-20 pb-10 overflow-hidden border-t border-black/[0.04]">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12">

        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">

          {/* Column 1: Office Address */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#111111] font-bold text-xs mb-1 uppercase tracking-widest">Location</h4>
            <div className="text-sm font-medium leading-relaxed text-[#777]">
              <p>New Delhi, India</p>
              <p className="mt-1 uppercase tracking-wide text-[10px] text-[#aaa]">Available Worldwide</p>
            </div>
          </div>

          {/* Column 2: More Info */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#111111] font-bold text-xs mb-1 uppercase tracking-widest">More Info</h4>
            <ul className="flex flex-col gap-2 text-sm font-medium">
              <li><Link href="/#about" className="text-[#777] hover:text-black transition-colors">About Me</Link></li>
              <li><Link href="/#services" className="text-[#777] hover:text-black transition-colors">Services</Link></li>
              <li><Link href="/#projects" className="text-[#777] hover:text-black transition-colors">Projects</Link></li>
              <li><Link href="/#how-i-build" className="text-[#777] hover:text-black transition-colors">My Process</Link></li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#111111] font-bold text-xs mb-1 uppercase tracking-widest">Socials</h4>
            <ul className="flex flex-col gap-2 text-sm font-medium">
              <li><a href="https://github.com/sparshydv" target="_blank" rel="noopener noreferrer" className="text-[#777] hover:text-black transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com/in/sparshydv/" target="_blank" rel="noopener noreferrer" className="text-[#777] hover:text-black transition-colors">LinkedIn</a></li>
              <li><a href="https://leetcode.com/u/Sparsh_Yadav/" target="_blank" rel="noopener noreferrer" className="text-[#777] hover:text-black transition-colors">LeetCode</a></li>
              <li><a href="https://x.com/Sparsh__Yadav" target="_blank" rel="noopener noreferrer" className="text-[#777] hover:text-black transition-colors">Twitter (X)</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[#111111] font-bold text-xs mb-1 uppercase tracking-widest">Contact</h4>
            <ul className="flex flex-col gap-2 text-sm font-medium">
              <li><Link href="/#contact" className="text-[#777] hover:text-black transition-colors">Get in touch</Link></li>
              <li><a href="mailto:sparsh.yadav.work@gmail.com" className="text-[#777] hover:text-black transition-colors break-all">sparsh.yadav.work@gmail.com</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#bbb]">
          <div className="flex items-center gap-4">
            <span className="text-[#999]">&copy; {currentYear} Sparsh Yadav</span>
            <span className="opacity-30">/</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#f07b1a]" />
            <span className="opacity-50">Currently Accepting Clients</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
