'use client';

import IntakeModal from './IntakeModal';

export default function CtaSection() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 lg:px-10 py-16 lg:py-24"
>
      <div className="rounded-3xl bg-primary text-white p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-sm">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium mb-4 leading-tight">
            Take the first step toward lasting calm and grounding.
          </h2>
          <p className="text-sm sm:text-base text-[#B5D3C5] leading-relaxed mb-8">
            You don&rsquo;t have to carry anxiety, trauma, or burnout by
            yourself. Reach out today for a complimentary 15-minute consultation.
          </p>
          <IntakeModal />
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-xs text-[#B5D3C5]">
            <span>(310) 555-0194</span>
            <span>&bull;</span>
            <span>hello@mayareynoldspsyd.com</span>
            <span>&bull;</span>
            <span>Santa Monica, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
