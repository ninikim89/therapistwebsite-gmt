'use client';
import { createPortal } from 'react-dom';

import { useState } from 'react';

export default function IntakeModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
  type="button"
  onClick={() => setIsOpen(true)}
  className="px-8 py-3.5 rounded-full bg-white text-primary text-sm font-semibold hover:bg-sand-canvas transition-all shadow-sm"
>
  Book Your 15-Minute Consultation
</button>
      {isOpen && typeof document !== 'undefined' &&
  createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-xl border border-sand-border relative"
        onClick={(e) => e.stopPropagation()}
      >
            <button
              aria-label="Close modal"
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="mb-5">
              <span className="text-xs uppercase tracking-widest text-secondary font-semibold">
                Introductory Connection
              </span>
              <h3 className="font-serif text-xl text-primary font-medium mt-1">
                Book Your Free Consultation
              </h3>
              <p className="text-xs text-on-surface-variant mt-1">
                Direct coordination with Dr. Maya Reynolds&rsquo; practice.
              </p>
            </div>

            <form
              className="space-y-3.5"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  'Thank you. Dr. Reynolds will be in touch within 24 business hours.'
                );
                setIsOpen(false);
              }}
            >
              <div>
                <label className="block text-xs uppercase tracking-wider text-primary font-medium mb-1">
                  Your Name
                </label>
                <input
                  className="w-full px-3.5 py-2 rounded-lg border border-sand-border text-sm focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="Elena Vance"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-primary font-medium mb-1">
                  Email
                </label>
                <input
                  className="w-full px-3.5 py-2 rounded-lg border border-sand-border text-sm focus:ring-1 focus:ring-primary focus:outline-none"
                  placeholder="elena@example.com"
                  required
                  type="email"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-primary font-medium mb-1">
                  Session Preference
                </label>
                <select className="w-full px-3.5 py-2 rounded-lg border border-sand-border text-sm focus:ring-1 focus:ring-primary focus:outline-none text-on-surface">
                  <option>Santa Monica In-Person Suite</option>
                  <option>Telehealth Virtual (California-wide)</option>
                  <option>Either / Flexible</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-primary font-medium mb-1">
                  Brief Note
                </label>
                <textarea
                  className="w-full px-3.5 py-2 rounded-lg border border-sand-border text-sm focus:ring-1 focus:ring-primary focus:outline-none resize-none"
                  placeholder="What brings you to therapy at this time?"
                  rows={2}
                />
              </div>
              <button
                className="w-full py-3 rounded-full bg-primary text-white text-xs uppercase tracking-wider font-medium hover:bg-primary-container transition-colors mt-2"
                type="submit"
              >
                Request Confidential Consultation
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
