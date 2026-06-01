"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { GitBranch } from "lucide-react";

const projects = [
  {
    title: "Explainable Multimodal Organ-Level Score Analysis",
    category: "Healthcare AI & Multimodal Deep Learning",
    description:
      "Developed an explainable multimodal AI framework to analyze diabetes-related systemic effects across retina, kidney, and heart using EfficientNet, CNN-Transformer architectures, and fusion-based risk scoring with Grad-CAM explainability.",
    tech: ["Python", "PyTorch", "EfficientNet", "Flask", "XGBoost"],
    github: "https://github.com/Phoenix-070/Mutilmodal-Diabetes-Complication-Prediction"
  },
  {
    title: "Watchly",
    category: "Entertainment & Recommendation Platform",
    description:
      "Built a modern movie and TV discovery platform with personalized recommendations, trending analytics, rich UI interactions, and real-time content integration.",
    tech: ["Next.js", "TMDB API", "Tailwind CSS", "Framer Motion", "Collaborative Filtering Algorithms", "Machine Learning"],
    github: "https://github.com/Phoenix-070/Watchly"
  },
  {
    title: "AI Mental Therapist",
    category: "Generative AI & Mental Health",
    description:
      "Built an AI-powered mental health therapist web application with interactive chat-based wellness support using OpenAI APIs and local LLMs with a modern responsive UI.",
    tech: ["Next.js", "Tailwind CSS", "OpenAI API", "Ollama", "Qwen3"],
    github: "https://github.com/Phoenix-070/AI-Mental-Therapist"
  },
  {
    title: "EduTranscribe",
    category: "AI Transcription & Accessibility",
    description:
      "Developed an AI-powered transcription and multilingual education platform supporting speech-to-text, translation, summarization, keyword extraction, and TTS for inclusive learning.",
    tech: ["FastAPI", "Whisper", "Gemini Pro", "NLLB", "gTTS"],
    github: "https://github.com/Phoenix-070/Edutranscribe"
  },
  {
    title: "Spotify Analysis Dashboard",
    category: "Data Analytics & Visualization",
    description:
      "Created an interactive Power BI dashboard analyzing Spotify listening trends, artist popularity, and user behavior with automated reports and real-time analytics.",
    tech: ["Power BI", "DAX", "Power Query", "SQL"],
    github: "https://github.com/Phoenix-070/Spotify-PowerBI-Analysis"
  },
  {
    title: "Remedi",
    category: "Healthcare Technology",
    description:
      "Developed an intelligent healthcare platform focused on improving patient interaction, medical accessibility, and smart healthcare assistance through AI-powered features and modern web technologies.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/Phoenix-070/Remedi"
  },

];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen w-full py-32 px-8 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tighter">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Works</span>
          </h2>
          <p className="text-gray-400 mb-16 max-w-2xl">
            A showcase of my recent research, experiments, and production-level deployments in the AI space.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={0.2 * index} direction="up" className="h-full">
              <div className="group h-[450px] rounded-3xl bg-card border border-border overflow-hidden relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />

                {/* Abstract visualization background since no image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent group-hover:scale-150 transform-gpu" />

                <div className="relative z-20 h-full p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-primary font-mono text-xs uppercase tracking-widest mb-2 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-3 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500 delay-75 line-clamp-3">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col justify-end">
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 delay-150">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 delay-200">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-black/20 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-xs text-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center text-foreground dark:text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 hover:bg-primary z-30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitBranch className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
