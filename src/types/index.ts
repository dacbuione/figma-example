// Common types used across the application

export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: {
    name: string;
    title: string;
    avatar?: string;
  };
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  popular?: boolean;
}

export interface FooterLink {
  id: number;
  title: string;
  links: {
    text: string;
    href: string;
  }[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
} 