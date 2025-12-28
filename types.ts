
import { ReactNode } from 'react';

export interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: ReactNode;
}
