import React from 'react';
import type { FeatureCardProps } from '../../lib/types';

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group relative p-10 rounded-[2.5rem] bg-[#0c0c12] border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-purple-500/5 flex items-center justify-center mb-8 border border-purple-500/10 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-500">
          <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white tracking-tight group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium group-hover:text-slate-400 transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-transparent via-purple-500/50 to-transparent group-hover:w-full transition-all duration-700" />
    </div>
  );
};
