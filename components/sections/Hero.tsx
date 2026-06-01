"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  return (
    <>
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-transparent">

      <div className="z-10 flex flex-col items-center justify-center text-center px-4">
        <FadeIn delay={2.3}>
          <div 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full mb-8 overflow-hidden border-2 border-primary/30 p-1 group cursor-pointer"
            onClick={() => setIsImageExpanded(true)}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
            <div className="w-full h-full rounded-full bg-gradient-to-br from-card to-background flex items-center justify-center relative overflow-hidden border border-border">
              {/* NOTE: Place your image in the 'public' folder and name it 'profile.jpg' */}
              <Image
                src="/profile.jpeg"
                alt="Aravindh"
                fill
                sizes="(max-width: 768px) 128px, 160px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </FadeIn>

        <FadeIn delay={2.5}>
          <h2 className="text-sm md:text-lg text-primary tracking-[0.2em] uppercase mb-4 font-mono font-bold">
            AI Research Engineer
          </h2>
        </FadeIn>

        <FadeIn delay={2.7} direction="up">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-bold text-white tracking-tighter mix-blend-difference mb-4 leading-none">
            ARAVINDH
          </h1>
          <div className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 font-bold mb-8">
            Building The Future
          </div>
        </FadeIn>

        <FadeIn delay={2.9} direction="up">
          <p className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed mb-10">
            Crafting the next generation of artificial intelligence interfaces.
            Specializing in generative models, interactive 3D, and high-performance web applications.
          </p>
        </FadeIn>

        <FadeIn delay={3.1} direction="up">
          <div className="flex gap-6">
            <Magnetic>
              <button className="px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors rounded-full shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]">
                View Work
              </button>
            </Magnetic>
            <Magnetic>
              <button className="px-8 py-4 border border-foreground/20 dark:border-white/20 text-foreground dark:text-white text-sm font-bold uppercase tracking-widest hover:border-primary transition-colors rounded-full">
                Contact Me
              </button>
            </Magnetic>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <FadeIn delay={3.5}>
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </FadeIn>
      </div>
    </section>

    <AnimatePresence>
      {isImageExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsImageExpanded(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 dark:bg-black/80 backdrop-blur-sm cursor-zoom-out p-4"
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-foreground/10 hover:bg-foreground/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-full text-foreground dark:text-white flex items-center justify-center backdrop-blur-md transition-colors z-[60]"
            onClick={() => setIsImageExpanded(false)}
          >
            ✕
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-[85vw] h-[85vw] max-w-[450px] max-h-[450px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/10 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/profile.jpeg"
              alt="Aravindh"
              fill
              sizes="(max-width: 768px) 85vw, 450px"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
