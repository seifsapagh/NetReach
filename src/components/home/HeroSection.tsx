import { ShieldCheck, Lock, TrendingUp } from 'lucide-react';
import { PerformanceCard } from './PerformanceCard';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#050508] py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-purple-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-white">
              NetReach — <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-purple-700">
                Elite Outreach
              </span>
            </h1>
            <p className="text-lg text-[1.3rem] text-slate-400 leading-relaxed max-w-2xl font-medium">
              We’ve eliminated the noise. NetReach operates in the background,
              building compliant social funnels that convert. No dashboards. No
              friction. Just results.
            </p>
            
        <div className="flex flex-col gap-x-10 gap-y-4 text-[13px] uppercase tracking-[0.18em] font-bold text-slate-400">
          
          <span className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            Your accounts stay protected
          </span>

          <span className="flex items-center gap-3">
            <Lock className="w-4 h-4 text-purple-400" />
            Privacy-first infrastructure
          </span>

          <span className="flex items-center gap-3">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            High reply rates
          </span>

        </div>

          </div>

          <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000">
            <PerformanceCard />
          </div>
        </div>
      </div>
    </section>
  );
};
