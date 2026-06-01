"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Mail, GitBranch, User, ExternalLink } from "lucide-react";

// Condensed Data for Recruiter View
const skills = [
  "Large Language Models", "Generative AI", "TypeScript", "Python", "PyTorch",
  "Next.js", "React", "WebGL", "Three.js", "TailwindCSS",
  "Node.js", "GraphQL", "PostgreSQL", "Docker", "AWS", "CUDA"
];

const experience = [
  {
    role: "MAGPIE Intern",
    company: "Samsung R&D Institute Bangalore",
    period: "Jun 2025 - Jul 2025",
    points: [
      "Engineered scalable AI-powered web scraping systems for real-time market intelligence and integrated LLM-driven workflows to extract context-aware insights from dynamic web environments."
    ]
  },
  {
    role: "Samsung Prism R&D Intern",
    company: "Samsung R&D Institute",
    period: "Feb 2024 - Aug 2024",
    points: [
      "Worked on prompt engineering and generative AI workflows using LLaMA3 and Stable Diffusion XL to create high-quality marketing visuals and optimize AI-assisted content generation pipelines."
    ]
  },
  {
    role: "AI & Full Stack Developer",
    company: "Independent Projects & Research",
    period: "2023 - Present",
    points: [
      "Building modern AI-powered applications focused on generative AI, healthcare intelligence, multimodal systems, and immersive web experiences using Next.js, FastAPI, LLMs, and deep learning frameworks."
    ]
  }
];

const topProjects = [
  {
    title: "Explainable Multimodal Organ-Level Score Analysis",
    description: "AI framework to analyze diabetes-related systemic effects across retina, kidney, and heart using EfficientNet and CNN-Transformers.",
    tech: "Python, PyTorch, EfficientNet, Flask",
    link: "https://github.com/Phoenix-070"
  },
  {
    title: "Watchly",
    description: "Movie and TV discovery platform with personalized recommendations, trending analytics, and real-time content integration.",
    tech: "Next.js, Tailwind CSS, Framer Motion, Machine Learning",
    link: "https://github.com/Phoenix-070/Watchly"
  },
  {
    title: "AI Mental Therapist",
    description: "Interactive chat-based wellness support using OpenAI APIs and local LLMs (Ollama, Qwen3).",
    tech: "Next.js, OpenAI API, Ollama",
    link: "https://github.com/Phoenix-070/AI-Mental-Therapist"
  }
];

export function RecruiterMode() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isRecruiterMode = searchParams.get("mode") === "recruiter";

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isRecruiterMode) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isRecruiterMode]);

  if (!isRecruiterMode) return null;

  const closeMode = () => {
    router.push("/", { scroll: false });
  };

  return (
    <AnimatePresence>
      {isRecruiterMode && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-card text-foreground overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
            <div className="font-heading font-bold text-xl tracking-wider text-primary">RECRUITER QUICK VIEW</div>
            <button
              onClick={closeMode}
              className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 text-sm font-bold"
            >
              Exit Mode <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">

            {/* Identity & Actions */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
              <div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">ARAVINDH</h1>
                <h2 className="text-xl md:text-2xl text-primary font-mono tracking-widest uppercase mb-6">AI Research Engineer</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // Base64 encoded email address. You can generate your own by opening the browser console and typing: btoa("your.email@example.com")
                      // Currently set to: hello@example.com
                      const email = atob("bWFyYXZpbmRoMDEwQGdtYWlsLmNvbQ==");
                      window.location.href = `mailto:${email}`;
                    }}
                    className="inline-block px-12 py-6 bg-foreground text-background text-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]"
                  >
                    Email Me
                  </button>
                  <a href="https://github.com/Phoenix-070" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <GitBranch className="w-4 h-4" /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/aravindhm010/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <User className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/Aravinndh_New.pdf"
                  download="Aravindh_Resume.pdf"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  <Download className="w-5 h-5" /> Download Resume
                </a>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-primary rounded-full"></span> Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-4">
                <span className="w-8 h-1 bg-primary rounded-full"></span> Experience
              </h3>
              <div className="space-y-8">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-xl font-bold">{exp.role} <span className="text-primary">@ {exp.company}</span></h4>
                      <span className="text-sm text-gray-400 font-mono mt-1 md:mt-0">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300">
                      {exp.points.map((point, i) => (
                        <li key={i} className="pl-2">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Projects */}
            <section>
              <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-primary rounded-full"></span> Featured Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {topProjects.map((project, idx) => (
                  <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col h-full hover:border-primary/50 transition-colors">
                    <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                    <p className="text-sm text-gray-400 mb-4 flex-grow">{project.description}</p>
                    <div className="text-xs text-primary font-mono mb-6">{project.tech}</div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors mt-auto">
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
