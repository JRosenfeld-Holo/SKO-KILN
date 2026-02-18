import EmailMockup from "./EmailMockup";

export default function PlaybookScaleUp() {
  return (
    <div className="flex flex-col justify-center h-full w-full max-w-6xl mx-auto px-12 slide-enter">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-hologram-lime text-xs font-bold uppercase tracking-[0.25em]">Playbook 03</div>
        <div className="h-px flex-1 bg-gradient-to-r from-hologram-lime/20 to-transparent" />
      </div>
      <h2 className="text-[2.75rem] font-black text-pure-white tracking-tight mb-1">
        The Scale-Up
      </h2>
      <p className="text-pure-white/40 text-sm mb-8">Sentiment / Intent Signal</p>

      <div className="grid grid-cols-[1fr_1.6fr] gap-7">
        {/* Left - Trigger & Directive */}
        <div className="space-y-4 stagger-children">
          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              <span className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.25em]">The Trigger</span>
            </div>
            <p className="text-pure-white/70 text-sm leading-relaxed">
              A previously quiet prospect suddenly views the pricing page, reviews an old ROI calculator, or adds a <span className="text-hologram-lime font-semibold">CFO/Procurement</span> title to the email thread.
            </p>
          </div>
          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
              <span className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.25em]">Engine Action</span>
            </div>
            <p className="text-pure-white/70 text-sm leading-relaxed">
              Immediately queues a highly-customized outreach draft.
            </p>
          </div>
          <div className="glass-card-bright rounded-xl p-5 glow-border">
            <div className="flex items-center gap-2 mb-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-hologram-lime"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              <span className="text-hologram-lime text-[10px] font-bold uppercase tracking-[0.25em]">AE Directive</span>
            </div>
            <p className="text-pure-white text-sm leading-relaxed font-medium">
              Elevate the conversation from technical feasibility to <span className="text-hologram-lime font-bold">commercial scalability</span>.
            </p>
          </div>
        </div>

        {/* Right - Email */}
        <EmailMockup signal="INTENT_PRICING" subject={<>Modeling the unit economics for <span className="text-hologram-lime">[Company Name]</span></>}>
          <p>Hi <span className="text-hologram-lime">[Name]</span>,</p>
          <p>Now that we&apos;ve proven out the technical side of the connectivity, I want to make sure your commercial team has exactly what they need to model out the unit economics for scaling this deployment.</p>
          <p>For the sub-$50K volume tier we discussed, I can actually structure a custom data pool that prevents overage penalties if a subset of your devices run hot on data one month.</p>
          <p>Do you have 10 minutes on <span className="text-hologram-lime">[Day]</span> to review a custom pricing schedule so you have accurate numbers for your internal budget approvals?</p>
          <p className="text-pure-white/40">Best,<br/><span className="text-hologram-lime/70">[AE Name]</span></p>
        </EmailMockup>
      </div>
    </div>
  );
}
