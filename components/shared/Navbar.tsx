"use client";

import Link from "next/link";
import { Magnetic } from "@/components/animations/Magnetic";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Briefcase, Terminal } from "lucide-react";

export function Navbar() {
  const router = useRouter();
  
  const enableRecruiterMode = () => {
    router.push("?mode=recruiter", { scroll: false });
  };

  const enableTerminalMode = () => {
    router.push("?mode=terminal", { scroll: false });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white"
    >
      <div className="text-xl font-heading font-bold uppercase tracking-widest">
        <Magnetic>
          <Link href="/">Aravindh.Dev</Link>
        </Magnetic>
      </div>
      <nav className="flex items-center gap-8">
        <Magnetic><Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link></Magnetic>
        <Magnetic><Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link></Magnetic>
        <Magnetic><Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">Experience</Link></Magnetic>
        <Magnetic><Link href="#achievements" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">Achievements</Link></Magnetic>
        <Magnetic><Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors hidden lg:block">Skills</Link></Magnetic>
        <Magnetic><Link href="#resume" className="text-sm font-medium hover:text-primary transition-colors hidden xl:block">Resume</Link></Magnetic>
        <Magnetic><Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link></Magnetic>
        
        <Magnetic>
          <button 
            onClick={enableRecruiterMode}
            className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white border border-primary/50 rounded-full text-sm font-bold transition-all duration-300 ml-2 hidden sm:flex"
          >
            <Briefcase className="w-4 h-4" /> Recruiter Mode
          </button>
        </Magnetic>

        <Magnetic>
          <button 
            onClick={enableTerminalMode}
            className="flex items-center justify-center w-10 h-10 bg-black/50 hover:bg-black text-green-400 border border-green-500/50 hover:border-green-500 rounded-full transition-all duration-300 ml-2"
            title="Open Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
        </Magnetic>
      </nav>
    </motion.header>
  );
}
