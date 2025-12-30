import { useState, useCallback } from 'react';

import type { ReactNode } from 'react';
import { ToastContext } from './ToastContext';
import { ToastContainer } from '../../components/ui/ToastContainer';

import type { ToastProps } from '../../lib/types';

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const showToast = useCallback(
    (message: string, type: ToastProps['type'], duration = 3000) => {
      const id = Date.now().toString();
      const newToast: ToastProps = { id, message, type, duration };

      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};
