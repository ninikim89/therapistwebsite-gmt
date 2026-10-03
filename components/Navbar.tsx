'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#who-we-help', label: 'Who We Help' },
    { href: '#specialties', label: 'Specialties' },
    { href: '#methods', label: 'Methods' },
    { href: '#our-office', label: 'Our Office' },
    { href: '#faqs', label: 'FAQs' },
  ];

  return (
    <header className="sticky top-0 w-full z-40 bg-sand-canvas/85 backdrop-blur-md border-b border-sand-border/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span className="font-serif text-[20px] sm:text-[22px] font-medium tracking-tight text-primary leading-tight">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-eucalyptus-light font-medium -mt-0.5">
            Clinical Psychologist
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-on-surface-variant tracking-wide uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-1 px-5 py-2.5 rounded-full border border-primary text-primary text-xs tracking-wider uppercase font-medium hover:bg-primary hover:text-white transition-all"
          >
            Contact
          </a>
        </nav>

        <button
          className="lg:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-sand-canvas border-t border-sand-border">
          <nav className="flex flex-col px-6 py-4 gap-3 text-sm font-medium text-on-surface-variant">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="py-2 text-primary font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
