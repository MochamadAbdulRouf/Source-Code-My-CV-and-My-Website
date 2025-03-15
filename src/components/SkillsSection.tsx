
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Server, Database, Cloud, Terminal, Code, Shield, Users, Gitlab, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import KomunitasITLogo from './KomunitasITLogo';

// Skill logos
const SkillLogo = ({ name }: { name: string }) => {
  switch (name.toLowerCase()) {
    case 'aws':
      return (
        <div className="flex items-center gap-2">
          <Cloud className="w-4 h-4 text-[#FF9900]" />
          <span>{name}</span>
        </div>
      );
    case 'docker':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5H15V7H13V5Z" fill="#2496ED"/>
            <path d="M13 8H15V10H13V8Z" fill="#2496ED"/>
            <path d="M10 8H12V10H10V8Z" fill="#2496ED"/>
            <path d="M7 8H9V10H7V8Z" fill="#2496ED"/>
            <path d="M10 5H12V7H10V5Z" fill="#2496ED"/>
            <path d="M5.6 12.2C5.2 12.2 5 12 5 11.6V11C5 10.6 5.2 10.4 5.6 10.4H6V9.8C6 9.4 6.2 9.2 6.6 9.2H10V7H16V9.2H21.4C21.8 9.2 22 9.4 22 9.8V10.4H22.8C22.8 12.8 21.8 13.6 19.4 13.6H9.2C8.1 16 6.4 17.2 4 17.2H1.6C1.2 17.2 1 17 1 16.6V16C1 15.6 1.2 15.4 1.6 15.4H4C5.6 15.4 6.7 14.1 6.8 12.2H5.6Z" fill="#2496ED"/>
          </svg>
          <span>{name}</span>
        </div>
      );
    case 'kubernetes':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#326CE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V17" stroke="#326CE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 7L12 12L3 7" stroke="#326CE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 17L12 12L21 17" stroke="#326CE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2V7" stroke="#326CE5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{name}</span>
        </div>
      );
    case 'gitlab ci/cd':
      return (
        <div className="flex items-center gap-2">
          <Gitlab className="w-4 h-4 text-[#FC6D26]" />
          <span>{name}</span>
        </div>
      );
    case 'terraform':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4 4.8H1.2V12L8.4 19.2V4.8Z" fill="#7B42BC"/>
            <path d="M15.6 4.8H8.4V12L15.6 19.2V4.8Z" fill="#7B42BC" fillOpacity="0.7"/>
            <path d="M8.4 12H1.2V19.2L8.4 12Z" fill="#7B42BC" fillOpacity="0.5"/>
            <path d="M15.6 4.8H22.8V12L15.6 19.2V4.8Z" fill="#7B42BC" fillOpacity="0.7"/>
          </svg>
          <span>{name}</span>
        </div>
      );
    case 'ansible':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="#EE0000"/>
            <path d="M16.7 15.3L11.1 7L9.1 11.1L12.3 15.6L16.7 15.3Z" fill="white"/>
            <path d="M9.1 11.1L7.3 15.3L12.3 15.6L9.1 11.1Z" fill="white"/>
          </svg>
          <span>{name}</span>
        </div>
      );
    case 'prometheus':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3.5C7.3 3.5 3.5 7.3 3.5 12C3.5 16.7 7.3 20.5 12 20.5C16.7 20.5 20.5 16.7 20.5 12C20.5 7.3 16.7 3.5 12 3.5Z" fill="#E6522C"/>
            <path d="M11.5 7H12.5V13H11.5V7Z" fill="white"/>
            <path d="M16.2 14.5L15.5 15.3L11.2 11.7L11.9 10.9L16.2 14.5Z" fill="white"/>
            <path d="M13 16H11V17H13V16Z" fill="white"/>
          </svg>
          <span>{name}</span>
        </div>
      );
    case 'postgresql':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C7.6 2 4 4.3 4 7.1C4 8.6 5 9.9 6.6 10.9C6.1 12.4 5.6 13.3 5.6 14.2C5.6 14.8 6 15.3 6.6 15.3C7.1 15.3 7.5 15 7.7 14.5C8.1 15.1 8.5 15.6 9 16.1C8.1 16.8 7.6 17.7 7.6 18.7C7.6 20.5 9.5 22 12 22C14.5 22 16.4 20.5 16.4 18.7C16.4 17.7 15.9 16.8 15 16.1C15.5 15.6 15.9 15.1 16.3 14.5C16.5 15 16.9 15.3 17.4 15.3C18 15.3 18.4 14.8 18.4 14.2C18.4 13.3 17.9 12.4 17.4 10.9C19 9.9 20 8.6 20 7.1C20 4.3 16.4 2 12 2Z" fill="#336791"/>
            <path d="M12.3 15.6C12.9 15.6 13.5 15.2 13.5 14.7C13.5 14.2 12.9 13.8 12.3 13.8C11.7 13.8 11.1 14.2 11.1 14.7C11.1 15.2 11.7 15.6 12.3 15.6Z" fill="white"/>
          </svg>
          <span>{name}</span>
        </div>
      );
    case 'mysql':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4 5.2C16 5.2 15.6 5.3 15.2 5.5C15 5.6 14.9 5.8 14.9 6C14.9 6.1 15 6.2 15.1 6.3C15.2 6.4 15.3 6.4 15.4 6.4H15.6C15.8 6.4 16 6.5 16.2 6.7C16.4 6.9 16.5 7.1 16.5 7.3V7.5C16.5 7.7 16.4 7.9 16.2 8.1C16 8.3 15.8 8.4 15.6 8.4H15.4C15.3 8.4 15.2 8.5 15.1 8.6C15 8.7 14.9 8.8 14.9 8.9C14.9 9 15 9.1 15.1 9.2C15.2 9.3 15.3 9.3 15.4 9.3H15.6C16.1 9.3 16.5 9.1 16.9 8.8C17.3 8.5 17.5 8.1 17.5 7.6V7.4C17.5 6.9 17.3 6.5 16.9 6.2C16.5 5.9 16.1 5.7 15.6 5.7H15.4C15.3 5.4 15.4 5.3 15.6 5.3C15.8 5.3 16 5.4 16.2 5.5C16.4 5.5 16.5 5.5 16.6 5.5C16.7 5.5 16.8 5.5 16.9 5.4C17 5.3 17.1 5.2 17.1 5.1C17.1 5 17 4.9 16.8 4.8C16.7 4.7 16.5 4.7 16.4 4.7V5.2Z" fill="#00618A"/>
            <path d="M6.4 9.3C6.7 9.3 7 9.1 7.2 8.8C7.4 8.5 7.5 8.1 7.5 7.6V7.4C7.5 6.9 7.4 6.5 7.2 6.2C7 5.9 6.7 5.7 6.4 5.7C6.1 5.7 5.8 5.9 5.6 6.2C5.4 6.5 5.3 6.9 5.3 7.4V7.6C5.3 8.1 5.4 8.5 5.6 8.8C5.8 9.1 6.1 9.3 6.4 9.3Z" fill="#00618A"/>
            <path d="M11.9 5.7C11.6 5.7 11.4 5.9 11.3 6.2C11.2 6.5 11.1 6.9 11.1 7.4V7.6C11.1 8.1 11.2 8.5 11.3 8.8C11.5 9.1 11.7 9.3 12 9.3C12.3 9.3 12.5 9.1 12.7 8.8C12.8 8.5 12.9 8.1 12.9 7.6V7.4C12.9 6.9 12.8 6.5 12.7 6.2C12.5 5.9 12.3 5.7 12 5.7H11.9Z" fill="#00618A"/>
            <path d="M18.3 5.7H18.2C18.1 5.7 18 5.8 17.9 5.9C17.8 6 17.8 6.1 17.8 6.2C17.8 6.3 17.9 6.4 18 6.5C18.1 6.6 18.2 6.6 18.3 6.6H18.4C18.6 6.6 18.8 6.7 19 6.9C19.1 7.1 19.2 7.3 19.2 7.5V7.7C19.2 7.9 19.1 8.1 19 8.3C18.8 8.5 18.6 8.6 18.4 8.6H18.2C18.1 8.6 18 8.7 17.9 8.8C17.8 8.9 17.8 9 17.8 9.1C17.8 9.2 17.9 9.3 18 9.4C18.1 9.5 18.2 9.5 18.3 9.5H18.5C19 9.5 19.4 9.3 19.7 9C20 8.7 20.2 8.3 20.2 7.8V7.6C20.2 7.1 20 6.7 19.7 6.4C19.4 6.1 19 5.9 18.5 5.9H18.3V5.7Z" fill="#00618A"/>
            <path d="M4.4 9.5C4.7 9.5 5 9.4 5.2 9.2C5.3 9.1 5.4 9 5.4 8.9C5.4 8.8 5.3 8.7 5.2 8.6C5.1 8.5 5 8.5 4.9 8.5H4.7C4.5 8.5 4.3 8.4 4.1 8.2C4 8 3.9 7.8 3.9 7.6V7.4C3.9 7.2 4 7 4.1 6.8C4.3 6.6 4.5 6.5 4.7 6.5H4.8C4.9 6.5 5 6.4 5.1 6.3C5.2 6.2 5.3 6.1 5.3 6C5.3 5.9 5.2 5.8 5.1 5.7C5 5.6 4.9 5.6 4.8 5.6H4.6C4.1 5.6 3.7 5.8 3.4 6.1C3.1 6.4 2.9 6.8 2.9 7.3V7.5C2.9 8 3.1 8.4 3.4 8.7C3.7 9 4.1 9.2 4.6 9.2H4.4V9.5Z" fill="#00618A"/>
            <path d="M9.1 5.6C9 5.6 8.9 5.7 8.8 5.8C8.7 5.9 8.7 6 8.7 6.1V8.9C8.7 9 8.8 9.1 8.9 9.2C9 9.3 9.1 9.3 9.2 9.3C9.3 9.3 9.4 9.2 9.5 9.1C9.6 9 9.6 8.9 9.6 8.8V6C9.6 5.9 9.5 5.8 9.4 5.7C9.3 5.6 9.2 5.6 9.1 5.6Z" fill="#00618A"/>
            <path d="M20.8 5.6C20.7 5.6 20.6 5.7 20.5 5.8C20.4 5.9 20.4 6 20.4 6.1V8.9C20.4 9 20.5 9.1 20.6 9.2C20.7 9.3 20.8 9.3 20.9 9.3C21 9.3 21.1 9.2 21.2 9.1C21.3 9 21.3 8.9 21.3 8.8V6C21.3 5.9 21.2 5.8 21.1 5.7C21 5.6 20.9 5.6 20.8 5.6Z" fill="#00618A"/>
            <path d="M10.2 17.5V15.4H8.7V17.5H7.9L9.4 19L11 17.5H10.2Z" fill="#00618A"/>
            <path d="M11.3 10.4H19.1V10.9H11.3V10.4Z" fill="#E48E00"/>
            <path d="M11.3 11.5H19.1V12H11.3V11.5Z" fill="#E48E00"/>
            <path d="M11.3 12.6H19.1V13.1H11.3V12.6Z" fill="#E48E00"/>
            <path d="M11.3 13.7H19.1V14.2H11.3V13.7Z" fill="#E48E00"/>
            <path d="M11.3 14.8H14.8V15.3H11.3V14.8Z" fill="#E48E00"/>
            <path d="M3.2 18.9C3.2 18.7 3.3 18.5 3.5 18.4C3.7 18.3 3.9 18.2 4.1 18.3C4.3 18.4 4.3 18.6 4.2 18.8H4C3.9 18.7 3.8 18.7 3.7 18.7C3.6 18.7 3.6 18.8 3.6 19C3.6 19.1 3.7 19.2 3.8 19.2C3.9 19.2 4 19.2 4.1 19.1H4.3C4.3 19.3 4.2 19.5 4 19.6C3.8 19.7 3.6 19.6 3.4 19.5C3.3 19.4 3.2 19.2 3.2 18.9Z" fill="#00618A"/>
            <path d="M4.5 18.4H4.9L5.1 19.1L5.3 18.4H5.7V19.6H5.4V18.8L5.2 19.6H5L4.8 18.8V19.6H4.5V18.4Z" fill="#00618A"/>
            <path d="M5.9 18.4H6.3V19.3H6.6V19.6H5.9V18.4Z" fill="#00618A"/>
            <path d="M6.8 18.4H7.2V19.3H7.6V19.6H6.8V18.4Z" fill="#00618A"/>
            <path d="M7.8 18.4H8.5V18.7H8.1V18.9H8.4V19.2H8.1V19.4H8.5V19.7H7.8V18.4Z" fill="#00618A"/>
            <path d="M4.9 14.5L4.6 14.3C4.6 14.3 4.8 14 5.1 13.9C5.4 13.8 5.6 13.9 5.6 13.9L5.5 14.2C5.5 14.2 5.4 14.1 5.2 14.2C5 14.3 4.9 14.5 4.9 14.5Z" fill="#00618A"/>
            <path d="M6 11.9C6 11.9 5.3 12 5.2 13C5.1 14 5.6 14.3 5.6 14.3L5.8 14C5.8 14 5.5 13.8 5.6 13.1C5.6 12.4 6 11.9 6 11.9Z" fill="#00618A"/>
            <path d="M6.1 14.4V13.1H6.3C6.4 13.1 6.5 13.2 6.5 13.2C6.6 13.3 6.6 13.4 6.6 13.5C6.6 13.7 6.5 13.8 6.3 13.9L6.7 14.4H6.4L6.1 13.9H6V14.4H6.1ZM6.1 13.8H6.2C6.3 13.8 6.4 13.7 6.4 13.5C6.4 13.3 6.3 13.3 6.2 13.3H6.1V13.8Z" fill="#00618A"/>
            <path d="M6.7 13.8C6.7 13.5 6.9 13.1 7.4 13.1C7.8 13.1 8 13.5 8 13.8C8 14.1 7.8 14.5 7.4 14.5C7 14.5 6.7 14.1 6.7 13.8ZM7.4 14.3C7.7 14.3 7.8 14 7.8 13.8C7.8 13.5 7.7 13.3 7.4 13.3C7.2 13.3 7 13.5 7 13.8C7 14 7.2 14.3 7.4 14.3Z" fill="#00618A"/>
            <path d="M8.1 13.1H8.3L8.6 14.1L8.9 13.1H9.1L8.7 14.4H8.4L8.1 13.1Z" fill="#00618A"/>
            <path d="M9.2 13.1H9.9V13.3H9.5V13.7H9.8V13.9H9.4V14.3H9.9V14.5H9.2V13.1Z" fill="#00618A"/>
            <path d="M10 13.1H10.2L10.7 13.9V13.1H10.9V14.4H10.7L10.2 13.6V14.4H10V13.1Z" fill="#00618A"/>
          </svg>
          <span>{name}</span>
        </div>
      );
    case 'redis':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.3 8.5L14.5 10.3L11.3 12.1L8.1 10.3L11.3 8.5Z" fill="#A41E11"/>
            <path d="M18.1 7.7L15.7 8.8L18.1 9.9L20.5 8.8L18.1 7.7Z" fill="#A41E11"/>
            <path d="M4.5 7.7L6.9 8.8L4.5 9.9L2.1 8.8L4.5 7.7Z" fill="#A41E11"/>
            <path d="M11.3 3.9L14.5 5.7L11.3 7.5L8.1 5.7L11.3 3.9Z" fill="#A41E11"/>
            <path d="M11.3 13.1L14.5 14.9L11.3 16.7L8.1 14.9L11.3 13.1Z" fill="#A41E11"/>
            <path d="M11.3 17.7L14.5 19.5L11.3 21.3L8.1 19.5L11.3 17.7Z" fill="#A41E11"/>
          </svg>
          <span>{name}</span>
        </div>
      );
    case 'dynamodb':
      return (
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 3.5C13.5 4.33 11.9 5 10 5C8.1 5 6.5 4.33 6.5 3.5C6.5 2.67 8.1 2 10 2C11.9 2 13.5 2.67 13.5 3.5Z" fill="#4D27A8"/>
            <path d="M13.5 3.5V14.5C13.5 15.33 11.9 16 10 16C8.1 16 6.5 15.33 6.5 14.5V3.5" stroke="#4D27A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 7.5C17.5 8.33 15.9 9 14 9C12.1 9 10.5 8.33 10.5 7.5C10.5 6.67 12.1 6 14 6C15.9 6 17.5 6.67 17.5 7.5Z" fill="#4D27A8"/>
            <path d="M17.5 7.5V18.5C17.5 19.33 15.9 20 14 20C12.1 20 10.5 19.33 10.5 18.5V7.5" stroke="#4D27A8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{name}</span>
        </div>
      );
    default:
      return <span>{name}</span>;
  }
};

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
    name: "Organizations",
    icon: <Users className="w-6 h-6 text-primary" />,
    skills: [
      <div key="komunitas" className="flex items-center gap-2">
        <KomunitasITLogo />
        <span>Komunitas IT SMKN 1 Nglegok</span>
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
                    {typeof skill === 'string' 
                      ? <SkillLogo name={skill} />
                      : skill}
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
