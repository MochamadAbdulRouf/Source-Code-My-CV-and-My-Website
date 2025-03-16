
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowUpRight, Github, Code, Server, Database, Cpu, Braces } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  return (
    <AnimatedSection id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Tech-themed background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Binary background */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute text-xs text-primary/50"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)` 
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
          
          {/* Circuit lines */}
          <div className="absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-primary/20 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-1/3 h-0.5 bg-primary/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1/3 h-0.5 bg-primary/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-0.5 h-1/3 bg-primary/20 rounded-full"></div>
          
          {/* Tech icons */}
          <div className="absolute top-20 right-20 w-32 h-32">
            <Braces className="w-full h-full text-primary opacity-10" />
          </div>
          <div className="absolute bottom-40 left-20 w-28 h-28">
            <Server className="w-full h-full text-primary opacity-10" />
          </div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24">
            <Database className="w-full h-full text-primary opacity-10" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40">
            <Cpu className="w-full h-full text-primary opacity-10" />
          </div>
          <div className="absolute top-3/4 right-1/4 w-36 h-36">
            <Code className="w-full h-full text-primary opacity-10" />
          </div>
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-600">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-purple-600">
            Showcasing my work in infrastructure design, DevOps automation, and system optimization.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center py-10">
          <div className="mb-8 text-center">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                <Code size={32} className="text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/20 animate-ping"></div>
            </div>
            
            <p className="text-2xl font-bold mb-4 text-purple-600">Coming Soon</p>
            <p className="text-muted-foreground max-w-md mx-auto text-purple-600">
              I'm currently working on some exciting projects that will be featured here soon.
            </p>
          </div>
          
          <a 
            href="https://github.com/MochamadAbdulRouf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg relative overflow-hidden group"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></span>
            
            <Github size={20} />
            <span className="relative z-10">View My GitHub</span>
            <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
