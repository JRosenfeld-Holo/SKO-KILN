import React from "react";

interface EmailMockupProps {
  signal: string;
  subject: React.ReactNode;
  children: React.ReactNode;
}

export default function EmailMockup({ signal, subject, children }: EmailMockupProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden shadow-2xl glow-border">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-pure-white/5 bg-deep-slate/50">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-pure-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-pure-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-pure-white/10" />
        </div>
        {/* Signal pill */}
        <div className="relative">
          <div className="bg-hologram-lime/10 border border-hologram-lime/30 text-hologram-lime text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-[0_0_16px_rgba(191,253,17,0.15)]">
            {signal}
          </div>
          {/* Ping animation */}
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2">
            <div className="w-1.5 h-1.5 rounded-full bg-hologram-lime" />
            <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-hologram-lime animate-signal-ping" />
          </div>
        </div>
      </div>

      {/* Subject line */}
      <div className="px-5 py-3 border-b border-pure-white/5">
        <p className="text-pure-white/30 text-[10px] uppercase tracking-[0.2em] mb-1">Subject</p>
        <p className="text-pure-white font-semibold text-sm">{subject}</p>
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-3 text-pure-white/75 text-[13px] leading-[1.7]">
        {children}
      </div>
    </div>
  );
}
