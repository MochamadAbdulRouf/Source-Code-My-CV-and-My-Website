
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out',
        scrolled ? 'backdrop-blur-md bg-white/80 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-lg font-semibold text-primary transition-all duration-300 hover:opacity-80"
        >
          DevOps.Pro
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
              }}
              className={cn(
                'text-sm font-medium transition-all duration-300 relative',
                activeSection === item.toLowerCase()
                  ? 'text-primary'
                  : 'text-gray-600 hover:text-primary'
              )}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-100 origin-left transition-transform duration-300" />
              )}
            </a>
          ))}
        </nav>
        
        <button className="md:hidden flex items-center">
          <span className="sr-only">Open menu</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
