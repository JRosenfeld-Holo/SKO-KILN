import EmailMockup from "./EmailMockup";

export default function PlaybookGhostProtocol() {
  return (
    <div className="flex flex-col justify-center h-full w-full max-w-6xl mx-auto px-12 slide-enter">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-hologram-lime text-xs font-bold uppercase tracking-[0.25em]">Playbook 02</div>
        <div className="h-px flex-1 bg-gradient-to-r from-hologram-lime/20 to-transparent" />
      </div>
      <h2 className="text-[2.75rem] font-black text-pure-white tracking-tight mb-1">
        The Ghost Protocol
      </h2>
      <p className="text-pure-white/40 text-sm mb-8">Time-Based Signal</p>

      <div className="grid grid-cols-[1fr_1.6fr] gap-7">
        {/* Left - Trigger & Directive */}
        <div className="space-y-4 stagger-children">
          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.25em]">The Trigger</span>
            </div>
            <p className="text-pure-white/70 text-sm leading-relaxed">
              Deal is stalled in &ldquo;Technical Evaluation&rdquo; for <span className="text-hologram-lime font-semibold">&gt;14 days</span> with zero email replies or portal activity.
            </p>
          </div>
          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              <span className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.25em]">Engine Action</span>
            </div>
            <p className="text-pure-white/70 text-sm leading-relaxed">
              Drops a task in the AE&apos;s daily queue to send a &ldquo;Value-Add&rdquo; reactivation message.
            </p>
          </div>
          <div className="glass-card-bright rounded-xl p-5 glow-border">
            <div className="flex items-center gap-2 mb-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              <span className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.25em]">AE Directive</span>
            </div>
            <p className="text-pure-white text-sm leading-relaxed font-medium">
              Do not ask for an update. Assume they got busy or hit a technical wall. <span className="text-hologram-lime font-bold">Offer asymmetrical value</span> to lower the barrier to reply.
            </p>
          </div>
        </div>

        {/* Right - Email */}
        <EmailMockup signal="STALL_14D" subject="Unblocking your connectivity testing">
          <p>Hi <span className="text-hologram-lime">[Name]</span>,</p>
          <p>Usually, when things go quiet during the testing phase, it means your engineering team got pulled into a higher-priority sprint, or you hit a snag with the modem configuration.</p>
          <p>If it&apos;s the latter, we don&apos;t want you spinning your wheels. I&apos;ve attached a brief diagnostic checklist that solves 90% of the common APN and radio module hang-ups we see during initial hardware testing.</p>
          <p>Are you still targeting a <span className="text-hologram-lime">[Q3/Q4]</span> rollout for the fleet? If timelines have shifted, just give me a quick thumbs up or down so I can update my notes and get out of your inbox until you&apos;re ready.</p>
          <p className="text-pure-white/40">Best,<br/><span className="text-hologram-lime/70">[AE Name]</span></p>
        </EmailMockup>
      </div>
    </div>
  );
}
