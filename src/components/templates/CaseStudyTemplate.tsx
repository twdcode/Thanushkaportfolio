import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { AmbientOrbs } from '../layout/AmbientOrbs';
import { ArrowLeft } from 'lucide-react';

interface CaseStudySection {
  type: 'text' | 'image' | 'two-column' | 'outcomes' | 'business-challenge' | 'team-leadership' | 'research-findings' | 'design-decisions' | 'reflection';
  heading?: string;
  content?: string;
  url?: string;
  alt?: string;
  caption?: string;
  columns?: Array<{
    heading: string;
    items: string[];
  }>;
  metrics?: Array<{
    value: string;
    label: string;
    description: string;
  }>;
  context?: string;
  businessRisk?: string;
  goalStatement?: string;
  myRole?: string;
  squad?: Array<{
    role: string;
    description: string;
  }>;
  cultureTransformation?: string;
  methodology?: string;
  findings?: Array<{
    title: string;
    description: string;
    strategicShift: string;
  }>;
  solutionOverview?: string;
  decisions?: Array<{
    title: string;
    context: string;
    decision: string;
    imageUrl?: string;
    imageAlt?: string;
  }>;
  businessImpact?: string[];
  culturalImpact?: string[];
  strategicLearning?: string;
  leadershipGrowth?: string;
}

interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  topic?: string;
  client: string;
  role: string;
  duration: string;
  year: string;
  tags: string[];
  executiveSummary?: string;
  hero: {
    image: string;
    alt: string;
  };
  overview: {
    challenge: string;
    solution: string;
  };
  sections: CaseStudySection[];
  nextProject?: {
    title: string;
    slug: string;
  };
}

