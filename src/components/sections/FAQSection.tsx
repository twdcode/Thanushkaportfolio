import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading: string;
  faqs: FAQ[];
}

export function FAQSection({ heading, faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-40">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-syne font-bold mb-4">{heading}</h3>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
            >
              <span className="font-syne font-semibold pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`flex-shrink-0 w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 pb-6 text-gray-400 font-light leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
