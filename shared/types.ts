import { ReactNode } from "react";

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  actionLabel?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type Category = 'For Parents' | 'For Older Adults' | 'Medication Basics' | 'Seasonal Health';

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  readTime: string;
  date: string;
  author: string;
  content: ReactNode;
  keyPoints: string[];
}

export type ViewState = 'HOME' | 'BLOG_INDEX' | 'BLOG_POST' | 'RESOURCES_INDEX' | 'RESOURCES_FORMS' | 'RESOURCES_FAQS' | 'RESOURCES_GLOSSARY' | 'SERVICES_INDEX' | 'SERVICE_DETAIL' | 'PRIVACY_POLICY' | 'ABOUT';

export interface FormItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  actionType: 'PDF' | 'LINK';
}

export type FaqCategory = 'Transfers & Refills' | 'Delivery' | 'Insurance & Billing' | 'Kids Health';

export interface FaqItem {
  id: string;
  question: string;
  answer: ReactNode;
  category: FaqCategory;
}

export interface GlossaryItem {
  term: string;
  definition: string;
  importance: string;
}

export interface SubService {
  title?: string;
  items: string[];
}

export interface ServiceData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ElementType;
  subServices: SubService[];
  relatedServices: string[];
}

export interface GoogleReviewStats {
  rating: number;
  totalReviews: number;
  reviews: {
    text: string;
    author: string;
  }[];
}
