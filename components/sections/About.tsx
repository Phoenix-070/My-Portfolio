"use client";

import { FadeIn } from "@/components/animations/FadeIn";

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-32 px-8 flex flex-col items-center justify-center bg-transparent z-10"
    >
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 text-center tracking-tighter">
          Building the Future with{" "}
          <span className="text-primary">AI & Creativity.</span>
        </h2>
      </FadeIn>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <FadeIn delay={0.2} className="md:col-span-2">
          <div className="h-full p-8 md:p-12 rounded-3xl bg-card border border-border flex flex-col justify-end group hover:border-primary/50 transition-colors duration-500">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
              My Journey
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I’m an AI engineer and full-stack developer passionate about
              building intelligent digital experiences that feel seamless,
              human, and impactful. From developing multimodal healthcare AI
              systems to crafting modern AI-powered platforms, I enjoy turning
              ambitious ideas into scalable products that combine research,
              design, and engineering.
              <br />
              <br />
              My experience spans generative AI, LLM applications, healthcare
              intelligence, and interactive web technologies — with hands-on
              work through Samsung R&D internships, research-driven projects,
              and real-world product development.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="h-full p-8 md:p-12 rounded-3xl bg-card border border-border flex flex-col justify-center items-center text-center group hover:border-primary/50 transition-colors duration-500">
            <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/50 dark:from-white dark:to-gray-500 mb-4">
              6+
            </div>

            <div className="text-xs tracking-widest uppercase text-primary font-mono">
              AI & Full-Stack Projects
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="h-full p-8 md:p-12 rounded-3xl bg-card border border-border flex flex-col justify-center items-center text-center group hover:border-primary/50 transition-colors duration-500">
            <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/50 dark:from-white dark:to-gray-500 mb-4">
              2
            </div>

            <div className="text-xs tracking-widest uppercase text-primary font-mono">
              Samsung R&D Internships
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.8} className="md:col-span-2">
          <div className="h-full p-8 md:p-12 rounded-3xl bg-card border border-border flex flex-col justify-end group hover:border-primary/50 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading relative z-10">
              What I Believe
            </h3>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base relative z-10">
              Great technology is not just functional — it should feel alive.
              I focus on building products that merge intelligent systems with
              immersive user experiences, combining AI, motion, and modern web
              technologies into applications that are both powerful and elegant.
              <br />
              <br />
              Whether it’s an AI healthcare framework, a generative AI platform,
              or a next-generation web experience, my goal is always the same:
              create technology that people genuinely enjoy using.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}