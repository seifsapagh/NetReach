import React from 'react';
// import { ShieldAlert } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { FEATURES } from '../../lib/constants';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-32 bg-[#050508] relative" id="features">
      <div className="absolute top-1/2 left-0 w-100 h-100 bg-purple-600/5 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight text-white mb-6">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-purple-700">
              Outreach Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            High-fidelity engagement systems designed to bridge the gap between
            social discovery and revenue without compromising account longevity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* <div className="mt-20 max-w-2xl mx-auto p-6 rounded-2xl bg-white/2 border border-white/5 flex items-start gap-5 transition-all hover:border-purple-500/20">
          <div className="shrink-0 p-2 rounded-lg bg-purple-500/10">
            <ShieldAlert className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
            <span className="text-purple-400/80 uppercase tracking-widest font-bold mr-2 text-[10px]">
              Disclosure:
            </span>
            NetReach is a specialized infrastructure provider. We do not
            distribute accounts or bypass toolsets. High-intensity engagement
            protocols are strictly opt-in, as they prioritize conversion
            velocity over total network longevity.
          </p>
        </div> */}
      </div>
    </section>
  );
};
