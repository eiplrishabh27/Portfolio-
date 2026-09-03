export interface Project {
  id: string;
  title: string;
  category: 'web-dev' | 'ecommerce' | 'marketing-seo' | 'portal';
  categoryLabel: string;
  description: string;
  detailedPoints: string[];
  liveUrl?: string;
  displayUrl?: string;
  tags: string[];
  badge: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  achievements?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  details?: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 100
  experience: string;
  highlight?: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ContactInfo {
  name: string;
  title: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  phone: string;
  email: string;
  secondaryEmail: string;
  profiles: {
    name: string;
    url: string;
    description: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  inquiryType: string;
  message: string;
}