interface CaseStudyTemplateProps {
  caseStudy: CaseStudyData;
  siteSettings: {
    name: string;
    tagline: string;
    copyright: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export function CaseStudyTemplate({
  caseStudy,
  siteSettings,
  navigation,
  social,
}: CaseStudyTemplateProps) {
  return (
    <div className="min-h-screen">
      <AmbientOrbs />

      <div className="container mx-auto px-6 py-12 max-w-6xl relative z-10">
        <Header name={siteSettings.name} navigation={navigation} />

        {/* Back Button */}
        <a
          href="#/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </a>

        {/* Hero Section */}
        <div className="mb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] border border-white/20 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {caseStudy.topic && (
            <div className="text-cyan-400 mb-4">
              <span className="text-xs uppercase tracking-widest">Topic: </span>
              <span>{caseStudy.topic}</span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-syne font-bold mb-4">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl">
            {caseStudy.subtitle}
          </p>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xs text-cyan-400 uppercase tracking-widest mb-2">
                Duration
              </div>
              <div className="text-sm">{caseStudy.duration}</div>
            </div>
            <div>
              <div className="text-xs text-cyan-400 uppercase tracking-widest mb-2">
                My Role
              </div>
              <div className="text-sm">{caseStudy.role}</div>
            </div>
            <div>
              <div className="text-xs text-cyan-400 uppercase tracking-widest mb-2">
                Client
              </div>
              <div className="text-sm">{caseStudy.client}</div>
            </div>
            <div>
              <div className="text-xs text-cyan-400 uppercase tracking-widest mb-2">
                Year
              </div>
              <div className="text-sm">{caseStudy.year}</div>
            </div>
          </div>

          {/* Executive Summary */}
          {caseStudy.executiveSummary && (
            <div className="glass-card p-8 rounded-3xl mb-12">
              <h2 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                Executive Summary
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy.executiveSummary}
              </p>
            </div>
          )}

          {/* Hero Image */}
          <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10">
            <img
              src={caseStudy.hero.image}
              alt={caseStudy.hero.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Overview */}
        <div className="mb-20 glass-card p-8 md:p-12 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                The Challenge
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy.overview.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                The Solution
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {caseStudy.overview.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-20 mb-20">
          {caseStudy.sections.map((section, index) => (
            <div key={index}>
              {section.type === 'text' && (
                <div className="max-w-4xl">
                  <h2 className="text-3xl font-syne font-bold mb-6">
                    {section.heading}
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              )}

              {section.type === 'image' && (
                <div>
                  <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={section.url}
                      alt={section.alt}
                      className="w-full h-auto"
                    />
                  </div>
                  {section.caption && (
                    <p className="text-sm text-gray-500 text-center mt-4 italic">
                      {section.caption}
                    </p>
                  )}
                </div>
              )}

              {section.type === 'two-column' && (
                <div className="grid md:grid-cols-2 gap-12">
                  {section.columns?.map((column, colIndex) => (
                    <div key={colIndex} className="glass-card p-8 rounded-3xl">
                      <h3 className="text-xl font-bold font-syne mb-6">
                        {column.heading}
                      </h3>
                      <ul className="space-y-3">
                        {column.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <span className="text-cyan-400 mt-1">✓</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.type === 'outcomes' && (
                <div className="glass-card p-12 rounded-3xl">
                  <h2 className="text-3xl font-syne font-bold mb-12 text-center">
                    {section.heading}
                  </h2>
                  <div className="grid md:grid-cols-4 gap-8">
                    {section.metrics?.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-5xl font-bold font-syne gradient-text mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">
                          {metric.label}
                        </div>
                        <p className="text-sm text-gray-400">
                          {metric.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === 'business-challenge' && (
                <div>
                  <h2 className="text-3xl font-syne font-bold mb-8">
                    {section.heading}
                  </h2>
                  
                  <div className="glass-card p-8 rounded-3xl mb-6">
                    <h3 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                      Context
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {section.context}
                    </p>
                  </div>

                  <div className="glass-card p-8 rounded-3xl mb-6">
                    <h3 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                      The Business Risk
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {section.businessRisk}
                    </p>
                  </div>

                  <div className="glass-card p-8 rounded-3xl">
                    <h3 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                      Goal Statement
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {section.goalStatement}
                    </p>
                  </div>
                </div>
              )}

              {section.type === 'team-leadership' && (
                <div>
                  <h2 className="text-3xl font-syne font-bold mb-8">
                    {section.heading}
                  </h2>

                  <div className="glass-card p-8 rounded-3xl mb-6">
                    <h3 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                      My Role
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {section.myRole}
                    </p>
                  </div>

                  <div className="glass-card p-8 rounded-3xl mb-6">
                    <h3 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                      The Squad
                    </h3>
                    <ul className="space-y-4">
                      {section.squad?.map((member, memberIndex) => (
                        <li key={memberIndex} className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1 flex-shrink-0">→</span>
                          <div>
                            <span className="font-semibold text-white">{member.role}:</span>{' '}
                            <span className="text-gray-300">{member.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-card p-8 rounded-3xl">
                    <h3 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                      Culture Transformation
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {section.cultureTransformation}
                    </p>
                  </div>
                </div>
              )}

              {section.type === 'research-findings' && (
                <div>
                  <h2 className="text-3xl font-syne font-bold mb-8">
                    {section.heading}
                  </h2>

                  {section.methodology && (
                    <div className="glass-card p-8 rounded-3xl mb-8">
                      <h3 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                        Methodology
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {section.methodology}
                      </p>
                    </div>
                  )}

                  <div className="space-y-6">
                    {section.findings?.map((finding, findingIndex) => (
                      <div key={findingIndex} className="glass-card p-8 rounded-3xl">
                        <div className="flex items-start gap-4">
                          <span className="text-cyan-400 font-bold text-lg flex-shrink-0">
                            Finding {String(findingIndex + 1).padStart(2, '0')}
                          </span>
                          <div className="flex-1">
                            <h4 className="font-bold text-white mb-2">"{finding.title}"</h4>
                            <p className="text-gray-300 mb-4">{finding.description}</p>
                            <div className="border-l-2 border-cyan-400 pl-4">
                              <span className="text-xs text-cyan-400 uppercase tracking-widest">Strategic Shift:</span>
                              <p className="text-gray-400 mt-1">{finding.strategicShift}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === 'design-decisions' && (
                <div>
                  <h2 className="text-3xl font-syne font-bold mb-8">
                    {section.heading}
                  </h2>

                  {section.solutionOverview && (
                    <p className="text-gray-300 leading-relaxed text-lg mb-12">
                      {section.solutionOverview}
                    </p>
                  )}

                  <div className="space-y-12">
                    {section.decisions?.map((decision, decisionIndex) => (
                      <div key={decisionIndex} className="glass-card p-8 rounded-3xl">
                        <h3 className="text-xl font-bold font-syne text-cyan-400 mb-4">
                          {decision.title}
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Context:</span>
                            <p className="text-gray-300 mt-1">{decision.context}</p>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 uppercase tracking-widest">Decision:</span>
                            <p className="text-white mt-1 font-semibold">{decision.decision}</p>
                          </div>
                          {decision.imageUrl && (
                            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
                              <img
                                src={decision.imageUrl}
                                alt={decision.imageAlt}
                                className="w-full h-auto"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {section.type === 'reflection' && (
                <div>
                  <h2 className="text-3xl font-syne font-bold mb-8 text-center">
                    {section.heading}
                  </h2>

                  {section.strategicLearning && (
                    <div className="glass-card p-8 rounded-3xl mb-6">
                      <h3 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                        Strategic Learning
                      </h3>
                      <p className="text-gray-300 leading-relaxed italic text-lg">
                        {section.strategicLearning}
                      </p>
                    </div>
                  )}

                  {section.leadershipGrowth && (
                    <div className="glass-card p-8 rounded-3xl">
                      <h3 className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
                        Leadership Growth
                      </h3>
                      <p className="text-gray-300 leading-relaxed italic text-lg">
                        {section.leadershipGrowth}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Next Project */}
        {caseStudy.nextProject && (
          <div className="glass-card p-12 rounded-3xl text-center mb-20">
            <div className="text-xs text-cyan-400 uppercase tracking-widest mb-4">
              Next Project
            </div>
            <h3 className="text-2xl font-bold font-syne mb-6">
              {caseStudy.nextProject.title}
            </h3>
            <a
              href={`#/case-study/${caseStudy.nextProject.slug}`}
              className="inline-block px-8 py-4 bg-white text-black text-xs uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all duration-300 font-bold"
            >
              View Project
            </a>
          </div>
        )}

        <Footer
          name={siteSettings.name}
          tagline={siteSettings.tagline}
          copyright={siteSettings.copyright}
          social={social}
        />
      </div>
    </div>
  );
}