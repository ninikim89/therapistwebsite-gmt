'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Do you offer in-person sessions in Santa Monica?',
    answer:
      'Yes. In-person appointments take place in our private consulting suite located at 123th Street 45 W in Santa Monica, CA. The space is intentionally tranquil, peaceful, and soundproofed. Secure telehealth sessions are also available for clients located across California.',
  },
  {
    question: 'How does EMDR work for anxiety and trauma?',
    answer:
      'EMDR utilizes gentle bilateral sensory inputs (such as eye movements or tactile taps) to help your brain reprocess memories that were frozen in a state of high activation. This allows distressing memories to be recalled without the painful physiological reaction.',
  },
  {
    question: 'What is your approach to burnout and perfectionism?',
    answer:
      'We work to decouple your inherent sense of worth from your output. Together, we unpack the fears driving overwork, establish clear somatic boundaries, and cultivate genuine self-compassion while maintaining your natural strengths.',
  },
  {
    question: 'Do you take insurance or provide superbills?',
    answer:
      'Dr. Reynolds is an out-of-network provider. We provide detailed monthly Superbills containing all required clinical and diagnostic codes, which you can submit directly to your PPO insurance provider for potential out-of-network reimbursement.',
  },
  {
    question: 'How do I schedule an initial consultation?',
    answer:
      "You can book a complimentary 15-minute phone or video consultation. This call is a gentle, no-pressure opportunity to share what you're experiencing, ask questions, and see if working together feels like a natural fit.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
  id="faqs"
  className="w-full bg-sand-surface/60 backdrop-blur-md border-y border-sand-border/50 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-on-surface-variant mt-2">
            Helpful details about working with Dr. Reynolds.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-sand-border"
            >
              <button
                className="w-full flex items-center justify-between text-left focus:outline-none"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-serif text-base text-primary font-medium">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-secondary transform transition-transform text-xl ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3 text-sm text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
