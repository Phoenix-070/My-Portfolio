import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Skills } from "@/components/sections/Skills";
import { ResumePreview } from "@/components/sections/ResumePreview";
import { Contact } from "@/components/sections/Contact";
import { RecruiterMode } from "@/components/sections/RecruiterMode";
import { TerminalMode } from "@/components/sections/TerminalMode";
import { Suspense } from "react";
import { HeroCanvasWrapper } from "@/components/canvas/HeroCanvasWrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-background">
      <Suspense fallback={null}>
        <RecruiterMode />
        <TerminalMode />
      </Suspense>
      <HeroCanvasWrapper />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Achievements />
      <Skills />
      <ResumePreview />
      <Contact />
    </div>
  );
}
