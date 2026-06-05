"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { ScratchCard } from "@/components/animations/ScratchCard";

const skills = [
  "Large Language Models", "Generative AI", "TypeScript", "Python", "PyTorch",
  "Next.js", "React", "HTML, CSS & JavaScript", "Three.js", "TailwindCSS",
  "Node.js", "GraphQL", "SQL", "MongoDB", "AWS", "CUDA"
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-8 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 tracking-tighter text-center">
            The <span className="text-primary">Arsenal</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-gray-400 max-w-2xl text-center mx-auto mb-20 leading-relaxed text-lg">
            A versatile toolkit spanning full-stack engineering, 3D graphics, and advanced machine learning ecosystems.
          </p>
        </FadeIn>

        <div className="w-full flex flex-wrap justify-center gap-4 relative z-20">
          {skills.map((skill, index) => (
            <FadeIn key={skill} delay={0.05 * index} direction="up">
              <ScratchCard width={180} height={70}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-500 font-bold text-sm text-center px-2">
                  {skill}
                </span>
              </ScratchCard>
            </FadeIn>
          ))}
        </div>

        {/* Abstract floating background elements to represent skills orbiting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] pointer-events-none opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full border border-primary/30 border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute top-16 left-16 right-16 bottom-16 rounded-full border border-purple-500/20"
          />
        </div>
      </div>
    </section>
  );
}
