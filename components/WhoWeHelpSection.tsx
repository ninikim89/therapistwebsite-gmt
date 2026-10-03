import Image from 'next/image';

const populations = [
  {
    title: 'High-Achievers & Professionals',
    description:
      'Untangle the exhausting cycle of tying personal worth to relentless productivity. We address high-functioning anxiety, imposter syndrome, and chronic workplace burnout.',
    image: '/who-high-achievers.jpg',
    sizes: '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw',
    alt: 'Professional woman in contemplative moment',
  },
  {
    title: 'Adults Navigating Trauma',
    description:
      'Reprocess distressing memories, relational injuries, and acute emotional shocks using EMDR and somatic therapy at a calm, supportive, and safe pace.',
    image:'/who-trauma.jpg',
    sizes: '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw',
    alt: 'Person in peaceful yoga pose finding inner calm',
  },
  {
    title: 'Overwhelmed Minds & Panic',
    description:
      'Step out of perpetual fight-or-flight. Learn gentle physiological tools to quiet ruminative loops, dissolve panic sensations, and restore restorative sleep.',
    image: '/who-anxiety.jpg',
    sizes: '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw',
    alt: 'Peaceful meditation and mindfulness practice',
  },
  {
    title: 'Creatives & Entrepreneurs',
    description:
      'Navigate the unique pressures of creative and entrepreneurial life—perfectionism, isolation, identity fusion with work, and the courage to stay vulnerable.',
    image: '/who-creatives.jpg',
    sizes: '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw',
    alt: 'Creative artistic workspace with natural light',
  },
];

export default function WhoWeHelpSection() {
  return (
    <section
  id="who-we-help"
  className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24"
>
      <div className="text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary">
          Who we <span className="script-font text-eucalyptus-light">help</span>
        </h2>
        <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl mx-auto">
          Therapeutic pathways sculpted for those ready to move past chronic
          symptom management into deep, lasting resilience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {populations.map((item, index) => (
          <div key={index} className="group">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-sm mb-4 border border-white/60">
              <Image
                src={item.image}
                alt={item.alt}
                width={600}
                height={750}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-serif text-xl text-primary font-medium mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center max-w-3xl mx-auto px-4">
        <p className="font-serif text-xl sm:text-2xl text-primary font-normal italic leading-relaxed">
          &ldquo;You deserve a place where your story is heard, valued, and
          understood. Nothing will be too heavy for us to carry together.&rdquo;
        </p>
      </div>
    </section>
  );
}
