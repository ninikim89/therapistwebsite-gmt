const methods = [
  {
    title: 'EMDR Therapy (Eye Movement Desensitization & Reprocessing)',
    description:
      'A research-validated method that aids the brain in digesting stuck traumatic memories via bilateral stimulation, taking away the painful emotional sting of the past.',
  },
  {
    title: 'Cognitive-Behavioral & Psychodynamic Therapy',
    description:
      'Examining the roots of perfectionistic tendencies, high self-criticism, and relationship patterns while learning flexible, compassionate mental habits for day-to-day life.',
  },
  {
    title: 'Somatic & Nervous System Down-Regulation',
    description:
      'Because chronic stress and distress live in the nervous system as muscular bracing and shallow breathing, we use gentle polyvagal somatic tools to bring true physiological ease.',
  },
];

export default function MethodsSection() {
  return (
    <section id="methods" className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <h2 className="font-serif text-3xl sm:text-4xl text-primary leading-tight mb-5">
            Our Therapeutic{' '}
            <span className="script-font text-eucalyptus-light">Methods</span>
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            My clients carry deep responsibilities; it is rare for them to feel
            held. Our work is never cookie-cutter. Together, we combine depth
            psychodynamic insight with cutting-edge somatic and EMDR modalities
            to establish genuine internal safety.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-5">
          {methods.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-7 rounded-2xl border border-sand-border shadow-sm"
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
