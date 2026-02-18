import EmailMockup from "./EmailMockup";

export default function PlaybookActivationStrike() {
  return (
    <div className="flex flex-col justify-center h-full w-full max-w-6xl mx-auto px-12 slide-enter">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-hologram-lime text-xs font-bold uppercase tracking-[0.25em]">Playbook 01</div>
        <div className="h-px flex-1 bg-gradient-to-r from-hologram-lime/20 to-transparent" />
      </div>
      <h2 className="text-[2.75rem] font-black text-pure-white tracking-tight mb-1">
        The Activation Strike
      </h2>
      <p className="text-pure-white/40 text-sm mb-8">Behavioral Signal</p>

      <div className="grid grid-cols-[1fr_1.6fr] gap-7">
        {/* Left - Trigger & Directive */}
        <div className="space-y-4 stagger-children">
          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8"/></svg>
              <span className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.25em]">The Trigger</span>
            </div>
            <p className="text-pure-white/70 text-sm leading-relaxed">
              Product telemetry indicates the prospect just activated their test SIMs or transmitted their first KB of data.
            </p>
          </div>
          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              <span className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.25em]">Engine Action</span>
            </div>
            <p className="text-pure-white/70 text-sm leading-relaxed">
              Flags the AE in Slack with a high-priority nudge.
            </p>
          </div>
          <div className="glass-card-bright rounded-xl p-5 glow-border">
            <div className="flex items-center gap-2 mb-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              <span className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.25em]">AE Directive</span>
            </div>
            <p className="text-pure-white text-sm leading-relaxed font-medium">
              Do not wait. Strike while they are actively at their desk testing the hardware. Send this email <span className="text-hologram-lime font-bold">within 2 hours</span> of the signal.
            </p>
          </div>
        </div>

        {/* Right - Email */}
        <EmailMockup signal="SIM_ACTIVATED" subject="Solid ping / Next steps on your test devices">
          <p>Hi <span className="text-hologram-lime">[Name]</span>,</p>
          <p>Looks like you just got the test SIMs online and pinged the network—great to see the deployment moving forward.</p>
          <p>While you&apos;re actively looking at the telemetry, I wanted to quickly surface two things that usually help hardware teams at this exact stage:</p>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-hologram-lime/50 mt-2 flex-shrink-0" />Our latency benchmarks for <span className="text-hologram-lime">[Region/Country]</span>.</li>
            <li className="flex items-start gap-2"><div className="w-1 h-1 rounded-full bg-hologram-lime/50 mt-2 flex-shrink-0" />A quick-start guide on routing your device data directly to your AWS/Azure environment via our API.</li>
          </ul>
          <p>If you run into any firmware or payload hurdles this week, let me know and I can pull one of our Solutions Engineers into a quick sync. Otherwise, how are the initial connection times looking on your end?</p>
          <p className="text-pure-white/40">Best,<br/><span className="text-hologram-lime/70">[AE Name]</span></p>
        </EmailMockup>
      </div>
    </div>
  );
}
