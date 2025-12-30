import React, { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../hooks';
import { copyToClipboard } from '../../utils';
import { PerformanceCard } from './PerformanceCard';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = async () => {
    const success = await copyToClipboard('@reachops_team');
    if (success) {
      setCopied(true);
      showToast('Username copied to clipboard!', 'success');
      setTimeout(() => setCopied(false), 2000);
    } else {
      showToast('Failed to copy to clipboard', 'error');
    }
  };

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
            <p className="text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
              We’ve eliminated the noise. NetReach operates in the background,
              building compliant social funnels that convert. No dashboards. No
              friction. Just results.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <a
                href="https://t.me/netreach_team"
                className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
              >
                Start Deployment
              </a>
              <button
                onClick={handleCopy}
                className="px-10 py-5 border border-white/10 hover:border-purple-500/50 text-white font-bold text-lg rounded-full flex items-center gap-3 transition-all bg-white/5 backdrop-blur-sm"
              >
                {copied ? (
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5 text-purple-400" />
                )}
                {copied ? 'Copied ID' : 'Copy Telegram ID'}
              </button>
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
