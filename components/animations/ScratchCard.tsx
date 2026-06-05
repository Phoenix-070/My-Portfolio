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
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Reset canvas state in case of re-render
    ctx.globalCompositeOperation = "source-over";
    canvas.style.opacity = "1";
    canvas.style.display = "block";
    canvas.style.transition = "none"; // Reset transition

    // Create a vibrant Google Pay style gradient for the scratch foil
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#1A73E8"); // Google Blue
    gradient.addColorStop(0.5, "#4285F4"); // Lighter Blue
    gradient.addColorStop(1, "#0D47A1"); // Dark Blue

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add decorative pattern (overlapping circles)
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 20 + 10,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // Add "SCRATCH" text overlay
    ctx.font = "bold 15px sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Add drop shadow for text
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;
    ctx.fillText("SCRATCH", canvas.width / 2, canvas.height / 2);

    // Reset shadow
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const getMousePos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const clientY = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      e.preventDefault();

      const { x, y } = getMousePos(e);

      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 24;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();

      lastX = x;
      lastY = y;
    };

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDrawing = true;
      const { x, y } = getMousePos(e);
      lastX = x;
      lastY = y;

      // Draw initial dot
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleMouseUp = () => {
      if (!isDrawing) return;
      isDrawing = false;

      // Check scratch completion percentage
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparentPixels = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] < 128) transparentPixels++;
      }

      const percentage = transparentPixels / (pixels.length / 4);
      if (percentage > 0.4) {
        // Auto clear when 40% scratched
        canvas.style.transition = "opacity 0.4s ease-out";
        canvas.style.opacity = "0";
        setTimeout(() => {
          canvas.style.display = "none";
        }, 400);
      }
    };

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
