import React, { useState, useEffect } from 'react';
import { HomepageTemplate } from './components/templates/HomepageTemplate';
import { CaseStudyTemplate } from './components/templates/CaseStudyTemplate';
import { AboutPage } from './components/pages/AboutPage';
import { ScrollToTop } from './components/utils/ScrollToTop';

// Import content files
import { portfolioContent } from './content/portfolio';
import { caseStudiesData } from './content/case-studies';
import { getCaseStudyBySlug } from './content/all-case-studies';
import { aboutData } from './content/about-me';

function App() {
  const [currentPage, setCurrentPage] = useState<{
    type: 'home' | 'case-study' | 'about';
    slug?: string;
  }>({ type: 'home' });

  // Simple hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash.startsWith('#/case-study/')) {
        const slug = hash.replace('#/case-study/', '');
        setCurrentPage({ type: 'case-study', slug });
      } else if (hash === '#/about') {
        setCurrentPage({ type: 'about' });
      } else {
        setCurrentPage({ type: 'home' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <ScrollToTop currentPage={currentPage} />
      
      {/* Render homepage */}
      {currentPage.type === 'home' && (
        <HomepageTemplate
          content={portfolioContent}
          caseStudies={caseStudiesData.caseStudies}
        />
      )}

      {/* Render about page */}
      {currentPage.type === 'about' && (
        <AboutPage
          aboutData={aboutData}
          siteSettings={portfolioContent.siteSettings}
          navigation={portfolioContent.navigation.links}
          social={portfolioContent.social}
        />
      )}

      {/* Render case study */}
      {currentPage.type === 'case-study' && currentPage.slug && (() => {
        const caseStudyData = getCaseStudyBySlug(currentPage.slug);
        
        // Handle 404 - case study not found
        if (!caseStudyData) {
          return (
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
                <p className="text-gray-400 mb-8">The case study you're looking for doesn't exist.</p>
                <a href="#/" className="text-cyan-400 hover:underline">
                  Return to Homepage
                </a>
              </div>
            </div>
          );
        }

        return (
          <CaseStudyTemplate
            caseStudy={caseStudyData}
            siteSettings={portfolioContent.siteSettings}
            navigation={portfolioContent.navigation.links}
            social={portfolioContent.social}
          />
        );
      })()}
    </>
  );
}

export default App;