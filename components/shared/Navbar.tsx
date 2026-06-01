"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Magnetic } from "@/components/animations/Magnetic";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Briefcase, Terminal, Menu, X } from "lucide-react";

export function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);
  
  const enableRecruiterMode = () => {
    setIsMobileMenuOpen(false);
    router.push("?mode=recruiter", { scroll: false });
  };

  const enableTerminalMode = () => {
    setIsMobileMenuOpen(false);
    router.push("?mode=terminal", { scroll: false });
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-8 mix-blend-difference text-white"
      >
        <div className="text-xl font-heading font-bold uppercase tracking-widest relative z-50">
          <Magnetic>
            <Link href="/" onClick={handleLinkClick}>Aravindh.Dev</Link>
          </Magnetic>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Magnetic><Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link></Magnetic>
          <Magnetic><Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link></Magnetic>
          <Magnetic><Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">Experience</Link></Magnetic>
          <Magnetic><Link href="#achievements" className="text-sm font-medium hover:text-primary transition-colors hidden lg:block">Achievements</Link></Magnetic>
          <Magnetic><Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors hidden xl:block">Skills</Link></Magnetic>
          <Magnetic><Link href="#resume" className="text-sm font-medium hover:text-primary transition-colors hidden xl:block">Resume</Link></Magnetic>
          <Magnetic><Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link></Magnetic>
          
          <Magnetic>
            <button 
              onClick={enableRecruiterMode}
              className="flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary text-primary hover:text-white border border-primary/50 rounded-full text-sm font-bold transition-all duration-300 ml-2"
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

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center min-h-screen"
          >
            <nav className="flex flex-col items-center gap-6 mt-16 w-full px-6">
              <Link href="#about" onClick={handleLinkClick} className="text-2xl font-bold hover:text-primary transition-colors">About</Link>
              <Link href="#projects" onClick={handleLinkClick} className="text-2xl font-bold hover:text-primary transition-colors">Projects</Link>
              <Link href="#experience" onClick={handleLinkClick} className="text-2xl font-bold hover:text-primary transition-colors">Experience</Link>
              <Link href="#achievements" onClick={handleLinkClick} className="text-2xl font-bold hover:text-primary transition-colors">Achievements</Link>
              <Link href="#skills" onClick={handleLinkClick} className="text-2xl font-bold hover:text-primary transition-colors">Skills</Link>
              <Link href="#resume" onClick={handleLinkClick} className="text-2xl font-bold hover:text-primary transition-colors">Resume</Link>
              <Link href="#contact" onClick={handleLinkClick} className="text-2xl font-bold hover:text-primary transition-colors">Contact</Link>
              
              <div className="w-full h-px bg-border/50 my-2 max-w-[200px]" />
              
              <button 
                onClick={enableRecruiterMode}
                className="flex items-center justify-center gap-2 w-full max-w-[250px] px-6 py-3 bg-primary/20 text-primary border border-primary/50 rounded-full text-lg font-bold"
              >
                <Briefcase className="w-5 h-5" /> Recruiter Mode
              </button>

              <button 
                onClick={enableTerminalMode}
                className="flex items-center justify-center gap-2 w-full max-w-[250px] px-6 py-3 bg-black/50 text-green-400 border border-green-500/50 rounded-full text-lg font-bold"
              >
                <Terminal className="w-5 h-5" /> Open Terminal
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
