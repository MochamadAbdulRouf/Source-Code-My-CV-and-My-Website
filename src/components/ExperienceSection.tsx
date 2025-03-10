
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { BadgeCheck, Calendar, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in the world of infrastructure and DevOps, where I've helped companies build 
            scalable and reliable systems.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gray-200"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={cn(
                "relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start",
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              )}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                
                {/* Content positioning */}
                <div className={cn(
                  "md:contents",
                  index % 2 === 0 ? "" : "flex flex-col md:flex-row"
                )}>
                  {/* Date - Left side for even, right side for odd (on desktop) */}
                  <div className={cn(
                    "bg-white rounded-lg shadow-sm p-6 border border-gray-100",
                    index % 2 === 0 
                      ? "md:mr-8 ml-8 md:ml-0" 
                      : "md:order-2 md:ml-8 ml-8 md:mr-0"
                  )}>
                    <div className="flex flex-col space-y-3">
                      <span className="text-sm font-medium text-primary flex items-center gap-2">
                        <Calendar size={14} className="inline" />
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
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
