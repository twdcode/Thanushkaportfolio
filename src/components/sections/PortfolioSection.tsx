import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  slug: string;
  featured: boolean;
  layout: 'large' | 'small';
  tags: string[];
  title: string;
  shortDescription: string;
  highlights?: string[];
  image: {
    url: string;
    alt: string;
  };
  cta: {
    text: string;
    link: string;
  };
}

interface PortfolioSectionProps {
  sectionTitle: string;
  heading: string;
  subtitle: string;
  caseStudies: CaseStudy[];
}

export function PortfolioSection({
  sectionTitle,
  heading,
  subtitle,
  caseStudies,
}: PortfolioSectionProps) {
  const featuredStudy = caseStudies.find((cs) => cs.featured);
  const otherStudies = caseStudies.filter((cs) => !cs.featured);

  return (
    <section id="work" className="mb-40">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-xs uppercase tracking-[0.4em] text-cyan-400 mb-2">
            {sectionTitle}
          </h2>
          <h3 className="text-4xl font-syne font-bold">{heading}</h3>
        </div>
        <div className="vision-line flex-grow mx-10 hidden md:block" />
        <div className="text-gray-500 text-sm hidden md:block">{subtitle}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Featured Case Study */}
        {featuredStudy && (
          <div className="glass-card p-8 rounded-3xl group relative overflow-hidden md:col-span-2 flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 aspect-video bg-white/5 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent" />
              <img
                src={featuredStudy.image.url}
                alt={featuredStudy.image.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex gap-2 mb-4">
                {featuredStudy.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[10px] border border-white/20 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-3xl font-syne font-bold mb-4">
                {featuredStudy.title}
              </h4>
              <p className="text-gray-400 mb-6 font-light">
                {featuredStudy.shortDescription}
              </p>
              {featuredStudy.highlights && (
                <ul className="text-sm space-y-2 mb-8 text-gray-300">
                  {featuredStudy.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={featuredStudy.cta.link}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 group-hover:gap-4 transition-all"
              >
                {featuredStudy.cta.text} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Other Case Studies */}
        {otherStudies.map((study) => (
          <div key={study.id} className="glass-card p-6 rounded-3xl group">
            <div className="aspect-[4/3] bg-white/5 rounded-2xl mb-6 overflow-hidden">
              <img
                src={study.image.url}
                alt={study.image.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <h4 className="text-xl font-bold font-syne mb-2">{study.title}</h4>
            <p className="text-sm text-gray-400 mb-6 font-light">
              {study.shortDescription}
            </p>
            <a
              href={study.cta.link}
              className="text-xs font-bold text-cyan-400 uppercase tracking-tighter"
            >
              {study.cta.text} &nbsp;→
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
