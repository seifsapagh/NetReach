import { ProcessStep } from './ProcessStep';
import { PROCESS_STEPS } from '../../lib/constants';

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      className="py-32 bg-[#050508] relative overflow-hidden"
      id="how-it-works"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight text-white mb-6">
            The Deployment{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-purple-700">
              Cycle
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            A synchronized four-stage framework designed to move your brand from
            discovery to conversion velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-18 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />

          {PROCESS_STEPS.map((step, index) => (
            <ProcessStep key={index} {...step} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
