import Image from 'next/image';

const officeHighlights = [
  { title: 'Natural Daylight', desc: 'Ocean air & soft illumination' },
  { title: 'Acoustic Privacy', desc: 'Quiet, insulated suite' },
  { title: 'Santa Monica', desc: 'Accessible westside location' },
  { title: 'Telehealth Option', desc: 'Secure California-wide sessions' },
];

export default function OfficeSection() {
  return (
    <section
  id="our-office"
  className="w-full bg-sand-surface/60 backdrop-blur-md border-y border-sand-border/50 py-16 lg:py-24"
>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-primary">
            Our <span className="script-font text-eucalyptus-light">Office</span>
          </h2>
          <p className="text-xs sm:text-sm text-eucalyptus-light font-medium flex items-center justify-center gap-1.5 mt-3 mb-4">
            <span className="material-symbols-outlined text-base">location_on</span>
            123th Street 45 W, Santa Monica, CA 90401 &bull; Suite 300
          </p>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
            Therapy begins the moment you enter the room. Intentionally curated
            with warm coastal daylight, exposed architectural brick, natural linen
            textures, and acoustic privacy to allow your entire nervous system to
            exhale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="flex flex-col">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand-border bg-surface-container">
              <Image
                src="/office1.jpeg"
                alt="Sunlit Santa Monica therapy room with exposed brick and comfortable seating"
                width={1500}
                height={1125}
                className="w-full h-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="mt-3">
              <h4 className="font-serif text-base text-primary font-medium">
                Reading &amp; Reflection Nook
              </h4>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Natural oak flooring, therapeutic library, and relaxed
                conversational seating.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-sand-border bg-surface-container">
              <Image
                src="/office2.jpeg"
                alt="Private Santa Monica consulting room with natural light and bookshelves"
                width={1500}
                height={1125}
                className="w-full h-full object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="mt-3">
              <h4 className="font-serif text-base text-primary font-medium">
                Primary Consulting Room
              </h4>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Warm exposed brick, soaring windows with coastal light, and
                comfortable seating.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-on-surface-variant">
          {officeHighlights.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-3.5 rounded-xl border border-sand-border text-center"
            >
              <p className="font-medium text-primary">{item.title}</p>
              <p className="text-[11px] mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
