import { createContext } from 'react';
import type { ToastContextType } from '../../lib/types';

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);
