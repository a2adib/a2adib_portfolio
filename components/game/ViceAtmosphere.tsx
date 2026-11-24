"use client";

import { useEffect, useRef } from "react";
import { useGame } from "./GameContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

export default function ViceAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { overdriveMode } = useGame();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let animId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width * 0.5, y: height * 0.35, active: false };

    const colors = ["#ff2e93", "#00f0ff", "#ffd166", "#ff6b4a"];
    const count = overdriveMode ? 52 : 28;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (overdriveMode ? 0.8 : 0.35),
      vy: -(0.18 + Math.random() * (overdriveMode ? 0.65 : 0.32)),
      size: 1.2 + Math.random() * 2.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.25 + Math.random() * 0.5,
    }));

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let t = 0;
    const render = () => {
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Mouse-reactive neon spotlight
      if (mouse.active) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, overdriveMode ? 360 : 260);
        glow.addColorStop(0, overdriveMode ? "rgba(0, 240, 255, 0.14)" : "rgba(255, 46, 147, 0.09)");
        glow.addColorStop(0.5, "rgba(123, 44, 191, 0.04)");
        glow.addColorStop(1, "rgba(8, 6, 14, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      // Sweeping Vice City helicopter searchlight beam from top-right
      const sweepAngle = Math.sin(t * 0.8) * 0.45 + 2.35;
      const originX = width * 0.88;
      const originY = -20;
      const beamLen = Math.max(width, height) * 0.9;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(
        originX + Math.cos(sweepAngle - 0.08) * beamLen,
        originY + Math.sin(sweepAngle - 0.08) * beamLen
      );
      ctx.lineTo(
        originX + Math.cos(sweepAngle + 0.08) * beamLen,
        originY + Math.sin(sweepAngle + 0.08) * beamLen
      );
      ctx.closePath();
      const beamGrad = ctx.createLinearGradient(
        originX,
        originY,
        originX + Math.cos(sweepAngle) * beamLen,
        originY + Math.sin(sweepAngle) * beamLen
      );
      beamGrad.addColorStop(0, overdriveMode ? "rgba(0, 240, 255, 0.12)" : "rgba(0, 240, 255, 0.055)");
      beamGrad.addColorStop(1, "rgba(0, 240, 255, 0)");
      ctx.fillStyle = beamGrad;
      ctx.fill();
      ctx.restore();

      // Floating neon Vice embers
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [overdriveMode]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
