"use client";

import { FadeIn } from "@/components/animations/FadeIn";

const experiences = [
  {
    role: "MAGPIE Intern",
    company: "Samsung R&D Institute Bangalore",
    period: "Jun 2025 - Jul 2025",
    description:
      "Engineered scalable AI-powered web scraping systems for real-time market intelligence and integrated LLM-driven workflows to extract context-aware insights from dynamic web environments.",
  },
  {
    role: "Samsung Prism R&D Intern",
    company: "Samsung R&D Institute",
    period: "Feb 2024 - Aug 2024",
    description:
      "Worked on prompt engineering and generative AI workflows using LLaMA3 and Stable Diffusion XL to create high-quality marketing visuals and optimize AI-assisted content generation pipelines.",
  },
  {
    role: "AI & Full Stack Developer",
    company: "Independent Projects & Research",
    period: "2023 - Present",
    description:
      "Building modern AI-powered applications focused on generative AI, healthcare intelligence, multimodal systems, and immersive web experiences using Next.js, FastAPI, LLMs, and deep learning frameworks.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-8 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 tracking-tighter text-center">
            The <span className="text-primary">Timeline</span>
          </h2>
        </FadeIn>

        <div className="relative border-l border-border ml-4 md:ml-0 md:border-l-0 md:border-l-transparent">
          {/* Central line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 md:mb-24 last:mb-0">
              <FadeIn direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-card flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  </div>

                  <div className="w-full md:w-[45%] pl-8 md:pl-0">
                    <div className={`p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-colors ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                      <div className="text-primary font-mono text-sm mb-2">{exp.period}</div>
                      <h3 className="text-2xl font-bold font-heading mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                      <p className="text-gray-500 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block w-[45%]" />
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
