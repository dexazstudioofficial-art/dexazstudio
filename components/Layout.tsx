
import React from 'react';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {title && (
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-studio-black">{title}</h2>
        {subtitle && <p className="text-studio-grey max-w-3xl mx-auto leading-relaxed text-lg">{subtitle}</p>}
        <div className="w-24 h-1 bg-gradient-to-r from-studio-violet to-studio-pink mt-8 rounded-full mx-auto" />
      </div>
    )}
    {children}
  </section>
);

export const GlassCard: React.FC<{ children: React.ReactNode, className?: string, dark?: boolean }> = ({ children, className = "", dark = false }) => (
  <div className={`rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:translate-y-[-4px] border ${dark ? 'bg-studio-charcoal border-white/5 text-white' : 'bg-white border-black/5 text-studio-black shadow-sm'} ${className}`}>
    {children}
  </div>
);
