
import React from 'react';

export const AbstractHeroVisual: React.FC = () => (
  <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center overflow-hidden rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-studio-violet/20 blur-[100px] rounded-full" />
    
    <svg width="100%" height="100%" viewBox="0 0 400 400" className="relative">
      <defs>
        <linearGradient id="visualGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#5B3CC4', stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: '#E94291', stopOpacity: 0.4 }} />
        </linearGradient>
      </defs>
      
      <circle cx="200" cy="200" r="160" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="2 2" />
      
      <circle cx="200" cy="200" r="80" fill="none" stroke="url(#visualGrad)" strokeWidth="1" />
      <circle cx="200" cy="200" r="40" fill="none" stroke="url(#visualGrad)" strokeWidth="0.5" strokeOpacity="0.5" />
      
      <rect 
        x="130" y="130" width="140" height="140" 
        fill="none" 
        stroke="url(#visualGrad)" 
        strokeWidth="1.5" 
        transform="rotate(45 200 200)" 
        className="animate-pulse"
      />
    </svg>
  </div>
);

export const GridBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px]" />
  </div>
);
