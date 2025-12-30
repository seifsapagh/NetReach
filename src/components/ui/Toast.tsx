import { CheckCircle, XCircle, Info, AlertCircle, X } from 'lucide-react';
import type { ToastProps } from '../../lib/types';

interface ToastComponentProps extends ToastProps {
  onClose: () => void;
}

export const Toast: React.FC<ToastComponentProps> = ({
  message,
  type,
  onClose,
}) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
  };

  const colors = {
    success: { bg: '#10b981', border: '#059669' },
    error: { bg: '#ef4444', border: '#dc2626' },
    info: { bg: '#3b82f6', border: '#2563eb' },
    warning: { bg: '#f59e0b', border: '#d97706' },
  };

  return (
    <div
      className="flex items-center gap-3 p-4 rounded-lg shadow-lg border min-w-[300px] animate-slide-in"
      style={{
        backgroundColor: colors[type].bg,
        borderColor: colors[type].border,
      }}
    >
      {icons[type]}
      <p className="flex-1 font-medium">{message}</p>
      <button onClick={onClose} className="hover:opacity-70">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
