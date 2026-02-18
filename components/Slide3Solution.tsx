export default function Slide3Solution() {
  return (
    <div className="flex items-center justify-center h-full w-full max-w-6xl mx-auto px-12 slide-enter">
      <div className="grid grid-cols-2 gap-10 w-full items-center">
        {/* Left - The Solution */}
        <div>
          <div className="text-hologram-lime text-xs font-bold uppercase tracking-[0.25em] mb-4">The Solution</div>
          <h2 className="text-[2.75rem] font-black text-pure-white mb-8 tracking-tight leading-[1.1]">
            Passive Deal Management
            <span className="block text-hologram-lime mt-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 mb-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              Active Progression
            </span>
          </h2>
          <div className="space-y-4">
            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-hologram-lime/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              </div>
              <div>
                <p className="text-pure-white font-semibold text-sm mb-1">Mechanism</p>
                <p className="text-pure-white/60 text-sm leading-relaxed">An AI-powered engagement engine leveraging big data signals (Gong, Clay, Salesforce).</p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-5 flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-hologram-lime/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
              </div>
              <div>
                <p className="text-pure-white font-semibold text-sm mb-1">Output</p>
                <p className="text-pure-white/60 text-sm leading-relaxed">Tells AEs exactly when and how to intervene.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - The Urgency */}
        <div className="glass-card-bright rounded-2xl p-8 glow-border">
          <div className="text-hologram-lime text-xs font-bold uppercase tracking-[0.25em] mb-8 flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-hologram-lime" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-hologram-lime animate-signal-ping" />
            </div>
            The Urgency
          </div>
          <div className="space-y-7">
            {[
              { stat: "30-40%", desc: "of bookings come from transactional volume — revenue at scale." },
              { stat: "$25K vs $250K", desc: "Every hour on a stalled small deal is an hour lost on a whale." },
              { stat: "15-20%", desc: "reduction in reactivation probability per week of delay. In IoT, ghosting often means a shelved project." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-hologram-lime text-3xl font-black leading-none min-w-[140px] tracking-tight">
                  {item.stat}
                </div>
                <p className="text-pure-white/60 text-sm leading-relaxed pt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
