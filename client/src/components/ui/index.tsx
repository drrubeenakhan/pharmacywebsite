import React from 'react';
import { SectionProps, CardProps, ButtonProps } from '@shared/types';
import { ArrowRight } from 'lucide-react';

export const Section: React.FC<SectionProps> = ({ id, className = "", children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-6 md:px-12 w-full flex justify-center ${dark ? 'bg-paper-dark' : 'bg-paper'} ${className}`}
    >
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export const Card: React.FC<CardProps> = ({ title, children, className = "", actionLabel, icon, onClick }) => {
  return (
    <div 
      className={`bg-white border border-stone-200 rounded-xl p-6 md:p-8 flex flex-col items-start shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {icon && <div className="mb-4 text-ida">{icon}</div>}
      <h3 className="font-serif text-xl md:text-2xl text-ink font-medium mb-3">{title}</h3>
      <div className="text-ink-light text-base leading-relaxed mb-6 flex-grow font-sans">
        {children}
      </div>
      {actionLabel && (
        <div className="mt-auto pt-2 flex items-center text-ida font-medium text-sm group cursor-pointer">
          {actionLabel}
          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </div>
  );
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', fullWidth, className = "", children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-ida disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-ida text-white hover:bg-ida-light shadow-sm",
    secondary: "bg-stone-200 text-ink hover:bg-stone-300",
    outline: "bg-transparent border border-ida text-ida hover:bg-ida-faint",
    ghost: "bg-transparent text-ida hover:text-ida-light underline-offset-4 hover:underline p-0 h-auto"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const StatCard: React.FC<{ label: string; value: string; sub?: string }> = ({ label, value, sub }) => (
  <div className="flex flex-col border-l-2 border-ida/20 pl-6 py-2">
    <span className="text-3xl font-serif text-ida mb-1">{value}</span>
    <span className="text-sm font-semibold uppercase tracking-wider text-ink/60 mb-1">{label}</span>
    {sub && <span className="text-xs text-ink-light">{sub}</span>}
  </div>
);
