export default function Slide6Roadmap() {
  const phases = [
    { num: "01", title: "Data Foundation", desc: "Define taxonomy, audit 2+ years of historical data, finalize tech stack.", icon: "M4 7V4h16v3M9 20h6M12 4v16" },
    { num: "02", title: "Workflow Design", desc: "Build decision trees, trigger logic, and AE playbooks.", icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" },
    { num: "03", title: "System Build", desc: "Configure CRM, build Clay enrichments, integrate Gong, deploy dashboards.", icon: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.49-8.49l2.83-2.83" },
    { num: "04", title: "The Pilot", desc: "30-day live test with 3-4 high-volume AEs. A/B test nudge types.", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8" },
    { num: "05", title: "Full Rollout", desc: "Team-wide enablement, daily operating rhythms established.", icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
    { num: "06", title: "Optimization", desc: "Expand signal sources (product telemetry) and refine the scoring model.", icon: "M12 20V10M18 20V4M6 20v-4" },
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full max-w-5xl mx-auto px-12 slide-enter">
      <div className="text-hologram-lime text-xs font-bold uppercase tracking-[0.25em] mb-4">Execution Roadmap</div>
      <h2 className="text-[3.5rem] font-black text-pure-white mb-10 tracking-tight leading-[1.05]">
        Phased Rollout
      </h2>

      <div className="grid grid-cols-3 gap-4 stagger-children">
        {phases.map((phase, i) => (
          <div key={i} className="glass-card rounded-2xl p-5 group hover:border-hologram-lime/20 transition-all duration-300 cursor-default relative overflow-hidden">
            {/* Background number */}
            <div className="absolute -top-2 -right-1 text-7xl font-black text-pure-white/[0.03] leading-none select-none pointer-events-none">
              {phase.num}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-hologram-lime/10 flex items-center justify-center group-hover:bg-hologram-lime/15 transition-colors duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d={phase.icon}/></svg>
                </div>
                <div className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.3em]">Phase {phase.num}</div>
              </div>
              <h3 className="text-lg font-bold text-pure-white mb-2">{phase.title}</h3>
              <p className="text-pure-white/50 text-sm leading-relaxed">{phase.desc}</p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-hologram-lime/0 via-hologram-lime/10 to-hologram-lime/0 group-hover:via-hologram-lime/30 transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
