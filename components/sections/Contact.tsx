"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Magnetic } from "@/components/animations/Magnetic";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen w-full py-32 px-8 bg-transparent relative z-10 flex flex-col items-center justify-center overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full text-center relative z-10">
        <FadeIn>
          <div className="text-sm tracking-[0.3em] text-primary uppercase font-mono mb-6">What's Next?</div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <h2 className="text-5xl md:text-8xl font-heading font-bold mb-8 tracking-tighter">
            Let's build the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">impossible.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed text-lg">
            Whether you have a groundbreaking idea, a complex AI problem, or just want to connect with a fellow builder, my inbox is always open.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} direction="up">
          <Magnetic>
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
              Say Hello
            </button>
          </Magnetic>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex flex-col md:flex-row items-center justify-between gap-4 px-12 text-sm text-gray-600 font-mono">
        <div>© 2026 Aravindh.Dev. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="https://www.instagram.com/_aravindh7_/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
          <a href="https://github.com/Phoenix-070" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/aravindhm010/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
