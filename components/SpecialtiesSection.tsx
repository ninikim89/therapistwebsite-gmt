const specialties = [
  {
    title: 'Trauma & PTSD',
    description: 'EMDR and memory reprocessing for deep trauma resolution and nervous system healing.',
  },
  {
    title: 'Anxiety & Panic',
    description: 'Neurobiological grounding techniques to dissolve chronic anxiety and panic responses.',
  },
  {
    title: 'Executive Burnout',
    description: 'Sustainable boundary work and identity decoupling for high-performing professionals.',
  },
  {
    title: 'Perfectionism',
    description: 'Inner critic unburdening and self-compassion cultivation for chronic overachievers.',
  },
  {
    title: 'Somatic Regulation',
    description: 'Vagal toning, breath work, and polyvagal-informed tools for physiological ease.',
  },
  {
    title: 'Attachment Patterns',
    description: 'Rewriting relationship scripts and building secure, fulfilling interpersonal connections.',
  },
];

export default function SpecialtiesSection() {
  return (
    <section
  id="specialties"
  className="scroll-mt-20 w-full bg-sand-surface/60 backdrop-blur-md border-y border-sand-border/50 py-16 lg:py-24"
>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-primary">
            Our <span className="script-font text-eucalyptus-light">Specialties</span>
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl mx-auto">
            Integrative psychological treatment tailored to address the root
            mechanisms of emotional distress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-sand-border shadow-sm"
            >
              <h3 className="font-serif text-lg text-primary font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
