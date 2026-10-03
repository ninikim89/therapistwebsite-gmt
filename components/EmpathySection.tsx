import Image from 'next/image';

export default function EmpathySection() {
  return (
    <section
      id="about"
      className="w-full bg-sand-surface/60 backdrop-blur-md border-y border-sand-border/50 py-16 lg:py-24"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] leading-snug text-primary mb-6">
          You&rsquo;ve spent years being the capable one. On the outside,
          everything looks handled. Inside, you&rsquo;re exhausted.
        </h2>
        <p className="font-serif text-lg sm:text-xl text-secondary italic mb-8">
          &ldquo;What you are feeling is real, valid, and deeply responsive to the
          right, tailored clinical support.&rdquo;
        </p>
        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-10">
          Many of the individuals who walk through the doors of my Santa Monica
          practice are thoughtful, deeply dedicated professionals, executives, and
          creatives who quietly bear the weight of persistent nervous system
          activation, overthinking, and fragmented sleep. When you are used to
          solving every obstacle with sheer willpower, admitting that your internal
          engine is burning out can feel disorienting.
        </p>

        {/* Calming Nature Image */}
        <div className="relative w-full max-w-3xl h-[280px] sm:h-[340px] mx-auto mb-10 overflow-hidden rounded-[28px] border border-white/70 shadow-sm">
  <Image
    src="/empathy-image.jpg"
    alt="Calming natural water"
    fill
    className="rounded-[28px] object-cover"
    sizes="(min-width: 768px) 768px, 100vw"
  />
</div>

        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          You might question whether your distress is &ldquo;serious
          enough&rdquo; or wonder why you cannot simply outthink your symptoms.
          You deserve a place where your story is heard, valued, and understood.
          Nothing will be too heavy for us to carry together.
        </p>
      </div>
    </section>
  );
}
