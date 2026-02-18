"use client";

export default function Slide4Metrics() {
  const metrics = [
    {
      name: "Primary Conversion",
      baseline: "Deal conversion rate for <$50K opps.",
      target: "+12-18%",
      barWidth: 65,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    },
    {
      name: "Ghosting Reduction",
      baseline: "Deals going 30+ days without activity.",
      target: "-40-50%",
      barWidth: 85,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>,
    },
    {
      name: "Velocity",
      baseline: "Days from Stage 2 to Closed-Won.",
      target: "-20-25%",
      barWidth: 52,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8"/></svg>,
    },
    {
      name: "AE Efficiency",
      baseline: "Hours/week spent manually managing deals.",
      target: "-35-40%",
      barWidth: 75,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    },
    {
      name: "Nudge Efficacy",
      baseline: "Progression rate of nudged deals vs. control.",
      target: "2-3x",
      barWidth: 95,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-4"/></svg>,
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full max-w-[1100px] mx-auto px-12 slide-enter">
      <div className="text-hologram-lime text-xs font-bold uppercase tracking-[0.25em] mb-4">The Math</div>
      <h2 className="text-[3.5rem] font-black text-pure-white mb-2 tracking-tight leading-[1.05]">
        Success Metrics
      </h2>
      <p className="text-pure-white/40 text-sm mb-10">Quantitative targets for the Nudge System</p>

      <div className="space-y-3 stagger-children">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl p-5 group hover:border-hologram-lime/15 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-hologram-lime/[0.07] flex items-center justify-center flex-shrink-0 text-hologram-lime group-hover:bg-hologram-lime/[0.12] transition-colors duration-200">
                {m.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-pure-white font-bold text-[15px]">{m.name}</h3>
                  <span className="text-hologram-lime font-black text-2xl tracking-tight ml-4">
                    {m.target}
                  </span>
                </div>
                <p className="text-pure-white/35 text-sm mb-3">{m.baseline}</p>

                {/* Progress bar */}
                <div className="w-full h-[3px] rounded-full bg-pure-white/[0.04] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-hologram-lime/40 to-hologram-lime transition-all duration-1000 ease-out"
                    style={{ width: `${m.barWidth}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
