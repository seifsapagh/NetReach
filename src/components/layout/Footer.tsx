import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050508] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-xl font-bold tracking-tighter text-white">
            Net<span className="text-purple-500">Reach</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-purple-500" />
              Not Affiliated with X or Meta
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-purple-500" />
              Privacy-First Architecture
            </span>
          </div>
          <p className="text-sm text-slate-600 font-medium">
            © 2024 NetReach. Operational Excellence.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] md:text-xs text-slate-700 text-center leading-relaxed font-medium">
            <span className="text-slate-500 mr-1">Compliance Protocol:</span>
            All outreach activities are executed through a decentralized node
            network within platform safety parameters. We do not utilize
            automated credential harvesting, API bypasses, or prohibited evasion
            assets. Our methodology prioritizes human-first communication
            patterns to maximize account longevity and maintain the highest
            standards of ethical engagement.
          </p>
        </div>
      </div>
    </footer>
  );
};
