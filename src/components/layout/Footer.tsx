import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

interface FooterProps {
  name: string;
  tagline: string;
  copyright: string;
  social: {
    linkedin?: string;
    github?: string;
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
        {social.github && (
          <a
            href={social.github}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
        {social.twitter && (
          <a
            href={social.twitter}
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5" />
          </a>
        )}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-gray-600">
        {copyright}
      </div>
    </footer>
  );
}
