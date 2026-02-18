"use client";
import React, { useState } from 'react';

export default function ToneSlider() {
  const [toneValue, setToneValue] = useState(50);

  const getDraftText = (value: number) => {
    if (value < 33) {
      return "Dear [Prospect], I am writing to formally follow up on our previous correspondence regarding your pipeline efficiency. Please let me know if you have time for a brief consultation.";
    } else if (value < 66) {
      return "Hi [Prospect], Following up on our last conversation about your pipeline. Let me know if you're open to a quick sync this week to review the numbers.";
    } else {
      return "Hey [Prospect], just bubbling this up! Still thinking about that pipeline bottleneck we discussed. Let's chat when you have a sec.";
    }
  };

  const getToneLabel = (value: number) => {
    if (value < 33) return "Corporate";
    if (value < 66) return "Professional";
    return "Conversational";
  };

  return (
    <div className="w-full max-w-2xl glass-card-bright rounded-2xl p-7 glow-border">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-pure-white">The Turing Test: AI Tone Calibration</h3>
        <span className="text-hologram-lime text-xs font-bold uppercase tracking-widest bg-hologram-lime/10 px-3 py-1 rounded-full">
          {getToneLabel(toneValue)}
        </span>
      </div>
      <div className="mb-6 relative">
        <div className="flex justify-between text-[10px] text-pure-white/40 mb-3 uppercase tracking-[0.2em] font-semibold">
          <span>Formal</span>
          <span>Casual</span>
        </div>
        <input
          type="range" min="0" max="100" value={toneValue}
          onChange={(e) => setToneValue(Number(e.target.value))}
          className="w-full cursor-pointer"
        />
      </div>
      <div className="p-5 bg-deep-slate/80 rounded-xl relative overflow-hidden border border-pure-white/5">
        <div className="absolute top-0 left-0 w-[2px] h-full neon-line-vertical" />
        <p className="text-pure-white/90 leading-relaxed text-sm transition-all duration-300 pl-4">&ldquo;{getDraftText(toneValue)}&rdquo;</p>
      </div>
    </div>
  );
}
