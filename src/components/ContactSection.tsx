
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 shadow-xl">
            <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 bg-white/80 dark:bg-gray-800/50 p-4 rounded-xl transition-transform hover:translate-y-[-4px] shadow-md hover:shadow-lg">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-purple-600">Email</h4>
                  <a href="mailto:mochamadabdulrouf1@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                    mochamadabdulrouf1@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white/80 dark:bg-gray-800/50 p-4 rounded-xl transition-transform hover:translate-y-[-4px] shadow-md hover:shadow-lg">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-purple-600">Phone</h4>
                  <a href="tel:+6285704427944" className="text-gray-600 hover:text-primary transition-colors">
                    +62 857 0442 7944
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-white/80 dark:bg-gray-800/50 p-4 rounded-xl transition-transform hover:translate-y-[-4px] shadow-md hover:shadow-lg">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1 text-purple-600">Location</h4>
                  <p className="text-gray-600">Blitar, Jawa Timur, Indonesia</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-medium mb-6 text-center">Follow Me</h4>
              <div className="flex justify-center space-x-5">
                <a 
                  href="https://github.com/MochamadAbdulRouf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                  aria-label="GitHub"
                >
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-[#171515] group-hover:text-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-6">
                    <Github className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/mochamad-abdul-rouf-b09333338" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                  aria-label="LinkedIn"
                >
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-[#0077B5] group-hover:text-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-6">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                </a>
                
                <a 
                  href="https://www.instagram.com/mochabdlrouf?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                  aria-label="Instagram"
                >
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-gradient-to-br group-hover:from-[#f9ce34] group-hover:via-[#ee2a7b] group-hover:to-[#6228d7] group-hover:text-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-6">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
                </a>
                
                <a 
                  href="https://mochabdulrouf.blogspot.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                  aria-label="Blogger"
                >
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-[#FF5722] group-hover:text-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:rotate-6">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21.976 24H2.026C0.908 24 0 23.092 0 21.976V2.026C0 0.908 0.908 0 2.026 0h19.95C23.092 0 24 0.908 24 2.026v19.95C24 23.092 23.092 24 21.976 24zM9.056 7.012h5.889v1.941h-5.89V7.012zm-5.889 2.665h11.78v1.55H3.167v-1.55zm0 3.45h11.78v1.55H3.167v-1.55zm10.834 3.445H3.167v1.553h10.834v-1.553z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Blogger</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl flex flex-col justify-center">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-semibold">Let's Work Together</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                I'm currently looking for new opportunities. If you're interested in working together or have a project in mind, please feel free to reach out!
              </p>
              <div className="animate-bounce mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-primary">
                  <path d="M12 19V5"></path>
                  <path d="M5 12l7 7 7-7"></path>
                </svg>
              </div>
              <div className="mt-8">
                <a 
                  href="mailto:mochamadabdulrouf1@gmail.com" 
                  className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium transition-all hover:translate-y-[-4px] hover:shadow-lg text-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
