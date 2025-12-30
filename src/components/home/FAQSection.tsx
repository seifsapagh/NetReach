import { useState } from 'react';
import { FAQItem } from './FAQItem';
import { FAQ_DATA } from '../../lib/constants';

export const FAQSection: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#050508] py-32 lg:py-48 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
            Operational <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-purple-700">
              Insights
            </span>
          </h2>
          <p className="mt-8 text-lg text-slate-500 font-medium italic tracking-wide">
            "Transparency on network safety, deployment logic, and performance
            benchmarks."
          </p>
        </div>
        <div className="border-t border-white/5">
          {FAQ_DATA.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isExpanded={expandedFaq === index}
              onToggle={() =>
                setExpandedFaq(expandedFaq === index ? null : index)
              }
            />
          ))}
        </div>
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/3 border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
              Systems Operational:{' '}
              <span className="text-white">Node Network V.4.2</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
