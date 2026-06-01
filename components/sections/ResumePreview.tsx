"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { Download } from "lucide-react";
import { Magnetic } from "@/components/animations/Magnetic";

export function ResumePreview() {
  return (
    <section id="resume" className="relative py-32 px-4 md:px-8 bg-transparent flex flex-col items-center justify-center overflow-hidden z-10">
      <div className="max-w-6xl w-full">
        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
              Curriculum Vitae
            </h2>
            <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <div className="flex flex-col lg:flex-row gap-8 items-center bg-card border border-border rounded-3xl p-6 md:p-8 hover:border-primary/50 transition-colors shadow-xl">
            {/* Preview Area */}
            <div className="w-full lg:w-2/3 h-[50vh] md:h-[700px] rounded-2xl overflow-hidden border border-border bg-black/5 relative group">
              {/* Note: iOS Safari sometimes struggles with iframe PDF embedding, but it works flawlessly on desktop */}
              <iframe 
                src="/Aravinndh_New.pdf#view=FitH&toolbar=0" 
                className="w-full h-full rounded-2xl"
                title="Resume Preview"
              />
            </div>
            
            {/* Action Area */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center items-center text-center space-y-8 p-4">
              <div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Complete Profile</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Grab a copy of my full resume to get a comprehensive overview of my experience, publications, and technical skill set.
                </p>
              </div>
              
              <Magnetic>
                <a 
                  href="/Aravinndh_New.pdf" 
                  download="Aravindh_Resume.pdf"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
                >
                  <Download className="w-5 h-5" /> Download PDF
                </a>
              </Magnetic>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
