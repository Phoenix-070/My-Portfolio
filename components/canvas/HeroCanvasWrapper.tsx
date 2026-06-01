"use client";

import dynamic from "next/dynamic";

export const HeroCanvasWrapper = dynamic(
  () => import("@/components/canvas/HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);
