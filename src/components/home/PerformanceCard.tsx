import { useState } from 'react';

export const PerformanceCard = () => {
  const [metrics] = useState(() => {
    const baseReach = 1240000;
    const baseEngage = 24.5;
    const baseIntent = 6.2;

    return {
      reach: (baseReach + Math.floor(Math.random() * 45000)).toLocaleString(),
      engagement: (baseEngage + Math.random() * 3).toFixed(1),
      intent: (baseIntent + Math.random() * 1.5).toFixed(2),
      sessionId: Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, '0'),
    };
  });

  return (
    <div className="bg-[#0c0c12] border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative w-full max-w-md backdrop-blur-xl">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_purple]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-purple-400 font-black">
            System Live
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-600">
          NODE_ID: {metrics.sessionId}
        </span>
      </div>

      <div className="space-y-10">
        <div>
          <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 font-bold">
            Aggregated Network Reach
          </p>
          <div className="text-6xl font-mono font-bold tracking-tighter text-white">
            {metrics.reach}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
          <div>
            <p className="text-slate-600 text-[10px] uppercase tracking-widest mb-1">
              Engagement
            </p>
            <div className="text-3xl font-mono font-bold text-purple-400">
              {metrics.engagement}%
            </div>
          </div>
          <div>
            <p className="text-slate-600 text-[10px] uppercase tracking-widest mb-1">
              Conv. Velocity
            </p>
            <div className="text-3xl font-mono font-bold text-white">
              {metrics.intent}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
