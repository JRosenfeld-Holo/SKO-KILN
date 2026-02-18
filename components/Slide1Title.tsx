"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Floating particles that drift upward
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => window.innerWidth;
    const H = () => window.innerHeight;

    // Create particles
    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; pulse: number; pulseSpeed: number;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * W(),
        y: Math.random() * H(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: -0.15 - Math.random() * 0.35,
        size: 1 + Math.random() * 2,
        opacity: 0.1 + Math.random() * 0.4,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());

      // Draw connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.06;
            ctx.strokeStyle = `rgba(191, 253, 17, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Wrap around
        if (p.y < -10) { p.y = H() + 10; p.x = Math.random() * W(); }
        if (p.x < -10) p.x = W() + 10;
        if (p.x > W() + 10) p.x = -10;

        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        gradient.addColorStop(0, `rgba(191, 253, 17, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, `rgba(191, 253, 17, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(191, 253, 17, ${currentOpacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}

export default function Slide1Title() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequenced reveal: 0=nothing, 1=glow, 2=headline, 3=line, 4=subtitle, 5=badges
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1100),
      setTimeout(() => setPhase(4), 1500),
      setTimeout(() => setPhase(5), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full px-8 overflow-hidden">
      {/* Particle field */}
      <ParticleField />

      {/* Expanding radial glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0 transition-all duration-[2000ms] ease-out ${
          phase >= 1
            ? "w-[900px] h-[900px] opacity-100"
            : "w-0 h-0 opacity-0"
        }`}
        style={{
          background: "radial-gradient(circle, rgba(191,253,17,0.06) 0%, rgba(191,253,17,0.02) 40%, transparent 70%)",
        }}
      />

      {/* Horizontal scan line that sweeps across */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 h-[1px] pointer-events-none z-[1] transition-all ease-out ${
          phase >= 2
            ? "left-0 right-0 opacity-0 duration-[1500ms]"
            : phase >= 1
            ? "left-[20%] right-[20%] opacity-100 duration-[800ms]"
            : "left-1/2 right-1/2 opacity-0 duration-0"
        }`}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(191,253,17,0.5), transparent)",
          boxShadow: "0 0 30px rgba(191,253,17,0.3)",
        }}
      />

      {/* Logos */}
      <div
        className={`relative z-10 flex items-center gap-6 mb-14 transition-all duration-[800ms] ease-out ${
          phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <Image src="/logo-lime.png" alt="Hologram" width={200} height={54} className="opacity-90 drop-shadow-[0_0_24px_rgba(191,253,17,0.2)]" priority />
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-pure-white/20 to-transparent" />
        <Image src="/the-kiln-logo.png" alt="The Kiln" width={150} height={42} className="brightness-0 invert opacity-70" priority />
      </div>

      {/* Main headline — letter-by-letter stagger */}
      <h1 className="relative z-10 mb-3 flex overflow-hidden">
        {"The Nudge System".split("").map((char, i) => (
          <span
            key={i}
            className={`inline-block text-[5.5rem] font-black tracking-[-0.03em] leading-[0.95] transition-all ease-out ${
              phase >= 2 ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-[40px] blur-[8px]"
            }`}
            style={{
              transitionDuration: "700ms",
              transitionDelay: `${i * 35}ms`,
              color: "#FFFFFF",
              textShadow: phase >= 3 ? "0 0 60px rgba(191,253,17,0.15)" : "none",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* Neon divider — draws in from center */}
      <div className="relative z-10 w-48 h-[2px] mb-7 overflow-hidden">
        <div
          className={`absolute inset-0 neon-line rounded-full transition-all duration-[800ms] ease-out origin-center ${
            phase >= 3 ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        />
      </div>

      {/* Subtitle */}
      <p
        className={`relative z-10 text-xl font-light tracking-wide mb-16 max-w-lg text-center transition-all duration-[800ms] ease-out ${
          phase >= 4 ? "opacity-50 translate-y-0 blur-0" : "opacity-0 translate-y-4 blur-[4px]"
        }`}
        style={{ transitionDelay: "100ms", color: "#FFFFFF" }}
      >
        AI-Powered Engagement for Sub-$50K Transactional Deals
      </p>

      {/* Meta badges */}
      <div
        className={`relative z-10 flex items-center gap-4 transition-all duration-[800ms] ease-out ${
          phase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="glass-card rounded-full px-5 py-2.5 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-pure-white/40" />
          <span className="text-pure-white/50 text-xs uppercase tracking-widest">Sponsor</span>
          <span className="text-pure-white/90 text-xs font-semibold uppercase tracking-widest">Jonathan</span>
        </div>
        <div className="glass-card rounded-full px-5 py-2.5 flex items-center gap-2">
          <div className="relative">
            <div className="w-1.5 h-1.5 rounded-full bg-hologram-lime" />
            <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-hologram-lime animate-signal-ping" />
          </div>
          <span className="text-pure-white/50 text-xs uppercase tracking-widest">Timeline</span>
          <span className="text-hologram-lime text-xs font-bold uppercase tracking-widest">120 Days</span>
        </div>
      </div>
    </div>
  );
}
