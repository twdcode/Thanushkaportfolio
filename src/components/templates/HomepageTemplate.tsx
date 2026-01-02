import React from 'react';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { AmbientOrbs } from '../layout/AmbientOrbs';
import { HeroSection } from '../sections/HeroSection';
import { PortfolioSection } from '../sections/PortfolioSection';
import { FAQSection } from '../sections/FAQSection';
import { JournalSection } from '../sections/JournalSection';

interface HomepageTemplateProps {
  content: any;
  caseStudies: any[];
}

export function HomepageTemplate({ content, caseStudies }: HomepageTemplateProps) {
  return (
    <div className="min-h-screen">
      <AmbientOrbs />
      
      <div className="container mx-auto px-6 py-12 max-w-6xl relative z-10">
        <Header 
          name={content.siteSettings.name}
          navigation={content.navigation.links}
        />

        <HeroSection
          badge={content.hero.badge}
          headline={content.hero.headline}
          description={content.hero.description}
          cta={content.hero.cta}
        />

        <PortfolioSection
          sectionTitle={content.portfolio.sectionTitle}
          heading={content.portfolio.heading}
          subtitle={content.portfolio.subtitle}
          caseStudies={caseStudies}
        />

        <FAQSection
          heading={content.faq.heading}
          faqs={content.faq.faqs}
        />

        <JournalSection
          heading={content.journal.heading}
          articles={content.journal.articles}
        />

        <Footer
          name={content.siteSettings.name}
          tagline={content.siteSettings.tagline}
          copyright={content.siteSettings.copyright}
          social={content.social}
        />
      </div>
    </div>
  );
}