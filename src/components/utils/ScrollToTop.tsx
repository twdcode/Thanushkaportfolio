import { useEffect } from 'react';

interface ScrollToTopProps {
  currentPage: {
    type: string;
    slug?: string;
  };
}

export function ScrollToTop({ currentPage }: ScrollToTopProps) {
  useEffect(() => {
    // Scroll to top whenever the page changes
    window.scrollTo(0, 0);
  }, [currentPage.type, currentPage.slug]);

  return null;
}
