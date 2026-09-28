export interface NavItem {
  id: string;
  label: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageOff?: string;
}

export interface OnboardingStep {
  number: number;
  title: string;
  description: string;
  tags: string[];
}

export interface ProofVideo {
  poster: string;
  title: string;
  location: string;
}

export interface ProofStat {
  value: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  priceNote: string;
  cta: string;
  featured: boolean;
  includedLabel: string;
  features: string[];
}

export type FaqContactId = 'whatsapp' | 'phone';

export interface FaqContact {
  id: FaqContactId;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Partner {
  name: string;
  logo: string;
}
