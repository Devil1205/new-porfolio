
import { Skill, Project, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Pulkit Sachdeva",
  location: "New Delhi, IN",
  email: "sachdeva.pulkit2599@gmail.com",
  phone: "+91 8470950994",
  experienceYears: "~2",
  github: "https://github.com/Devil1205",
  linkedin: "https://www.linkedin.com/in/pulkit-sachdeva-8a72a7121",
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Neuronimbus Software Services (P) Ltd.",
    location: "Gurugram, Haryana",
    duration: "Jun 2024 - Present",
    description: [
      "Developed and delivered over 7+ scalable projects using Node.js, Next.js, React.js, MongoDB, PostgreSQL following clean and optimized coding strategies.",
      "Improved API performance by 72% and reduced average page load time by 87% using SSR and database query optimization.",
      "Collaborated with mobile, testing and IT teams to ensure smooth project deliveries.",
      "Contributed to production grade deployments using NGINX ensuring almost zero downtime."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Node.js', level: 90, category: 'Backend' },
  { name: 'Express.js', level: 90, category: 'Backend' },
  { name: 'React.js', level: 90, category: 'Frontend' },
  { name: 'REST APIs', level: 88, category: 'Backend' },
  { name: 'Next.js', level: 80, category: 'Frontend' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'MongoDB', level: 78, category: 'Database' },
  { name: 'Git', level: 78, category: 'Tools' },
  { name: 'TailwindCSS', level: 72, category: 'Frontend' },
  { name: 'Redux/Redux Toolkit', level: 72, category: 'Frontend' },
  { name: 'Web Sockets', level: 72, category: 'Backend' },
  { name: 'AWS', level: 70, category: 'Tools' },
  { name: 'NGINX', level: 65, category: 'DevOps' },
  { name: 'Redis', level: 65, category: 'Database' },
  { name: 'i18next', level: 60, category: 'Frontend' },
  { name: 'Azure', level: 58, category: 'Tools' },
  { name: 'Docker', level: 58, category: 'DevOps' },
  { name: 'BullMQ', level: 56, category: 'Backend' },
  { name: 'TypeScript', level: 50, category: 'Backend' },
  { name: 'GraphQL', level: 48, category: 'Backend' },
  { name: 'C++', level: 80, category: 'DSA & Programming' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Hindware",
    description: "Engineered core backend APIs for Hindware Ltd., handling ~3-4 Lakhs monthly active users with security and performance enhancements. Developed and integrated frontend along with production deployment with almost zero downtime.",
    tags: ["Node.js", "Next.js", "React.js", "PostgreSQL", "Azure"],
    imageUrl: "/hindware.jpg",
    demoUrl: "https://hindware.com"
  },
  {
    id: 2,
    title: "Mahindra Recruit (SaaS)",
    description: "Internal recruitment platform developed as SaaS and being used by The Mahindra Group. and Neuronimbus team that Streamlined job postings, candidate tracking, and interview scheduling.",
    tags: ["Node.js", "Next.js", "React.js", "PostgreSQL", "AWS"],
    imageUrl: "/mahindra_recruit.jpg",
    demoUrl: "http://mahindra.itsneobot.com"
  },
  {
    id: 3,
    title: "CarTreks Rental",
    description: "Unified car booking platform with <200ms avg response time. Integrated Stripe for secure, scalable payment processing.",
    tags: ["Node.js", "Next.js", "React.js", "PostgreSQL", "Stripe"],
    imageUrl: "/carTreks.jpg",
    demoUrl: "http://13.201.135.1:4005"
  },
  {
    id: 4,
    title: "Careventory",
    description: "A highly secure and robus inventory management system for lens management (order, return, catalogue etc.) providing high data consistency using transactions for all operations.",
    tags: ["Node.js", "React.js", "PostgreSQL", "Nginx"],
    imageUrl: "/kluvor.jpg",
    demoUrl: "https://kims.kluvor.co"
  },
  {
    id: 5,
    title: "TimberCraft",
    description: "A freelance frontend project developed for a furniture store to showcase their services online. Built with vite(React.js) for a fast and smooth user experience.",
    tags: ["React.js", "TailwindCSS", "CSS", "Animations"],
    imageUrl: "/timberCraft.jpg",
    repoUrl: "https://github.com/Devil1205/timbercraft",
    demoUrl: "https://devil1205.github.io/timbercraft"
  },
  {
    id: 6,
    title: "MyStore",
    description: "A personal project featuring a full fledged highly scalable e-commerce platform involving Redis caching, rate-limiting, message queue and payment gateway integration.",
    tags: ["Node.js", "React.js", "MongoDB",  "Redis", "Stripe", "BullMQ"],
    imageUrl: "/myStore.jpg",
    repoUrl: "https://github.com/Devil1205/myStore",
    demoUrl: "https://mystore-2twg.onrender.com"
  },
];
