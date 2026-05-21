"use client";

import { useEffect, useRef } from "react";

const CodeAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Code characters to display
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*(){}[]<>/\\|;:.,?!'`~+-=_";
    const fontSize = 24;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Monochrome palette - white/gray shades
    const colors = [
      "rgba(255, 255, 255, 0.9)",
      "rgba(229, 229, 229, 0.85)",
      "rgba(163, 163, 163, 0.9)",
      "rgba(212, 212, 212, 0.8)",
      "rgba(255, 255, 255, 0.7)",
    ];

    const draw = () => {
      // Fade effect
      ctx.fillStyle = "rgba(10, 10, 10, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Random color from palette
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full opacity-70"
      style={{ filter: "blur(0.2px)" }}
    />
  );
};

export default CodeAnimation;
