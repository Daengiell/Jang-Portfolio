export interface Project {
  id: string;
  title: string;
  category: 'WordPress Websites' | 'Custom Web Applications';
  subtitle?: string;
  shortDescription: string;
  fullDescription?: string;
  techStack: string[];
  role: string;
  url?: string; // Live website URL for WordPress sites
  isLive: boolean;
  image: string; // Screenshot or visual preview URL
  highlights?: string[];
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  badge?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badgeText: string;
}

export interface FeatureCardItem {
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  value: string;
  numericValue: number;
  label: string;
  suffix?: string;
  iconName: string;
}
