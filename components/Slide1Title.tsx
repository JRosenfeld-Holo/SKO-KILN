"use client";
import Image from "next/image";

export default function Slide1Title() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-full px-8 slide-enter">
      {/* Large ambient glow behind title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-hologram-lime/[0.03] blur-[120px] pointer-events-none" />

      {/* Logos */}
      <div className="relative flex items-center gap-6 mb-16">
        <Image src="/logo-lime.png" alt="Hologram" width={200} height={54} className="opacity-90 drop-shadow-[0_0_20px_rgba(191,253,17,0.15)]" priority />
        <div className="w-px h-8 bg-gradient-to-b from-transparent via-pure-white/20 to-transparent" />
        <Image src="/the-kiln-logo.png" alt="The Kiln" width={150} height={42} className="brightness-0 invert opacity-70" priority />
      </div>

      {/* Main headline */}
      <h1 className="relative text-[5.5rem] font-black tracking-[-0.03em] text-pure-white mb-3 leading-[0.95]">
        The Nudge System
      </h1>

      {/* Neon divider */}
      <div className="relative w-40 h-[2px] neon-line rounded-full mb-6" />

      {/* Subtitle */}
      <p className="text-xl text-pure-white/50 font-light tracking-wide mb-16 max-w-lg text-center">
        AI-Powered Engagement for Sub-$50K Transactional Deals
      </p>

      {/* Meta badges */}
      <div className="flex items-center gap-4">
        <div className="glass-card rounded-full px-5 py-2 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-pure-white/40" />
          <span className="text-pure-white/50 text-xs uppercase tracking-widest">Sponsor</span>
          <span className="text-pure-white/90 text-xs font-semibold uppercase tracking-widest">Jonathan</span>
        </div>
        <div className="glass-card rounded-full px-5 py-2 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-hologram-lime animate-pulse-glow" />
          <span className="text-pure-white/50 text-xs uppercase tracking-widest">Timeline</span>
          <span className="text-hologram-lime text-xs font-bold uppercase tracking-widest">120 Days</span>
        </div>
      </div>
    </div>
  );
}
