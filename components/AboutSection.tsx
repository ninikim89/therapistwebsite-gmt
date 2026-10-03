import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          <div className="w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-sand-border bg-surface-container">
            <Image
              src="/maya-photo.png"
              alt="Dr. Maya Reynolds, PsyD"
              width={360}
              height={450}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <h2 className="font-serif text-3xl sm:text-4xl text-primary leading-tight mb-5">
            Meet Dr. Maya{' '}
            <span className="script-font text-eucalyptus-light">Reynolds</span>
          </h2>
          <div className="space-y-4 text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8">
            <p>
              Hello, I&rsquo;m Dr. Maya Reynolds. I earned my Doctorate in
              Clinical Psychology with advanced training in trauma neurobiology,
              psychodynamic depth therapy, and mind-body interventions. For over a
              decade, I have had the privilege of walking alongside adults who are
              accustomed to carrying everything on their own shoulders.
            </p>
            <p>
              True healing rarely happens through intellectual analysis alone.
              Lasting peace arrives when we help your nervous system feel secure,
              unravel early relationship narratives, and quiet the internal engine
              of relentless self-demands.
            </p>
            <p>
              Whether we meet in person in Santa Monica or via secure telehealth,
              you will find an attentive, steady, and warm environment where
              nothing you experience is considered too heavy.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sand-border text-xs">
            <div>
              <p className="font-serif text-sm font-medium text-primary">Doctorate</p>
              <p className="text-on-surface-variant mt-0.5">PsyD Clinical Psychology</p>
            </div>
            <div>
              <p className="font-serif text-sm font-medium text-primary">EMDRIA</p>
              <p className="text-on-surface-variant mt-0.5">Certified Practitioner</p>
            </div>
            <div>
              <p className="font-serif text-sm font-medium text-primary">Licensure</p>
              <p className="text-on-surface-variant mt-0.5">CA Board #PSY30248</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
