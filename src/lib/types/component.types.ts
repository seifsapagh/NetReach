import type { LucideIcon } from 'lucide-react';

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStepProps {
  title: string;
  description: string;
  index: number;
}

export interface FAQItemProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface StoreProduct {
  id: string | number;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: 'all' | 'accounts' | 'proxy' | 'tools';
}
