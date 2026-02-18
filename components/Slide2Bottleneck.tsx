export default function Slide2Bottleneck() {
  const symptoms = [
    {
      title: "Ghosting",
      highlight: true,
      subtitle: "Epidemic",
      desc: "Prospects go dark mid-evaluation with no systematic re-engagement trigger.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>,
    },
    {
      title: "Forecasting",
      highlight: false,
      subtitle: "Blindness",
      desc: "Impossible to predict which small deals will close vs. die quietly.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>,
    },
    {
      title: "Time",
      highlight: false,
      subtitle: "Misallocation",
      desc: "AEs spend equal effort on deals with wildly different propensities to close.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full max-w-5xl mx-auto px-12 slide-enter">
      <div className="text-hologram-lime text-xs font-bold uppercase tracking-[0.25em] mb-4">Current State</div>
      <h2 className="text-[3.5rem] font-black text-pure-white mb-3 tracking-tight leading-[1.05]">
        The Operational Bottleneck
      </h2>
      <p className="text-lg text-pure-white/50 mb-12 max-w-2xl leading-relaxed">
        Sub-$50K opportunities consume disproportionate AE time but yield inconsistent conversion.
      </p>

      <div className="grid grid-cols-3 gap-5 stagger-children">
        {symptoms.map((s, i) => (
          <div
            key={i}
            className={`glass-card rounded-2xl p-6 group hover:border-hologram-lime/20 transition-all duration-300 cursor-default ${
              s.highlight ? "glow-border" : ""
            }`}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-hologram-lime/10 flex items-center justify-center">
                {s.icon}
              </div>
              <span className="text-pure-white/10 text-5xl font-black">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="text-2xl font-bold text-pure-white mb-1 leading-tight">
              {s.highlight ? (
                <>The <span className="text-hologram-lime">{s.title}</span> {s.subtitle}</>
              ) : (
                <>{s.title} {s.subtitle}</>
              )}
            </h3>
            <p className="text-pure-white/50 text-sm leading-relaxed mt-3">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
