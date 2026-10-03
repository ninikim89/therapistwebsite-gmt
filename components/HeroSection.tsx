import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 lg:pt-16 pb-16 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Large Image */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-white/60">
            <Image
              src="/maya-photo.png"
              alt="Dr. Maya Reynolds - Clinical Psychologist Santa Monica"
              width={600}
              height={800}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Center Text */}
        <div className="lg:col-span-5 order-1 lg:order-2 lg:pl-4">
          <p className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-on-surface-variant font-medium mb-6 lg:mb-8">
            In-Person in Santa Monica &amp; Telehealth Across CA
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] text-primary tracking-tight mb-4">
            Reclaim your calm from{' '}
            <span className="script-font text-eucalyptus-light">anxiety</span>,
            trauma, and burnout. rediscover steady ground to truly thrive.
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8 max-w-md">
            Evidence-based, depth-oriented psychotherapy for high-achieving adults,
            professionals, and creatives ready to move past chronic tension into
            deep restoration.
          </p>
          <a
            href="#contact"
            className="inline-block text-xs tracking-[0.15em] uppercase font-semibold text-primary border-b-2 border-primary pb-1 hover:text-eucalyptus-light hover:border-eucalyptus-light transition-colors"
          >
            Schedule Free Consultation
          </a>
        </div>

        {/* Right Small Image */}
        <div className="lg:col-span-2 order-3 hidden lg:block">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-white/60">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=533&fit=crop"
              alt="Santa Monica coastal calm"
              width={400}
              height={533}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
