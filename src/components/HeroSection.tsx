
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDownCircle, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:order-1 order-2">
          <div className="space-y-2">
            <p className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary animate-fade-in">
              DevOps Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight animate-fade-in animate-delay-100">
              Building Infrastructure <span className="text-primary">For The Future</span>
            </h1>
            <p className="text-lg text-muted-foreground text-balance animate-fade-in animate-delay-200">
              Specializing in automating, optimizing, and maintaining modern cloud infrastructure for scalable applications.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-2 animate-fade-in animate-delay-300">
            <button 
              onClick={scrollToExperience}
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium flex items-center gap-2 transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              View Experience
              <ArrowDownCircle size={18} />
            </button>
            
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 text-primary font-medium transition-all hover:bg-primary/10"
            >
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center gap-4 pt-4 animate-fade-in animate-delay-400">
            <a
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-gray-700 hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-gray-700 hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com" 
              className="p-2 rounded-full bg-secondary text-gray-700 hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="md:order-2 order-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-fade-in">
            {/* Profile image with decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-xl">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  {/* Replace with your profile image */}
                  <span className="text-gray-400 text-sm">Your Photo</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 glass-panel rounded-lg animate-fade-in animate-delay-500">
              <p className="text-sm font-medium">5+ Years Experience</p>
              <p className="text-xs text-muted-foreground">Cloud & Infrastructure</p>
            </div>
            <div className="absolute -top-6 -left-6 p-4 glass-panel rounded-lg animate-fade-in animate-delay-600">
              <p className="text-sm font-medium">DevOps Expert</p>
              <p className="text-xs text-muted-foreground">CI/CD & Automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
