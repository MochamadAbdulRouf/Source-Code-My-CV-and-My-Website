
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ArrowUpRight, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define project data
const projects = [
  {
    title: "Enterprise Kubernetes Platform",
    description: "Built a scalable Kubernetes platform serving 50+ microservices with automated CI/CD pipelines, monitoring, and self-healing capabilities.",
    tags: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus"],
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  },
  {
    title: "Multi-Cloud Infrastructure",
    description: "Designed and implemented a fault-tolerant infrastructure spanning AWS and GCP with automated failover and disaster recovery capabilities.",
    tags: ["AWS", "GCP", "Terraform", "CloudFormation"],
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  },
  {
    title: "Automated Security Scanning Pipeline",
    description: "Developed an automated security scanning pipeline integrated with CI/CD workflows to identify vulnerabilities before deployment.",
    tags: ["Jenkins", "SonarQube", "Docker", "OWASP"],
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  },
  {
    title: "Database Migration Tool",
    description: "Created a zero-downtime database migration tool that automated the transition from on-premise to cloud databases.",
    tags: ["Python", "PostgreSQL", "AWS RDS", "Lambda"],
    image: "/placeholder.svg",
    link: "#",
    github: "#"
  }
];

const ProjectsSection = () => {
  return (
    <AnimatedSection id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in infrastructure design, DevOps automation, and system optimization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.link}
                    className="text-sm font-medium text-primary flex items-center gap-1 hover:underline"
                  >
                    View Project <ArrowUpRight size={14} />
                  </a>
                  <a 
                    href={project.github}
                    className="text-sm font-medium text-gray-600 flex items-center gap-1 hover:text-primary"
                  >
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            These are just a few highlights from my project portfolio.
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-primary font-medium hover:underline gap-1"
          >
            View more on GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
