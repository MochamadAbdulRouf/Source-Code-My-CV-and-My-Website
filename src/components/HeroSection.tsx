
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDownCircle, Download, Github, Instagram, Linkedin, Mail, Cpu, Zap, Wifi, Database, Cloud } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const HeroSection = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Floating animation for profile
    const profileElement = profileRef.current;
    if (!profileElement) return;
    
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const translateY = Math.sin(elapsed / 1000) * 8;
      const rotation = Math.sin(elapsed / 2000) * 2;
      
      if (profileElement) {
        profileElement.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const scrollToExperience = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Particle animation background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse animate-delay-500"></div>
        
        {/* Additional particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i} 
            className={`absolute rounded-full bg-primary/30 animate-pulse`}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
      
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:order-1 order-2">
          <div className="space-y-2">
            <p className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary animate-fade-in">
              DevOps Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight animate-fade-in animate-delay-100">
              Mochamad Abdul <span className="text-primary">Rouf</span>
            </h1>
            <p className="text-lg text-muted-foreground text-balance animate-fade-in animate-delay-200">
              Fresh Graduate specializing in DevOps, cloud infrastructure, and automation for modern applications.
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
              href="/mochamad-abdul-rouf-cv.pdf" 
              download
              className="px-6 py-3 rounded-lg border border-primary/20 bg-primary/5 text-primary font-medium transition-all hover:bg-primary/10 flex items-center gap-2"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
          
          <div className="flex items-center gap-4 pt-4 animate-fade-in animate-delay-400">
            <a
              href="https://github.com/MochamadAbdulRouf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-[#171515] hover:text-white transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mochamad-abdul-rouf-b09333338" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-[#0077B5] hover:text-white transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/mochabdlrouf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="mailto:mochamadabdulrouf1@gmail.com" 
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-white transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://mochabdulrouf.blogspot.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary text-foreground hover:bg-[#FF5722] hover:text-white transition-all hover:scale-110"
              aria-label="Blogger"
            >
              <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.976 24H2.026C0.908 24 0 23.092 0 21.976V2.026C0 0.908 0.908 0 2.026 0h19.95C23.092 0 24 0.908 24 2.026v19.95C24 23.092 23.092 24 21.976 24zM9.056 7.012h5.889v1.941h-5.89V7.012zm-5.889 2.665h11.78v1.55H3.167v-1.55zm0 3.45h11.78v1.55H3.167v-1.55zm10.834 3.445H3.167v1.553h10.834v-1.553z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="md:order-2 order-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-fade-in">
            {/* Profile image with tech-themed frame */}
            <div ref={profileRef} className="absolute inset-0 flex items-center justify-center transition-transform duration-300">
              {/* Animated tech rings */}
              <div className="absolute inset-0 w-full h-full animate-spin-slow opacity-10">
                <div className="absolute inset-0 border-4 border-dashed border-primary/40 rounded-full"></div>
              </div>
              <div className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] animate-spin-reverse-slow opacity-20">
                <div className="absolute inset-0 border-4 border-dotted border-blue-400/60 rounded-full"></div>
              </div>
              
              {/* Tech icons floating around */}
              <div className="absolute inset-0 w-full h-full">
                <Cpu className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-primary animate-pulse" />
                <Zap className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-6 w-6 text-yellow-400 animate-pulse" style={{animationDelay: '0.5s'}} />
                <Wifi className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 h-6 w-6 text-green-400 animate-pulse" style={{animationDelay: '1s'}} />
                <Database className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-purple-400 animate-pulse" style={{animationDelay: '1.5s'}} />
              </div>
              
              {/* Binary data stream effect */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-full opacity-5">
                <div className="absolute top-0 left-0 w-full animate-slide-down opacity-50" style={{animationDuration: '15s'}}>
                  {Array.from({length: 10}).map((_, i) => (
                    <div key={i} className="text-xs text-primary font-mono whitespace-nowrap">
                      {Array.from({length: 40}).map((_, j) => (
                        <span key={j}>{Math.round(Math.random())}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-50 blur-lg animate-pulse"></div>
              
              {/* The main profile image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-xl z-10">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="/lovable-uploads/a2810cf4-2333-45cd-ad74-d8e2ff212f04.png" 
                    alt="Mochamad Abdul Rouf" 
                    className="object-cover"
                  />
                  <AvatarFallback>MAR</AvatarFallback>
                </Avatar>
                
                {/* Inner glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
              </div>
            </div>
            
            {/* Technology-themed info panels */}
            <div className="absolute -bottom-6 -right-6 p-4 glass-panel rounded-lg animate-fade-in animate-delay-500 border border-primary/30 backdrop-blur-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Cloud className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium">Fresh Graduate</p>
              </div>
              <p className="text-xs text-muted-foreground">Cloud & Infrastructure</p>
            </div>
            
            <div className="absolute -top-6 -left-6 p-4 glass-panel rounded-lg animate-fade-in animate-delay-600 border border-primary/30 backdrop-blur-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-400" />
                <p className="text-sm font-medium">DevOps Enthusiast</p>
              </div>
              <p className="text-xs text-muted-foreground">CI/CD & Automation</p>
            </div>
            
            {/* Animated decorative elements */}
            <div className="absolute -z-10 w-full h-full animate-spin" style={{ animationDuration: '15s' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-primary/60"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-primary/60"></div>
              <div className="absolute left-0 top-1/2 w-2 h-2 rounded-full bg-primary/60"></div>
              <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-primary/60"></div>
            </div>
            
            {/* Circuit pattern overlay */}
            <div className="absolute inset-0 w-full h-full -z-20 opacity-10">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiI+CiAgPHBhdGggZD0iTTAgMGg4djhIMHptMjQgMGg4djhIMjR6bTI0IDBoOHY4SDQ4ek0wIDI0aDh2OEgwem0yNCAwaDh2OEgyNHptMjQgMGg4djhINDh6TTAgNDhoOHY4SDB6bTI0IDBoOHY4SDI0em0yNCAwaDh2OEg0OHoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iLjUiLz4KPC9zdmc+')] opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
