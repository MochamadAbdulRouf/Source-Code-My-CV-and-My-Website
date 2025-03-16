
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { BadgeCheck, Calendar, Building, Server, Database, Code, Cpu, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define experience data
const experiences = [
  {
    title: "Senior DevOps Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    icon: <Server className="w-5 h-5 text-primary" />,
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
    icon: <Code className="w-5 h-5 text-primary" />,
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
    icon: <Database className="w-5 h-5 text-primary" />,
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
    <AnimatedSection id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Tech-themed background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-40 h-40 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-16 h-16 border border-primary rotate-45"></div>
        <div className="absolute top-1/4 right-1/2 w-32 h-32">
          <Cpu className="w-full h-full text-primary opacity-10" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40">
          <Terminal className="w-full h-full text-primary opacity-10" />
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">
            <span className="text-purple-600">Professional Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-purple-600">
            My journey in the world of infrastructure and DevOps, where I've helped companies build 
            scalable and reliable systems.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - with glowing effect */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/30 via-primary to-primary/30 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.5)]"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={cn(
                "relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start",
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              )}>
                {/* Timeline pulse dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-lg shadow-primary/30 z-10 animate-pulse"></div>
                
                {/* Content positioning */}
                <div className={cn(
                  "md:contents",
                  index % 2 === 0 ? "" : "flex flex-col md:flex-row"
                )}>
                  {/* Date - Left side for even, right side for odd (on desktop) */}
                  <div className={cn(
                    "bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 hover:-translate-y-1",
                    index % 2 === 0 
                      ? "md:mr-8 ml-8 md:ml-0" 
                      : "md:order-2 md:ml-8 ml-8 md:mr-0"
                  )}>
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {exp.icon}
                        </div>
                        <span className="text-sm font-medium text-primary flex items-center gap-2">
                          <Calendar size={14} className="inline" />
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-purple-600">{exp.title}</h3>
                      <p className="text-muted-foreground flex items-center gap-2 text-purple-600">
                        <Building size={14} className="inline" />
                        {exp.company}
                      </p>
                      <p className="text-gray-600 mt-2">{exp.description}</p>
                      
                      <div className="mt-4 space-y-2">
                        <p className="font-medium text-gray-800">Key Achievements:</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <BadgeCheck size={18} className="text-primary flex-shrink-0 mt-0.5" />
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
