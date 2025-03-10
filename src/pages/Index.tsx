
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'DevOps Pro | Professional CV';
    
    // Initialize any scripts or event listeners here
    const handleScroll = () => {
      const scrollTriggerElements = document.querySelectorAll('.scroll-trigger');
      
      scrollTriggerElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();
        
        // If element is in viewport
        if (elementPosition.top < window.innerHeight * 0.8 && elementPosition.bottom > 0) {
          element.classList.add('scroll-appear');
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
