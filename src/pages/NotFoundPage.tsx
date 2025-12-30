import { useToast } from '../hooks';
import { Terminal, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { showToast } = useToast();

  const handleGoHome = () => {
    showToast('Recalibrating coordinates...', 'info');
    setTimeout(() => {
      window.location.href = '/';
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="text-center max-w-2xl relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-8">
          <Terminal className="w-3 h-3" />
          Error Code: 404
        </div>
        <h1 className="text-7xl lg:text-9xl font-black text-white tracking-tighter mb-4">
          LOST IN <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-purple-800">
            THE VOID
          </span>
        </h1>
        <p className="text-lg text-slate-500 mb-12 max-w-md mx-auto font-medium leading-relaxed">
          The node you are looking for has been decommissioned or moved to a
          restricted sector.
        </p>
        <button
          onClick={handleGoHome}
          className="group flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-purple-400 rounded-full font-bold transition-all duration-300 mx-auto active:scale-95"
        >
          <Home className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          Return to Infrastructure
        </button>
      </div>
    </div>
  );
};
