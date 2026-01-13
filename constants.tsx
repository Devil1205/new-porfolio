
import { Skill, Project, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Pulkit Sachdeva",
  location: "New Delhi, IN",
  email: "sachdeva.pulkit2599@gmail.com",
  phone: "+91 8470950994",
  experienceYears: "1.6+",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Neuronimbus Software Services (P) Ltd.",
    location: "Gurugram, Haryana",
    duration: "Jun 2024 - Present",
    description: [
      "Developed and delivered over 7+ scalable projects using NodeJS, ReactJS, MongoDB, PostgreSQL, NextJS following clean and optimized coding strategies.",
      "Improved API performance by 72% and reduced average page load time by 87% using SSR and database query optimization.",
      "Collaborated with IT team and contributed to production grade deployment using NGINX ensuring zero downtime."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Next.js', level: 95, category: 'Frontend' },
  { name: 'React.js', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 92, category: 'Backend' },
  { name: 'Express.js', level: 90, category: 'Backend' },
  { name: 'PostgreSQL', level: 88, category: 'Database' },
  { name: 'MongoDB', level: 90, category: 'Database' },
  { name: 'Redis', level: 82, category: 'Database' },
  { name: 'Redux Toolkit', level: 85, category: 'Frontend' },
  { name: 'TailwindCSS', level: 95, category: 'Frontend' },
  { name: 'Docker', level: 75, category: 'DevOps' },
  { name: 'BullMQ', level: 80, category: 'Backend' },
  { name: 'Web Sockets', level: 85, category: 'Backend' },
  { name: 'NGINX', level: 78, category: 'DevOps' },
  { name: 'C++', level: 80, category: 'DevOps' },
  { name: 'REST APIs', level: 95, category: 'Backend' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Hindware E-Commerce",
    description: "Engineered core backend APIs for Hindware Ltd., handling ~3-4 Lakhs monthly active users with security and performance enhancements.",
    tags: ["Node.js", "React.js", "MongoDB", "PostgreSQL", "NextJS"],
    imageUrl: "https://picsum.photos/800/600?random=11",
    demoUrl: "https://hindware.com"
  },
  {
    id: 2,
    title: "Mahindra Recruitment",
    description: "Internal recruitment platform for The Mahindra Group. Streamlined job postings, candidate tracking, and interview scheduling.",
    tags: ["React", "Express", "Node.js", "MongoDB"],
    imageUrl: "https://picsum.photos/800/600?random=12",
    demoUrl: "http://mahindra.itsneobot.com"
  },
  {
    id: 3,
    title: "CarTrek Rental",
    description: "Unified car booking platform with <200ms avg response time. Integrated Stripe for secure, scalable payment processing.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Node.js"],
    imageUrl: "https://picsum.photos/800/600?random=13",
    demoUrl: "http://13.201.135.1:4005"
  },
  {
    id: 4,
    title: "Kluvor Lens Management",
    description: "Inventory management system for lens orders and returns. Migrated to PostgreSQL for faster and more efficient data storage.",
    tags: ["Next.js", "PostgreSQL", "Node.js"],
    imageUrl: "https://picsum.photos/800/600?random=14",
    demoUrl: "https://kims.kluvor.co"
  }
];
