
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Server, Database, Cloud, Terminal, Code, Shield, Users, Wifi } from 'lucide-react';
import { cn } from '@/lib/utils';
import KomunitasITLogo from './KomunitasITLogo';

// Define skill categories
const skillCategories = [
  {
    name: "Cloud Platforms",
    icon: <Cloud className="w-6 h-6 text-primary" />,
    skills: ["AWS"]
  },
  {
    name: "Containerization",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ["Docker", "Kubernetes"]
  },
  {
    name: "CI/CD",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: ["GitLab CI/CD"]
  },
  {
    name: "Infrastructure as Code",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: ["Terraform", "Ansible"]
  },
  {
    name: "Monitoring & Observability",
    icon: <Shield className="w-6 h-6 text-primary" />,
    skills: ["Prometheus"]
  },
  {
    name: "Database Management",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["PostgreSQL", "MySQL", "Redis", "DynamoDB"]
  },
  {
    name: "Network Administrator",
    icon: <Wifi className="w-6 h-6 text-primary" />,
    skills: ["MTCNA"]
  },
  {
    name: "Organizations",
    icon: <Users className="w-6 h-6 text-primary" />,
    skills: [
      <div key="komunitas" className="flex items-center gap-2">
        <KomunitasITLogo />
        <div className="flex flex-col">
          <span>Komunitas IT SMKN 1 Nglegok</span>
          <ul className="text-xs text-muted-foreground list-disc pl-4 mt-1 space-y-1">
            <li>Active member at Komunitas IT SMKN 1 NGLEGOK</li>
            <li>Ketua Pelaksana Outbound & Sertijab Komunitas IT SMKN 1 NGLEGOK | 2024</li>
            <li>Penanggung Jawab Sie Human Resource</li>
          </ul>
        </div>
      </div>
    ]
  }
];

const SkillBar = ({ name, level }: { name: string, level: number }) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%`, transitionDelay: '300ms' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <AnimatedSection id="skills" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My toolkit for building and maintaining modern infrastructure and DevOps pipelines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-6 border border-border shadow-md hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card rounded-xl p-8 border border-border shadow-md">
            <h3 className="text-xl font-semibold mb-6">Technical Proficiency</h3>
            <div className="space-y-6">
              <SkillBar name="Cloud Infrastructure" level={95} />
              <SkillBar name="CI/CD Implementation" level={90} />
              <SkillBar name="Container Orchestration" level={85} />
              <SkillBar name="Infrastructure as Code" level={92} />
              <SkillBar name="Security Implementation" level={80} />
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 border border-border shadow-md">
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="space-y-6">
              <SkillBar name="Technical Leadership" level={85} />
              <SkillBar name="Problem Solving" level={90} />
              <SkillBar name="Team Collaboration" level={95} />
              <SkillBar name="Communication" level={85} />
              <SkillBar name="Documentation" level={80} />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
