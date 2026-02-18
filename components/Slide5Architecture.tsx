import ToneSlider from "./ToneSlider";

export default function Slide5Architecture() {
  const cards = [
    {
      num: "01",
      label: "Trigger",
      title: "The Signals",
      items: ["14 days in stage", "SIMs activated, API calls made", "Gong detects hesitation"],
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
    },
    {
      num: "02",
      label: "Score",
      title: "The Brain",
      items: ['Calculates "Deal Health Score"', "Prioritizes top 5-7 interventions per AE daily"],
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8Z"/><circle cx="12" cy="10" r="3"/></svg>,
      featured: true,
    },
    {
      num: "03",
      label: "Playbook",
      title: "The Hands",
      items: ["Prescribes exact action (Call, email, loop in SE)", "Automates backend (Update score, Slack alert)"],
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M14 9V5a3 3 0 0 0-6 0v4"/><path d="M18 8h2a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a1 1 0 0 1 1-1h2"/></svg>,
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full max-w-6xl mx-auto px-12 slide-enter">
      <div className="text-hologram-lime text-xs font-bold uppercase tracking-[0.25em] mb-4">Signal to Action</div>
      <h2 className="text-[3.5rem] font-black text-pure-white mb-10 tracking-tight leading-[1.05]">
        The Nudge Logic
      </h2>

      {/* Architecture Pipeline */}
      <div className="relative flex items-stretch gap-0 mb-10">
        {cards.map((card, i) => (
          <div key={i} className="contents">
            {/* Card */}
            <div className={`flex-1 rounded-2xl p-6 z-10 transition-all duration-300 ${
              card.featured ? "glass-card-bright glow-border" : "glass-card"
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-hologram-lime/10 flex items-center justify-center">
                  {card.icon}
                </div>
                <div className="text-hologram-lime/20 text-3xl font-black">{card.num}</div>
              </div>
              <div className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{card.label}</div>
              <h3 className="text-xl font-bold text-pure-white mb-3">{card.title}</h3>
              <ul className="text-pure-white/50 text-sm space-y-2">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-hologram-lime/50 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connector */}
            {i < cards.length - 1 && (
              <div className="flex items-center z-20 -mx-2">
                <div className="w-4 h-[2px] bg-gradient-to-r from-hologram-lime/30 to-hologram-lime/60" />
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-hologram-lime shadow-[0_0_12px_rgba(191,253,17,0.6)]" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-hologram-lime animate-signal-ping" />
                </div>
                <div className="w-4 h-[2px] bg-gradient-to-r from-hologram-lime/60 to-hologram-lime/30" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tone Slider */}
      <div className="flex justify-center">
        <ToneSlider />
      </div>
    </div>
  );
}
