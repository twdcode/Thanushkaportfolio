import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from '../ui/sheet';

interface HeaderProps {
  name: string;
  navigation: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export function Header({ name, navigation }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

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
      
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button 
              aria-label="Open menu"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-white/10">
            {/* Accessibility - Hidden title and description for screen readers */}
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Main navigation links for the portfolio site
            </SheetDescription>
            
            <nav className="flex flex-col gap-6 mt-12 px-8">
              {/* Navigation Links */}
              {navigation.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                  {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}