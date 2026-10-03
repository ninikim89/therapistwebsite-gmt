'use client';

import { useEffect, useState } from 'react';

const breathSteps = [
  { text: 'Breathe in gently...', duration: 4000 },
  { text: 'Hold softly...', duration: 3000 },
  { text: 'Exhale slowly...', duration: 4500 },
  { text: 'Rest and pause...', duration: 2500 },
];

export default function BreathingPacer() {
  const [breathText, setBreathText] = useState(breathSteps[0].text);
  const [breathIdx, setBreathIdx] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const runPacer = () => {
      setBreathText(breathSteps[breathIdx].text);
      const dur = breathSteps[breathIdx].duration;
      const nextIdx = (breathIdx + 1) % breathSteps.length;
      setBreathIdx(nextIdx);
      timeout = setTimeout(runPacer, dur);
    };

    const initial = setTimeout(runPacer, breathSteps[0].duration);
    return () => {
      clearTimeout(timeout);
      clearTimeout(initial);
    };
  }, [breathIdx]);

  return (
    <aside
      aria-label="Calming Breath Pacer"
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(28,56,43,0.06)] border border-sand-border/80 transition-all duration-300 hover:bg-white"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-eucalyptus-light/60 animate-breathe-subtle" />
      </div>
      <span className="text-xs text-on-surface-variant font-medium tracking-wide">
        {breathText}
      </span>
    </aside>
  );
}
