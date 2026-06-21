export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "cloud" | "other";
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Education {
  school: string;
  degree: string;
  graduation: string;
  location: string;
  courses: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PortfolioData {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  bio: string[];
  aboutParagraphs: string[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
  education: Education;
  social: SocialLinks;
  resumeUrl: string;
}
