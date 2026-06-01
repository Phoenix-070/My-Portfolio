import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/shared/Providers";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { Navbar } from "@/components/shared/Navbar";
import { Loader } from "@/components/shared/Loader";
import { BackToTop } from "@/components/shared/BackToTop";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aravindh | AI Research Engineer",
  description: "Portfolio of Aravindh, an AI Research Engineer and Full Stack Developer specializing in Generative AI, Multimodal Deep Learning, and modern web applications.",
  keywords: ["AI Research Engineer", "Full Stack Developer", "Generative AI", "Machine Learning", "Next.js", "React", "Python"],
  authors: [{ name: "Aravindh" }],
  openGraph: {
    title: "Aravindh | AI Research Engineer",
    description: "Portfolio of Aravindh, specializing in Generative AI and modern web applications.",
    type: "website",
    url: "https://aravindh.dev", // Replace with actual domain later
    images: [
      {
        url: "/profile.jpeg",
        width: 800,
        height: 600,
        alt: "Aravindh - AI Research Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravindh | AI Research Engineer",
    description: "Portfolio of Aravindh, specializing in Generative AI and modern web applications.",
    images: ["/profile.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background text-foreground antialiased font-sans flex flex-col",
        inter.variable,
        spaceGrotesk.variable
      )}>
        <Providers>
          <Loader />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
