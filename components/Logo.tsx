
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Pink Vertical Pill - Left element */}
    <rect 
      x="28" 
      y="42" 
      width="11" 
      height="30" 
      rx="5.5" 
      fill="#E94291" 
    />
    
    {/* Purple D-Curve - Right element with rounded caps */}
    <path 
      d="M50 31H66C76.4934 31 85 39.5066 85 50C85 60.4934 76.4934 69 66 69H50" 
      stroke="#5B3CC4" 
      strokeWidth="11" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);
