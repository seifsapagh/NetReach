import { ChevronDown } from 'lucide-react';
import type { FAQItemProps } from '../../lib/types';

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="border-b border-white/5 transition-all duration-500">
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="cursor-pointer w-full py-8 flex items-center justify-between text-left group outline-none"
      >
        <span
          className={`text-lg md:text-xl font-bold tracking-tight transition-all duration-300 ${
            isExpanded
              ? 'text-purple-400'
              : 'text-slate-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]'
          }`}
        >
          {question}
        </span>

        <div
          className={`p-2 rounded-xl transition-all duration-500 ${
            isExpanded
              ? 'bg-purple-500/20 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]'
              : 'bg-white/5 text-slate-500 group-hover:bg-white/10 group-hover:text-slate-300'
          }`}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isExpanded
            ? 'grid-rows-[1fr] opacity-100 mb-8'
            : 'grid-rows-[0fr] opacity-0 mb-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-3xl font-medium antialiased">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};
