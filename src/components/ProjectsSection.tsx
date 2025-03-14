
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowUpRight, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  return (
    <AnimatedSection id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in infrastructure design, DevOps automation, and system optimization.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center py-10">
          <div className="mb-8 text-center">
            <p className="text-2xl font-bold mb-4">Coming Soon</p>
            <p className="text-muted-foreground max-w-md mx-auto">
              I'm currently working on some exciting projects that will be featured here soon.
            </p>
          </div>
          
          <a 
            href="https://github.com/MochamadAbdulRouf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
          >
            <Github size={20} />
            View My GitHub
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
