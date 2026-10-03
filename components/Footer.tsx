export default function Footer() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#who-we-help', label: 'Who We Help' },
    { href: '#specialties', label: 'Specialties' },
    { href: '#methods', label: 'Methods' },
    { href: '#our-office', label: 'Our Office' },
    { href: '#faqs', label: 'FAQs' },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-transparent via-sand-surface/50 to-sand-surface/80 pt-14 pb-10 text-on-surface-variant text-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <p className="font-serif text-lg text-primary font-medium mb-1">
              Dr. Maya Reynolds, PsyD
            </p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-eucalyptus-light font-medium mb-3">
              Clinical Psychologist
            </p>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4 max-w-sm">
              A dedicated psychological practice providing psychodynamic, somatic,
              and EMDR therapy for high-achieving adults in Santa Monica and
              across California.
            </p>
            <p className="text-xs text-secondary font-medium">
              CA Board of Psychology &bull; Lic. #PSY30248
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-medium text-primary text-xs uppercase tracking-wider mb-3">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-medium text-primary text-xs uppercase tracking-wider mb-3">
              Location &amp; Contact
            </p>
            <p className="text-xs leading-relaxed text-on-surface-variant mb-3">
              123th Street 45 W, Suite 300
              <br />
              Santa Monica, CA 90401
            </p>
            <p className="text-xs text-on-surface-variant">
              Email: hello@mayareynoldspsyd.com
              <br />
              Phone: (310) 555-0194
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-sand-border/60 text-[11px] text-on-surface-variant/80 flex flex-col sm:flex-row justify-between gap-4">
          <p>
            Disclaimer: Information on this website is for educational purposes
            and does not create a therapist-client relationship. If you are
            experiencing an acute mental health emergency, please call 988 or go
            to the nearest emergency room.
          </p>
          <p className="shrink-0">&copy; 2026 Dr. Maya Reynolds, PsyD.</p>
        </div>
      </div>
    </footer>
  );
}
