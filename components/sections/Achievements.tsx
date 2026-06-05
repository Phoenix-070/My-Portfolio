"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { BookOpen, Award, ExternalLink, Trophy } from "lucide-react";

const hackathons = [
  {
    title: "AWS Ideathon",
    position: "2nd Runner Up",
    description: "Demonstrated innovation and technical skills to secure the 2nd runner-up position in the AWS Ideathon.",
  },
  {
    title: "Flipkart GRiD 7.0",
    position: "National Semi-Finalist",
    description: "Advanced to the national semi-finals of Flipkart GRiD 7.0, tackling real-world e-commerce and engineering challenges.",
  },
  {
    title: "Standard Chartered Hackathon",
    position: "Participant",
    description: "Participated in the Standard Chartered Hackathon, building innovative and impactful solutions.",
  },
  {
    title: "Guidewire Hackathon",
    position: "Top 5 Finalist",
    description: "Secured a position as a Top 5 Finalist in the Guidewire Hackathon.",
  },
];

const publications = [
  {
    title:
      "An Optimized Multi-Stage Pipeline for Prompt-Based Image Generation and Enhancement",
    venue: "Research Publication",
    date: "2025",
    description:
      "Proposed a multi-stage generative AI pipeline for prompt-based image generation and enhancement, focusing on improving visual quality, prompt alignment, and generation efficiency using advanced diffusion workflows.",
    link: "https://ieeexplore.ieee.org/document/11436737",
  },
  {
    title:
      "Explainable Multimodal Organ-Level Score Analysis for Exploring Systemic Diabetic Effects Across Retina, Kidney and Heart",
    venue: "Academic Research Project",
    date: "2026",
    description:
      "Developed an explainable multimodal healthcare AI framework integrating retinal imaging, kidney analysis, and ECG-based cardiac assessment using EfficientNet, CNN-Transformer architectures, and fusion-based systemic risk scoring.",
    link: "/SCITEPRESS_Conference_Paper.pdf",
  },
];

const certifications = [

  {
    title: "Oracle Cloud Infrastructure Certified AI Foundation Associate",
    issuer: "Oracle",
    date: "2025",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=216C67EBAC5418E0993702F03469D405E0219832E9F328A0B15E3534189422E4",
  },
  {
    title: "Alteryx Designer Core Certification",
    issuer: "Alteryx",
    date: "2025",
    credentialUrl: "https://www.credly.com/badges/327e3b24-8383-4403-85c3-fd4707910b23/public_url",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "2025",
    credentialUrl: "https://www.credly.com/badges/1ea500ba-bb42-45f5-8b63-792cc41b33b4/public_url",
  },
  {
    title: "Oracle Cloud Infrastructure Certified Foundation Associate",
    issuer: "Oracle",
    date: "2024",
    credentialUrl: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=E59C410C6DF2C5E71E424AE2D4D357F2B4009466355DDA30CCDF6A73F773D3FB",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credentialUrl: "https://www.credly.com/badges/05f32d86-6d6e-4265-b3be-ea55b4fb76be",
  },
  {
    title: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "2024",
    credentialUrl: "https://www.credly.com/badges/30511f82-3bfc-45a7-b40f-bf2cda85c0e7/linked_in_profile",
  },
  {
    title: "Introduction to Back-End Development",
    issuer: "Coursera",
    date: "2023",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/RR4UKZQRTB7B",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-32 px-8 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 tracking-tighter text-center">
            Honors & <span className="text-primary">Publications</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Publications & Hackathons */}
          <div className="flex flex-col gap-12">
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <h3 className="text-3xl font-heading font-bold">Research</h3>
                </div>
              </FadeIn>

              <div className="flex flex-col gap-6">
                {publications.map((pub, index) => (
                  <FadeIn key={index} delay={0.1 * index} direction="up" className="h-full">
                    <div className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors group h-full flex flex-col">
                      <div className="text-primary font-mono text-sm mb-3">{pub.date} • {pub.venue}</div>
                      <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors text-foreground">{pub.title}</h3>
                      <p className="text-gray-400 mb-6 flex-grow">{pub.description}</p>
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-foreground dark:text-white hover:text-primary transition-colors mt-auto">
                        Read Paper <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Hackathons */}
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-8">
                  <Trophy className="w-8 h-8 text-primary" />
                  <h3 className="text-3xl font-heading font-bold">Achievements</h3>
                </div>
              </FadeIn>

              <div className="flex flex-col gap-6">
                {hackathons.map((hackathon, index) => (
                  <FadeIn key={index} delay={0.1 * index} direction="up" className="h-full">
                    <div className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors group h-full flex flex-col">
                      <div className="text-primary font-mono text-sm mb-3">{hackathon.position}</div>
                      <h3 className="text-2xl font-heading font-bold mb-2 group-hover:text-primary transition-colors text-foreground">{hackathon.title}</h3>
                      <p className="text-gray-400 flex-grow">{hackathon.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-heading font-bold">Certifications</h3>
              </div>
            </FadeIn>

            <div className="flex flex-col gap-6">
              {certifications.map((cert, index) => (
                <FadeIn key={index} delay={0.3 + (0.1 * index)} direction="up" className="h-full">
                  <div className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors group h-full flex flex-col justify-center">
                    <div className="text-primary font-mono text-sm mb-2">{cert.date}</div>
                    <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors text-foreground">{cert.title}</h3>
                    <p className="text-gray-400 mb-6">{cert.issuer}</p>
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-foreground dark:text-white hover:text-primary transition-colors mt-auto">
                      View Credential <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
