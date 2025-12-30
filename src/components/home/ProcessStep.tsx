import type { ProcessStepProps } from '../../lib/types';

export const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  index,
}) => {
  return (
    <div className="relative text-center">
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-black text-black shadow-lg shadow-purple-600/50">
        0{index}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
        {description}
      </p>
    </div>
  );
};
