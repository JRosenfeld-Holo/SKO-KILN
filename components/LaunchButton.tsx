"use client";
import React, { useState } from 'react';

export default function LaunchButton() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number; angle: number; velocity: number; size: number; delay: number}>>([]);

  const handleLaunch = () => {
    if (isLaunched) return;
    setIsLaunched(true);
    const newParticles = Array.from({ length: 60 }).map((_, i) => ({
      id: i, angle: Math.random() * 360, velocity: 80 + Math.random() * 250, size: 2 + Math.random() * 6, delay: Math.random() * 0.2,
    }));
    setParticles(newParticles);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[350px] w-full overflow-hidden">
      {isLaunched && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
          {particles.map((p) => (
            <div key={p.id} className="absolute rounded-sm"
              style={{
                width: `${p.size}px`, height: `${p.size}px`,
                background: p.id % 3 === 0 ? '#bffd11' : p.id % 3 === 1 ? '#FFFFFF' : '#bffd11',
                boxShadow: `0 0 ${p.size * 2}px ${p.id % 3 === 0 ? '#bffd11' : 'rgba(255,255,255,0.6)'}`,
                '--angle': `${p.angle}deg`, '--distance': `-${p.velocity}px`,
                animation: `shootOut 1.4s cubic-bezier(0.25, 1, 0.5, 1) ${p.delay}s forwards`, opacity: 0,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      <button onClick={handleLaunch}
        className={`relative z-10 rounded-2xl font-black tracking-[0.2em] transition-all duration-500 cursor-pointer
          ${isLaunched
            ? 'px-14 py-7 text-4xl bg-transparent border-2 border-hologram-lime text-hologram-lime shadow-[0_0_60px_rgba(191,253,17,0.2)] scale-105 cursor-default'
            : 'px-16 py-8 text-5xl bg-hologram-lime text-deep-slate animate-pulse-glow hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(191,253,17,0.5)]'
          }`}
      >
        {isLaunched ? 'ACTIVE' : 'GO'}
      </button>

      <div className={`relative z-10 mt-10 text-center transition-all duration-1000 transform ${isLaunched ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none absolute'}`}>
        <p className="text-hologram-lime font-mono text-xs tracking-[0.3em] uppercase mb-6">
          [ Execution Successful: 5 Deals Enrolled ]
        </p>
        <div className="glass-card-bright rounded-2xl p-6 max-w-md mx-auto text-left glow-border">
          <h4 className="text-pure-white text-base font-bold mb-3 border-b border-white/10 pb-2">Troubleshooting Cheat Sheet</h4>
          <ul className="text-pure-white/80 text-sm space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-hologram-lime mt-2 flex-shrink-0" />
              <span><strong>HeyReach profile missing?</strong><br/><span className="text-pure-white/50 text-xs">Execute manual override on the LinkedIn URL.</span></span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-hologram-lime mt-2 flex-shrink-0" />
              <span><strong>Gong summary failed?</strong><br/><span className="text-pure-white/50 text-xs">Refresh the API call in the Deal Radar dashboard.</span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
