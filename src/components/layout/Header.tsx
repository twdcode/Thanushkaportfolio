import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  name: string;
  navigation: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export function Header({ name, navigation }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-24">
      <div className="text-2xl font-extrabold tracking-tighter gradient-text font-syne">
        {name}
      </div>
      <nav className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
        {navigation.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-cyan-400 transition-colors"
            {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="md:hidden">
        <Menu className="w-6 h-6" />
      </div>
    </header>
  );
}