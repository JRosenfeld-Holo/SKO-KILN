import LaunchButton from "./LaunchButton";

export default function Slide8Done() {
  const checklist = [
    "100% of sub-$50K pipeline actively flowing through health scoring.",
    "Full system deployed across the entire AE team.",
    "90 days of post-rollout data proving ROI targets.",
    "At least 3 documented case studies of deals saved by a nudge.",
  ];

  const team = [
    { name: "Jonathan", role: "Sponsor" },
    { name: "VP Sales", role: "Adoption" },
    { name: "The Kiln", role: "Builders" },
    { name: "Stephen", role: "Implementation" },
    { name: "RevOps/Product", role: "Data" },
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full max-w-5xl mx-auto px-12 slide-enter">
      <div className="text-hologram-lime text-xs font-bold uppercase tracking-[0.25em] mb-4">Definition of Done</div>
      <h2 className="text-[3.5rem] font-black text-pure-white mb-2 tracking-tight leading-[1.05]">
        When Do We Call It Complete?
      </h2>
      <p className="text-pure-white/40 text-sm mb-8">Launch the system, then verify it below.</p>

      <div className="grid grid-cols-2 gap-10 items-start">
        {/* Left - Checklist & Team */}
        <div>
          <div className="space-y-3 mb-8 stagger-children">
            {checklist.map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-4 flex items-start gap-3 group hover:border-hologram-lime/15 transition-all duration-200">
                <div className="w-5 h-5 rounded-md border-2 border-hologram-lime/30 flex-shrink-0 mt-0.5 group-hover:border-hologram-lime/60 transition-colors duration-200 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime/0 group-hover:text-hologram-lime/40 transition-colors duration-200"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="text-pure-white/70 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-pure-white/5 pt-6">
            <div className="text-pure-white/30 text-[10px] uppercase tracking-[0.25em] mb-3">The Team</div>
            <div className="flex flex-wrap gap-2">
              {team.map((member, i) => (
                <div key={i} className="glass-card rounded-lg px-3 py-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-hologram-lime/40" />
                  <span className="text-pure-white/80 text-xs font-medium">{member.name}</span>
                  <span className="text-pure-white/30 text-xs">{member.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Launch Button */}
        <LaunchButton />
      </div>
    </div>
  );
}
