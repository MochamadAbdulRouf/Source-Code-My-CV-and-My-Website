
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold text-primary">DevOps.Pro</p>
            <p className="text-muted-foreground mt-2">Building scalable infrastructure for the future.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mb-6 md:mb-0 text-center md:text-left">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h3>
              <ul className="space-y-3">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-secondary shadow-sm border border-border text-primary hover:bg-primary hover:text-white transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} DevOps Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
