import React from 'react';

interface HeroSectionProps {
  badge: string;
  headline: {
    line1: string;
    line2: string;
    line3: string;
  };
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

export function HeroSection({ badge, headline, description, cta }: HeroSectionProps) {
  // Helper function to parse text with special tags
  const parseText = (text: string) => {
    const parts = text.split(/(<gradient>|<\/gradient>|<italic>|<\/italic>|<underline>|<\/underline>)/);
    let isGradient = false;
    let isItalic = false;
    let isUnderline = false;

    return parts.map((part, index) => {
      if (part === '<gradient>') {
        isGradient = true;
        return null;
      }
      if (part === '</gradient>') {
        isGradient = false;
        return null;
      }
      if (part === '<italic>') {
        isItalic = true;
        return null;
      }
      if (part === '</italic>') {
        isItalic = false;
        return null;
      }
      if (part === '<underline>') {
        isUnderline = true;
        return null;
      }
      if (part === '</underline>') {
        isUnderline = false;
        return null;
      }

      if (isGradient) {
        return (
          <span key={index} className="gradient-text">
            {part}
          </span>
        );
      }
      if (isItalic) {
        return (
          <span key={index} className="italic font-light opacity-80">
            {part}
          </span>
        );
      }
      if (isUnderline) {
        return (
          <span key={index} className="relative">
            {part}
            <span className="absolute bottom-2 left-0 w-full h-1 bg-cyan-500/30 -z-10" />
          </span>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section className="mb-40 text-center md:text-left">
      <div className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.3em] bg-white/5 border border-white/10 rounded-full text-cyan-400">
        {badge}
      </div>
      <h1 className="text-5xl md:text-8xl font-syne font-extrabold leading-[1.1] mb-8">
        {parseText(headline.line1)} <br />
        {parseText(headline.line2)} <br />
        {parseText(headline.line3)}
      </h1>
      <p className="max-w-xl text-gray-400 leading-relaxed font-light mb-10 text-lg">
        {description}
      </p>
      <div className="flex gap-4 justify-center md:justify-start">
        <a
          href={cta.href}
          className="px-8 py-4 bg-white text-black text-xs uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all duration-300 font-bold"
        >
          {cta.text}
        </a>
      </div>
    </section>
  );
}
