
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { BadgeCheck, Calendar, Building } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

// Define experience data
const experiences = [
  {
    title: "Senior DevOps Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Lead a team of DevOps engineers in implementing CI/CD pipelines and managing cloud infrastructure across multiple projects. Reduced deployment time by 60% and infrastructure costs by 25%.",
    achievements: [
      "Implemented Kubernetes clusters for high-availability applications",
      "Architected multi-region cloud infrastructure with automated failover",
      "Developed IaC templates using Terraform for consistent environment provisioning"
    ]
  },
  {
    title: "DevOps Engineer",
    company: "Cloud Solutions Ltd.",
    period: "2019 - 2021",
    description: "Responsible for automating deployment processes and maintaining cloud infrastructure for client applications. Implemented monitoring and alerting systems to ensure 99.9% uptime.",
    achievements: [
      "Migrated legacy applications to containerized environments",
      "Implemented CI/CD pipelines using Jenkins and GitHub Actions",
      "Automated backup and disaster recovery procedures"
    ]
  },
  {
    title: "Systems Administrator",
    company: "Data Systems Corp.",
    period: "2017 - 2019",
    description: "Managed on-premise and cloud servers, performed regular maintenance and troubleshooting. Supported development teams with infrastructure needs.",
    achievements: [
      "Led the transition from on-premise to cloud infrastructure",
      "Implemented configuration management using Ansible",
      "Designed monitoring solutions for critical systems"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <AnimatedSection id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-600">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-purple-600">
            My journey in the world of infrastructure and DevOps, where I've helped companies build 
            scalable and reliable systems.
          </p>
        </div>
        
        <div className="relative">
          {/* Main Timeline line - thicker and more visible */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-300 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
          
          {/* Tech decorative elements */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 -mt-4 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-[0_0_15px_rgba(168,85,247,0.7)] animate-pulse"></div>
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bottom-0 -mb-4 w-6 h-6 rounded-full bg-purple-600 border-4 border-white shadow-[0_0_15px_rgba(168,85,247,0.7)] animate-pulse"></div>
          
          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={cn(
                "relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start animate-fade-up",
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              )}
              style={{ animationDelay: `${index * 150}ms` }}>
                {/* Enhanced Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-purple-600 border-4 border-white shadow-[0_0_10px_rgba(168,85,247,0.7)] z-10"></div>
                
                {/* Timeline connectors - horizontal lines connecting dots to content */}
                <div className={cn(
                  "absolute top-2.5 hidden md:block h-px bg-purple-300 w-8",
                  index % 2 === 0 ? "right-[calc(50%-10px)] md:right-[calc(50%-10px)]" : "left-[calc(50%-10px)] md:left-[calc(50%-10px)]"
                )}></div>
                
                {/* Content positioning */}
                <div className={cn(
                  "md:contents",
                  index % 2 === 0 ? "" : "flex flex-col md:flex-row"
                )}>
                  {/* Date - Left side for even, right side for odd (on desktop) */}
                  <div className={cn(
                    "bg-white rounded-lg shadow-md p-6 border border-purple-100 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/40 relative z-10",
                    index % 2 === 0 
                      ? "md:mr-8 ml-8 md:ml-0" 
                      : "md:order-2 md:ml-8 ml-8 md:mr-0"
                  )}>
                    {/* Top separator for visual distinction */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-t-lg"></div>
                    
                    <div className="flex flex-col space-y-3 pt-2">
                      <span className="text-sm font-medium text-purple-600 flex items-center gap-2">
                        <Calendar size={14} className="inline text-purple-600" />
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-purple-700">{exp.title}</h3>
                      <p className="text-muted-foreground flex items-center gap-2 text-purple-600">
                        <Building size={14} className="inline text-purple-600" />
                        {exp.company}
                      </p>
                      <Separator className="bg-purple-200 my-2" />
                      <p className="text-gray-600 mt-2">{exp.description}</p>
                      
                      <div className="mt-4 space-y-2">
                        <p className="font-medium text-purple-700">Key Achievements:</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <BadgeCheck size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty div for layout */}
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
