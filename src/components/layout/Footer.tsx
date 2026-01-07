import React from 'react';
import { Linkedin } from 'lucide-react';

// Custom Medium icon component
const MediumIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

interface FooterProps {
  name: string;
  tagline: string;
  copyright: string;
  social: {
    linkedin?: string;
    medium?: string;
    twitter?: string;
  };
}

export function Footer({ name, tagline, copyright, social }: FooterProps) {
  return (
    <footer className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
      <div>
        <div className="font-syne gradient-text">
          {name}
        </div>
        <p className="text-sm text-gray-500 mt-2">{tagline}</p>
      </div>
      <div className="flex gap-6">
        {social.linkedin && (
          <a
            href={social.linkedin}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {social.medium && (
          <a
            href={social.medium}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MediumIcon className="w-5 h-5" />
          </a>
        )}
        {social.twitter && (
          <a
            href={social.twitter}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="w-5 h-5" />
          </a>
        )}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-gray-600">
        {copyright}
      </div>
    </footer>
  );
}