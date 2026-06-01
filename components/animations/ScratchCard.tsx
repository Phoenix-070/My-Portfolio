"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface ScratchCardProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

export function ScratchCard({ children, width = 160, height = 64 }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);

    // Create a sleek violet/purple gradient for the scratch foil
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#8b5cf6"); // violet-500
    gradient.addColorStop(1, "#6d28d9"); // violet-700
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add "SCRATCH" text overlay
    ctx.font = "bold 14px monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SCRATCH ME", canvas.width / 2, canvas.height / 2);

    let isDrawing = false;

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      e.preventDefault();
      
      const rect = canvas.getBoundingClientRect();
      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleMouseDown = () => { isDrawing = true; };
    const handleMouseUp = () => { isDrawing = false; };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", scratch);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseUp);
    
    canvas.addEventListener("touchstart", handleMouseDown);
    canvas.addEventListener("touchmove", scratch, { passive: false });
    canvas.addEventListener("touchend", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", scratch);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseUp);
      canvas.removeEventListener("touchstart", handleMouseDown);
      canvas.removeEventListener("touchmove", scratch);
      canvas.removeEventListener("touchend", handleMouseUp);
    };
  }, [theme]);

  return (
    <div className="relative inline-block overflow-hidden rounded-2xl cursor-crosshair select-none shadow-lg shadow-black/10 hover:shadow-primary/20 transition-shadow" style={{ width, height }}>
      {/* Revealed content underneath */}
      <div className="absolute inset-0 flex items-center justify-center bg-card border border-border">
        {children}
      </div>
      {/* Canvas overlay */}
      <canvas 
        ref={canvasRef} 
        width={width} 
        height={height} 
        className="absolute inset-0 z-10"
      />
    </div>
  );
}
